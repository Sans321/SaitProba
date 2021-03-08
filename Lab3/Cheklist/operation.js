Vue.component('todo-item', {
  template: `
      <li :class="{ crossed: status }">
          <input type="checkbox" @change="toggleStatus">
          {{ title }}
          <button @click="remove">Удалить</button>
      </li>
  `,
  props: ['title', 'status'],
  methods: {
      toggleStatus() {
          this.$emit('toggle-status');
      },
      remove() {
          this.$emit('remove');
      }
  }
});

new Vue({
  el: '#todo-list-example',
  data: {
      title: '',
      todos: [  ],
      lastInsertId: 3
  },
  methods: {
      addNewTodo: function() {
        if(this.title != ''){
        this.todos.push({
              id: ++this.lastInsertId,
              title: this.title,
              status: false
          });
          this.title = '';
        }
      },
      removeTodo(index) {
          this.todos.splice(index, 1);
      },
      toggleStatus(index) {
          this.todos[index].status = !this.todos[index].status;
      }
  }
});