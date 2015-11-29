var WebApiUtils = require('../utils/web-api-utils');

module.exports	= function() {
	var self = this;
	var api_name = 'todo';
	
	self.getAllTodos = function () {
		return WebApiUtils
			.index(api_name);
	};
	
	self.getTodoById = function (todo_id) {
		return WebApiUtils
			.getById(api_name, todo_id);
	};
	
	self.createTodo = function (data) {
		return WebApiUtils
			.create(api_name, data);
	};
	
	self.updateTodo = function (todo_id, data) {
		return WebApiUtils
			.update(api_name, todo_id, data);
	};
	
	self.deleteTodo = function (todo_id) {
		return WebApiUtils
			.del(api_name, todo_id);
	};
};