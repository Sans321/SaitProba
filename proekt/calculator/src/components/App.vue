<template>
    <Page class="app">
        <ActionBar class="zagalovok" title="Регистрация"/>
        <ActionBar class="podzaga" title="Имя пользователя*"/>
        <StackLayout>
            <TextField class="input" v-model="newText" hint="ФИО"/>
        </StackLayout>


    </Page>
</template>

<script >
   export default  {
    data() {
        return {
            result: '',
      }
    },
    methods:{
            input: function(char){
                this.result = this.result.toString();
                this.result += char;
            },
            calc: function(){
                try{
                    this.result = eval(this.result);
                    if (isNaN(this.result)) {
                        throw new Error();
                  }
                }
                catch{
                    this.result = 'Ошибка';
                }
            },
            del: function(){
                this.result = '';
            }
    }
  }
</script>

<style scoped>
  
</style>