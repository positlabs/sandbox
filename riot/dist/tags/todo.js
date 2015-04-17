riot.tag('todo', '<p>hello todos</p> <div each="{ items }" class="{ completed: done }"> <todo-item></todo-item> </div>', function(opts) {
		console.log(this);

		this.items = opts.items

		this.on('mount', function() {
			console.log('mount')
		});

		this.on('update', function() {
			console.log('update')
		});

		this.on('unmount', function() {
			console.log('unmount')
		});

	
});


riot.tag('todo-item', '<input type="checkbox" __checked="{ done }" onchange="{onChange}"> { title }', function(opts) {
		console.log('todo-item', this);
		this.onChange = function(e) {
			this.root.remove();
		}.bind(this);
	
});