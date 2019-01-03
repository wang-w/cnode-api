'use strict';
const Service = require('egg').Service;

class NameService extends Service {
    async index(conditions, limit = 10, page = 1) {
        console.log('NameService=>index', conditions, limit, page);
        const result = {};
        result.list = await this.ctx.model.Name
            .find(conditions)
            .limit(limit * 1)
            .skip((page * 1 - 1) * limit)
            .sort({ updated_at: -1 });
        result.total = await this.ctx.model.Name.count(conditions);
        return result;
    }
    async create(params) {
        console.log('NameService=>create', params);
        const model = new this.ctx.model.Name(params);
        const result = await model.save();
        return result;
    }
    async destroy(_id) {
        console.log('NameService=>destroy', _id);
        const result = await this.ctx.model.Name.remove({ _id });
        return result;
    }
    async update(_id, params) {
        console.log('NameService=>update', _id, params);
        const result = await this.ctx.model.Name.update({ _id }, { $set: params });
        return result;
    }
}


module.exports = NameService;