<template>
    <Page class="app">
        <ActionBar title="Список продуктов">
          <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack"/>
        </ActionBar>
        <StackLayout>
            <ActionBar title="Меню на неделю без сахара"/>
            
        </StackLayout>
    </Page>
</template>

<script > 
import MenuVue from './Menu.vue';
export default {
  data() {
    return {
      
       
    };
  },
  methods: {
    goBack(){
      this.$navigateTo(MenuVue);
    }
  }
};
</script>