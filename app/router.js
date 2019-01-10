'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    app.router.resources('topics', '/api/v2/topics', app.controller.topics);

    console.log(app, 123)
    app.router.resources('name', '/name', app.controller.name);

    app.router.resources('upload', '/upload', app.controller.upload.upload);
};
