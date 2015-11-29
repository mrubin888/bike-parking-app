var config = require('../config/config');
var request = require('superagent');

var root = config.server_address + '/' + config.api_root + '/';
	
module.exports = {
	// GET /api/[api_name]
	index: function (api_name) {
		return request
			.get(root + api_name);
	},
	
	// GET /api/[api_name]/[id]
	getById: function (api_name, id) {
		return request
			.get(root + api_name + '/' + id);
	},
	
	// POST /api/[api_name]
	create: function (api_name, data) {
		return request
			.post(root + api_name)
			.send(data)
			.set('Accept', 'application/json');
	},
	
	// PUT /api/[api_name]/[id]
	update: function (api_name, id, data) {
		return request
			.put(root + api_name + '/' + id)
			.send(data)
			.set('Accept', 'application/json');
	},
	
	// DELETE /api/[api_name]/[id]
	del: function (api_name, id) {
		return request
			.del(root + api_name + '/' + id);
	}
};