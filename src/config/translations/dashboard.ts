import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const dashboard = createI18n(provider, {
  en: {
    pricing: 'Panel',
    learn_more: 'Learn More',
    invite: {
      title: 'Announcement1',
      description: 'Lorem Ipsum gallum bettum zettum',
      bn: 'Deploy',
    },
    servers: {
      title: 'Select Server',
      description: 'Select the server to edit',
    },
    vc: {
      create: 'Create a Server',
      'created channels': 'Created Voice channels',
    },
    command: {
      title: 'Usage',
      description: 'Use of resources of your servers',
    },
  },
  
});
