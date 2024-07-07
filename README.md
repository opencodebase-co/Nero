<p align="center"><a href="https://github.com/NorthDevelopment/NorthClient"><img src="https://media.discordapp.net/attachments/984837636457918465/1000014634012647464/giphy.gif" alt="Gray shape shifter" height="120"/></a></p>
<h1 align="center">Nero</h1>
<p align="center">Modern & up to date Pterodactyl Client Dashboard</p>





<p align="center"><a href="https://github.com/NorthDevelopment/NorthClient"></a><a href="#nastyox"><img src="http://randojs.com/images/dropShadow.png" width="75%"/></a></p><br/>

<br/><br/><br/>

## :star: What Features ?
All features of<a href="https://github.com/NorthDevelopment/NorthClient" target="_blank"> NorthClient:</a>
<br/>
- Resource Management (gift, use it to create servers, edit servers)
- Coins (Join for Rewards, Buy Coins)
- Coupons (Gives resources & coins to a user)
- Servers (create, view, edit servers)
- User System (auth, regen password, etc)
- Store (buy resources with coins)
- Login System with Email and Password or Discord
- Register System with Username, Email and Password. 
- Dashboard (view resources & servers from one area)
- Join for Rewards (join discord servers for coins)
- Admin (set/add/remove coins & resources, create/revoke coupons)
- Webhook (Logs actions)
- Gift Coins (Share coins with anyone)
- Stripe API (buy coins via stripe)
- Mail Server (SMTP support)
- Linkvertise Earning
- Role Packages (get packages via roles)
<br/><br/><br/>

## :zap:  Fast implementation  
  Use pm2:<br/>
  ```JavaScript
//Step 01:
Install pm2. (If you don't know how then look below.)

//Step 02:
Drop the files into your server and edit settings.yml. 
Then go into the directory with >>$ cd /yourlocation<< then start the index.js with 
>>$ pm2 start index.js.<< 
```
___
Or, use Pterodactyl Panel:
```JavaScript
//Step 01:
Install The egg discord.js generic and create a server with this egg

//Step 02:
Drop the Files in ur Server and Edit the settings.yml

//Note: If u need Help just feel free to join the Discord or Report the Issue on GitHub.
``` 
  
<br/><br/><br/>
## :tada:  How to install pm2:

**Step 01:**
<BR/>This is for (Debian/Ubuntu)
  ```JavaScript
---------- Install Node.js v18.x ---------- 
$ curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
$ sudo apt-get install -y nodejs

---------- Install Node.js v12.x ----------
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
$ sudo apt-get install -y nodejs
  ```
___
This is for (CentOS/RHEL and Fedora)
  ```JavaScript
---------- Install Node.js v18.x ---------- 
$ curl -sL https://rpm.nodesource.com/setup_18.x | bash -

---------- Install Node.js v12.x ----------
$ curl -sL https://rpm.nodesource.com/setup_12.x | bash -
  ```

**Step 02**
  ```JavaScript
---------- Install PM2 ---------- 
$ sudo npm i -g pm2
  ```

  
**&#8674; Example Start pm2**  
  ```JavaScript
$ sudo pm2 start /var/www/html/app/server.js -i 4 
$ sudo pm2 save  (#save current process list on reboot)

//Node\\
Hot to Update:
$ sudo pm2 update	      #update PM2 package

More Commands: 
$ sudo pm2 logs 1	        #view logs for app 1
$ sudo pm2 stop 0           #stop process with ID 0
$ sudo pm2 restart all      #restart all apps
  ```
<br/><br/><br/>


