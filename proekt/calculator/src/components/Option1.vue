<template>
    <Page class="app">
        <ActionBar title="Настройки">
          <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack"/>
        </ActionBar>
        <StackLayout>
          <TabView>
            <TabViewItem title="Основное">
              <StackLayout>
                <Label text="Ваш вес"/><TextField/>
                <Label text="Вашsss вес"/> <TextField/>
                <Label text="Напоминание о готовки еды"/><Switch checked="true"/>
                <Label text="Завтрак: с "/>
                <Label text="Уведомление об окончание меню"/><Switch checked="true"/>
              </StackLayout>
            </TabViewItem>
            <TabViewItem title="Предпотчения">
              <StackLayout>
                <Label text="Без лактозы"/><Switch checked="true"/>
                <Label text="Без сахара"/><Switch checked="true"/>
                <Label text="Белки"/><Switch checked="true"/>
                <Label text="Веганство"/><Switch checked="true"/>
                <Label text="Полезssные жиры"/><Switch checked="true"/>
                <Label text="Сыроединие"/><Switch checked="true"/>
                <Label text="Без глютена"/><Switch checked="true"/>
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
      selectedTime:null
       
    };
  },
  methods: {
    goBack(){
      this.$navigateTo(MenuVue);
    }
  }
};
</script>