const Controller = require('egg').Controller

const createRule = {
    accesstoken: 'string',
    title: 'string',
    tab: {
        type: 'enum',
        values: ['ask', 'share', 'job'],
        required: false
    },
    content: 'string',
}

class TopicController extends Controller {
    async create() {
        const ctx = this.ctx;
        ctx.validate(createRule, ctx.request.body);
        const id = await ctx.service.topics.create(ctx.request.body);
        ctx.body = {
            topic_id: id,
        }
        ctx.status = 201
    }
}

module.exports = TopicController;