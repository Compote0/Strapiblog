'use strict';

/**
 * article router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::article.article', {
    routes: [
        {
        method: 'GET',
        path: '/articles',
        handler: 'article.find',
        config: {
          policies: []
        }
      },
      {
        method: 'GET',
        path: '/search/:term',
        handler: 'article.search',
        config: {
          policies: []
        }
      },
      {
        method: 'GET',
        path: '/:id/related',
        handler: 'article.related',
        config: {
          policies: []
        }
      }
    ]
  });
