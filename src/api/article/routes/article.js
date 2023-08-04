'use strict';

/**
 * article router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::article.article', {
    routes: [
      {
        method: 'GET',
        path: '/search/:term',
        handler: 'article.custom.search',
        config: {
          policies: []
        }
      },
      {
        method: 'GET',
        path: '/:id/related',
        handler: 'article.custom.related',
        config: {
          policies: []
        }
      }
    ]
  });
