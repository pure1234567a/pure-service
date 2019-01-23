'use strict';
var controller = require('../controllers/controller'),
    policy = require('../policy/policy');
module.exports = function (app) {
    var url = '/api/shares';
    var urlWithParam = '/api/shares/:shareId';
    app.route(url)//.all(policy.isAllowed)
        .get(controller.getList)
        .post(controller.create);

    app.route(urlWithParam).all(policy.isAllowed)
        .get(controller.read)
        .put(controller.update)
        .delete(controller.delete);

    app.param('shareId', controller.getByID);
}