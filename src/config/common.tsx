import { createIcon } from '@chakra-ui/react';
import { PermissionFlags } from '@/api/discord';
import { AppConfig } from './types';

const Icon = createIcon({
  displayName: 'OmagizeLogo',
  viewBox: '0 0 512 512',
  path: (
    <g>
      <polygon
        points="256,50 346,200 166,200"
        fill="currentColor"
      />
      <polygon
        points="256,462 166,312 346,312"
        fill="currentColor"
      />
      <polygon
        points="156,150 206,270 106,270"
        fill="currentColor"
      />
      <polygon
        points="356,362 306,242 406,242"
        fill="currentColor"
      />
      <circle cx="256" cy="256" r="20" fill="currentColor" />
    </g>
  ),
});



export const config: AppConfig = {
  name: 'Nero v2',
  icon: Icon,
  inviteUrl:
    'https://discord.com/api/oauth2/authorize?client_id=1070011901385375845&permissions=8&scope=bot',
  guild: {
    //filter guilds that user has no permissions to manage it
    filter: (guild) => (Number(guild.permissions) & PermissionFlags.ADMINISTRATOR) !== 0,
  },
};
