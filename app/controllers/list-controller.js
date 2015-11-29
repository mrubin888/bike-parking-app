module.exports	= function($scope, todoApi) {
	$scope.todos	= [];
	
	var loadTodoList	= function() {
		todoApi
			.getAllTodos()
			.end(function(err, res) {
				if (err) {
					console.log ("Error:", err);
				}
				else {
					console.log ("Success:", res);
					$scope.todos = res.body;
					$scope.$apply();
				}
			});
	};
	
	loadTodoList();
	
	$scope.createTodo	= function() {
		todoApi
			.createTodo({ text: $scope.new_todo.text })
			.end(function(err, res) {
				if (err) {
					console.log ("Error:", err);
				}
				else {
					console.log ("Success:", res);
					$scope.new_todo.text = "";
					loadTodoList();
				}
			});
	};
	
	$scope.editTodo		= function(todo) {
		$scope.selected_todo = todo;
	};
	
	$scope.updateSelectedTodo = function() {
		todoApi
			.updateTodo($scope.selected_todo._id, { text: $scope.selected_todo.text })
			.end(function(err, res) {
				if (err) {
					console.log ("Error:", err);
				}
				else {
					console.log ("Success:", res);
					$scope.selected_todo._id = 0;
					loadTodoList();
				}
			});
	};
	
	$scope.deleteTodo	= function(id) {		
		todoApi
			.deleteTodo(id)
			.end(function(err, res) {
				if (err) {
					console.log ("Error:", err);
				}
				else {
					console.log ("Success:", res);
					loadTodoList();
				}
			});
	};
};