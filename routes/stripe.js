const settings = require('../handlers/readSettings').settings();
const makeid = require('../handlers/makeid');

if (settings.stripe.enabled == true) {
const stripe = require('stripe')(settings.stripe.key);

module.exports.load = async function(app, ejs, db) {
  app.get("/buycoins", async(req, res) => {
    if (!req.session.pterodactyl) return res.redirect('/login?redirect=buy')

    if (!req.query.number || !req.query.month || !req.query.year || !req.query.cvc || !req.query.amount) return res.redirect('/buy?err=MISSING_INFO')

    const token = await stripe.tokens.create({
        card: {
            number: req.query.number,
            exp_month: req.query.month,
            exp_year: req.query.year,
            cvc: req.query.cvc
        },
    });

    const charge = await stripe.charges.create({
  		amount: req.query.amount * settings.stripe.amount,
  		currency: 'usd',
  		source: token,
  		description: `Transaction: ${makeid(8)}`,
	});

    if (charge.status !== "succeeded") return res.redirect('/buy?err=INVALID_CARD')

    let coins = await db.get(`coins-${req.session.userinfo.id}`)
    coins = coins + (settings.stripe.coins * req.query.amount);
    await db.set(`coins-${req.session.userinfo.id}`, coins)

    if (settings.api.client.webhook.auditlogs.enabled == true && !(settings.api.client.webhook.auditlogs.disabled.includes("buycoins"))) {
        let params = JSON.stringify({
            embeds: [
                {
                    title: "Coins Bought",
                    description: `**__User:__** ${req.session.userinfo.username}#${req.session.userinfo.discriminator} (${req.session.userinfo.id})\n\n**Coins Bought:** ${req.query.amount * settings.stripe.coins}\n**Amount:** $${req.query.amount * settings.stripe.amount}`,
                    color: hexToDecimal("#FE0023")
                }
            ]
        })
        fetch(`${settings.api.client.webhook.webhook_url}`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: params
        }).catch(e => console.warn(chalk.red(`[WEBSITE] There was an error sending to the webhook: ${e}`)));
    }

    return res.redirect('/buy?sucess=true')
  });
}};

