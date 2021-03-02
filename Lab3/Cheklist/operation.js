Vue.component('task',{
    props: ['data'],
    data() {
      return {
      }
    },
    methods: {
      task_done(){
        this.$emit('task_done')
      }

    },
    template: `
    <div class="task">
      <div>
        <p v-if="data.desc!=''" class="task__desc">{{data.desc}}
        
          <input type="checkbox" class="chek" @change="confirmTodo"> 
        
        
        <button class="task__done" @click="task_done()"> X </button>  
        
        </p>
          
      </div>
      
    </div>`
  })
  
  var vue = new Vue({
    el: '#app',
    data: {
      string: 'asdasda',
      new_task: {},
      tasks : [],
      title: "Чеклист"
      
    },
    methods: {
      add_task(){
        if(this.new_task.title != ''){
          this.tasks.push({
            desc: this.new_task.desc
          });
          this.new_task.desc='';
        }
      },
     
      delete_task(id){
        this.tasks.splice(id,1);
      } 
      

    }
  })