<template>
    <Page class="app">
        <ActionBar title="Menu"/>
        <StackLayout>
            <Button text="Текущее меню"/>
            <Button text="Подбор меню" @tap="podbor"/>
            <Button text="Свое меню"/>
            <Button text="Рецепт блюд"/>
            <Button text="Добавить рецепт"/>
            <Button @tap="spisok" text="Список продуктов"/>
            <Button text="Свое меню"/>
            <Button @tap="option" text="Настройка"/>
            <Button text="Поддержка"/>
        </StackLayout>
    </Page>
</template>

<script > 
import Option1Vue from './Option1.vue';
import PodborMenuVue from './PodborMenu.vue';
import SpicokProduktVue from './SpicokProdukt.vue';
export default {
  data() {
    return {
      
       
    };
  },
  methods: {
    option(){
      this.$navigateTo(Option1Vue);
    },
    podbor(){
      this.$navigateTo(PodborMenuVue)
    },
    spisok(){
      this.$navigateTo(SpicokProduktVue);
    },
  }
};
</script>