module.exports = {
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
};
  