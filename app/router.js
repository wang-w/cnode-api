'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    app.router.resources('topics', '/api/v2/topics', app.controller.topics);


    app.router.resources('name', '/name', app.controller.name);
};
