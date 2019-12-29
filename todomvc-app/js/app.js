(function (Vue) {

	// items属性不可改变， ES6语法
	const items = [
		{id: 1, content: 'vueJs', completed: false},
		{id: 2, content: 'Java', completed: false},
		{id: 3, content: 'Python', completed: true}
	]

	Vue.directive('app-focus', {
		inserted (el, binding) {
			el.focus()
		},
		update (el, binding) {
			if (binding.value) {
				el.focus()
			}
		},
	})

	var app = new Vue({
		el: '#todoapp',
		data: {
			items,	// ES6语法
			currentItem: null,
			filterStatus: 'all'
		},
		// 定义局部指令
		directives: {
			'todo-focus': {
				update (el, binding) {
					console.log('todo-focus:binding', binding)
					if (binding.value) {
						el.focus()
					}
				},
			}
		},
		computed: {

			filterItems() {
				switch (this.filterStatus) {
					case 'active':
						return this.items.filter(item => !item.completed)
						break;
					case 'completed':
						return this.items.filter(item => item.completed)
						break;
					default:
						return this.items
						break;
				}
			},

			// 是否选中 的状态切换
			toggleAll: {
				get() {
					// get方法是在方法体中的全局变量改变时调用
					console.log("get", this.remaining)
					return this.remaining === 0
				},
				set(newStatus) {
					// set方法是在toggleAll的值改变时调用，只有一个参数（改变后的值）
					console.log('set', newStatus)
					this.items.forEach(item => {	//此ES6的写法，普通写法：function(item) {}
						item.completed = newStatus
					})
				},
			},

			remaining() {
				const unItems = this.items.filter(function(item) {
					return !item.completed
				})
				return unItems.length
			}
		},
		methods: {

			finishEdit(item, index, event) {
				// 1.获取输入的值
				const content = event.target.value.trim()
				// 2.去空格后为空，清除该行
				if (!content) {
					this.removeItem(index)
					return 
				}
				// 3.去空格后不为空，保存数据（修改）
				item.content = content
				// 4.去除编辑样式.editing
				this.currentItem = null
			},

			// esc移除编辑
			cancelEdit() {
				this.currentItem = null
			},

			// 双击跳转编辑
			toEdit(item) {	// ES6语法， 原生：toEdit: function(item) {}
				this.currentItem = item
			},

			addItem(event) {
				// console.log('addItem', event)
				// 1.获取input的value值
				const content = event.target.value.trim()
				// 2.value为空，不做处理
				if (!content.length) { // 0 <=> false !0 => true
					return 
				}
				// 3.不为空，添加到数组中
				const id = this.items.length + 1
				this.items.push({
					id,
					content,
					completed: false
				})
				// 4.清除input的value值
				event.target.value = ''
			},

			removeItem(index) {
				console.log(index)
				// js数组操作，移除第（index + 1）个数组项（移除1个）
				this.items.splice(index, 1)
			},

			removeCompleted() {
				this.items = this.items.filter(item => !item.completed)

				// 多种写法（有关数组的函数、匿名方法）
				// this.items = this.items.filter((item) => {	// function (item) {
				// 	return !item.completed
				// })

				// this.items = this.items.filter((item, index) => {	// function (item) {
				// 	console.log('匿名函数的index=', index)
				// 	return !item.completed
				// })

			}
		},
	})

	window.onhashchange = function() {
		// #/active
		console.log("hash值改变了：", window.location.hash)

		// 获取url中的hash值 active, 为空设置值 all
		const hash = window.location.hash.substr(2) || 'all'
		// 设置vue实例的属性值 filterStatus
		app.filterStatus = hash 
	}

	// 第一次访问时调用
	window.onhashchange()

})(Vue);
