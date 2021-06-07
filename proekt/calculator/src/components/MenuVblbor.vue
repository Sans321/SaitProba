<template>
    <Page class="app">
        <ActionBar title="Меню на неделю без сахара">
          <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack"/>
        </ActionBar>
        <StackLayout>
            <TabView>
            <TabViewItem title="Пн">
              <StackLayout class="ych">

                  <Label class="tabl" text="Завтрак"/>
                  <Image src="res://ssss" stretch="none"/> 
                  <Label  class="mesto" text="Фруктовый салад"/>
                  
                  <Label class="tabl" text="Обед"/>
                  <Image src="res://ssss" stretch="none"/> 
                  <Label class="mesto" text="Фундук(1) Зеленная греча(2) Финики(3)"/>
                  
                  <Label class="tabl" text="Ужин"/>
                  <Image src="res://ssss" stretch="none"/> 
                  <Label class="mesto" text="Овощное смузи и хлебцы"/>
                  </StackLayout>
            </TabViewItem>
            
            <TabViewItem title="Вт">    
              <StackLayout>
              </StackLayout>
            </TabViewItem>
            
            <TabViewItem title="Ср">
              <StackLayout>
              </StackLayout>
            </TabViewItem>
            
            <TabViewItem title="Чт">
              <StackLayout>
              </StackLayout>
            </TabViewItem>


            <TabViewItem title="Пт">
              <StackLayout>
              </StackLayout>
            </TabViewItem>
            
            <TabViewItem title="Суб">
              <StackLayout>
              </StackLayout>
            </TabViewItem>
            
            <TabViewItem title="Воск">
              <StackLayout>
              </StackLayout>
            </TabViewItem>
            </TabView>
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
        this.$navigateTo(MenuVue)
    },
  }
};
</script>

<style scoped>
.ych{  
  position: absolute;
  left: 15px;
  font-size:20%;
}
.mesto{
  margin-left: 160px;
  margin-bottom: 67px;

} 
.tabl{

    border-radius: 10%;
    padding: 40px;
    position: absolute;
    bottom: 45px ; 
    
    background-color: #3f9473; 
}
</style>