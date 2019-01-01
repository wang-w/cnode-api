const Service = require('egg').Service;

class TopicService extends Service {
    constructor(ctx) {
        super(ctx)
        this.root = 'https://cnodejs.org/api/v1'
    }

    async create(params) {
        const result = await this.ctx.curl(`${this.root}/topics`, {
            method: 'post',
            data: params,
            dataType: 'json'
        })
        this.checkSuccess(result);
        return result.data.topic_id;
    }

    checkSuccess(result) {
        if (result.status !== 200) {
            const errorMsg = result.data && result.data.error_msg ? result.data.error_msg: 'unknown error';
            this.ctx.throw(result.status, errorMsg)
        }
        if (!result.data.success) {
            this.ctx.throw(500, 'remote response error', {data: result.data})
        }
    }
}

module.exports = TopicService;