const linkConfig = require('../../../lib/link');
module.exports = {
  fields: {
    add: {
      footerLinks: {
        label: 'Footer Links',
        type: 'array',
        titleField: 'linkText',
        fields: {
          add: {
            ...linkConfig.link
          }
        }
      },
      siteTitle: {
        label: 'Site Title',
        type: 'string',
        def: 'IZA BOYACA'
      }
    },
    group: {
      general: {
        label: 'General',
        fields: [ 'siteTitle', 'footerLinks' ]
      }
    }
  }
};
