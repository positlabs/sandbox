<todo>

	<p>hello todos</p>

	<div each={ items } class={ completed: done }>
		<todo-item></todo-item>
	</div>

	<script>
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

	</script>

</todo>


<todo-item>
	<input type="checkbox" checked={ done } onchange={onChange}> { title }

	<script>
		console.log('todo-item', this);
		onChange(e){
			this.root.remove();
		}
	</script>

</todo-item>