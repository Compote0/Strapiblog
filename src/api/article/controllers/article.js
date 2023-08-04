'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', {

        async find(params, populate) {
            return strapi.query('article').find(params, populate);
        },


        async search(ctx) {
          let term = ctx.params.term;
          let entities = await strapi.services.article.find({ title_contains: term });
          return entities;
        },
    
        async related(ctx) {
            const { id } = ctx.params;
            const article = await strapi.services.article.findOne({ id });
            if (!article) {
              return ctx.notFound('Article not found');
            }
        
            const relatedArticles = await strapi.services.article.find({
              id_ne: id,
              'categories.id_in': article.categories.map(category => category.id),
              _limit: 2
            });
        
            return relatedArticles;
          }      
});
