const { forwardTo } = require('prisma-binding');
const Query = {
    items: forwardTo('db'),
    item: forwardTo('db'),
    itemsConnection: forwardTo('db'),
    me(parent, args, ctx, info){
        console.log({minta: ctx.request.userId})
        if(!ctx.request.userId){
            return null;
        }
        return ctx.db.query.user({
            where: {
                id: ctx.request.userId
            }
        }, info);
    }
    // async items(parent, args, ctx, info){
    //     const items = await ctx.db.query.items();
    //     return items;
    // }
};

module.exports = Query;
