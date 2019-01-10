'use strict';

const Controller = require('egg').Controller;

class NameController extends Controller {
    async index() {
        const params = this.ctx.query;
        console.log('NameController=>index', params);
        this.ctx.body = await this.ctx.service.name.index({}, params.limit, params.page);
        this.ctx.status = 200;
    }
    async create() {
        const params = this.ctx.request.body;
        console.log('NameController=>create', params);
        this.ctx.body = await this.ctx.service.name.create(params);
        this.ctx.status = 201;
    }
    async destroy() {
        const id = this.ctx.params.id;
        console.log('NameController=>destroy', id);
        this.ctx.body = await this.ctx.service.name.destroy(id);
        this.ctx.status = 204;
    }
    async update() {
        const id = this.ctx.params.id;
        const params = this.ctx.request.body;
        console.log('NameController=>update', id, params);
        this.ctx.body = await this.ctx.service.name.update(id, params);
        this.ctx.status = 201;
    }
}

module.exports = NameController;
