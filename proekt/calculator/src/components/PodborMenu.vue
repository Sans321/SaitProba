<template>
    <Page class="app">
        <ActionBar title="Подбор меню">
          <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack"/>
        </ActionBar>
        <StackLayout>
            <Label text="Меню на неделю без сахара"/>
        <GridLayout>
            <Carousel height="30%" width="100%" pageChanged="myChangeEvent" pageTapped="mySelectedEvent" indicatorColor="#fff000" finite="true" bounce="false" showIndicator="true" verticalAlignment="top"      android:indicatorAnimation="swap" color="white">
                <CarouselItem @tap="eda" id="slide1" backgroundColor="#b3cde0" verticalAlignment="middle">

                     <Label class="nedel" text="Пн"   backgroundColor="#6497b1"/>
                     <Label class="menu" text="Завтрак: Фруктовый салад"/>
                     <Label class="menu" text="Обед: Фундук(1) Зеленная греча(2) Финики(3)"/>
                     <Label class="menu" text="Ужин: Овощное смузи и хлебцы" />

                </CarouselItem>
                <CarouselItem id="slide2" backgroundColor="#6497b1" verticalAlignment="middle">
                    <Label text="Вт" backgroundColor="#50000000" horizontalAlignment="center"/>
                </CarouselItem>

                <CarouselItem id="slide3" backgroundColor="#005b96" verticalAlignment="middle">
                     <Label text="Ср" backgroundColor="#50000000" horizontalAlignment="center"/>
                </CarouselItem>

                <CarouselItem id="slide4" backgroundColor="#03396c" verticalAlignment="middle">
                    <Label text="Чт" backgroundColor="#50000000" horizontalAlignment=""/>
                </CarouselItem>

                <CarouselItem id="slide4" backgroundColor="#03396c" verticalAlignment="middle">
                    <Label text="Пт" backgroundColor="#50000000" horizontalAlignment=""/>
                </CarouselItem>

                <CarouselItem id="slide4" backgroundColor="#03396c" verticalAlignment="middle">
                    <Label text="Суб" backgroundColor="#50000000" horizontalAlignment=""/>
                </CarouselItem>

                <CarouselItem id="slide4" backgroundColor="#03396c" verticalAlignment="middle">
                    <Label text="Вос" backgroundColor="#50000000" horizontalAlignment=""/>
                </CarouselItem>

            </Carousel>
             <Carousel height="35%" width="100%" pageChanged="myChangeEvent" pageTapped="mySelectedEvent" indicatorColor="#fff000" finite="true" bounce="false" showIndicator="true" verticalAlignment="center"        android:indicatorAnimation="swap" color="white">
                <CarouselItem id="slide1" backgroundColor="#b3cde0" verticalAlignment="middle">
                    <Label text="Slide 1" backgroundColor="#50000000" horizontalAlignment="up"/>
                </CarouselItem>

                <CarouselItem id="slide2" backgroundColor="#6497b1" verticalAlignment="middle">
                    <Label text="Slide 2" backgroundColor="#50000000" horizontalAlignment="center"/>
                </CarouselItem>

                <CarouselItem id="slide3" backgroundColor="#005b96" verticalAlignment="middle">
                     <Label text="Slide 3" backgroundColor="#50000000" horizontalAlignment="center"/>
                </CarouselItem>

                <CarouselItem id="slide4" backgroundColor="#03396c" verticalAlignment="middle">
                    <Label text="Slide 4" backgroundColor="#50000000" horizontalAlignment=""/>
                </CarouselItem>

                <CarouselItem id="slide4" backgroundColor="#03396c" verticalAlignment="middle">
                    <Label text="Slide 5" backgroundColor="#50000000" horizontalAlignment=""/>
                </CarouselItem>

                <CarouselItem id="slide4" backgroundColor="#03396c" verticalAlignment="middle">
                    <Label text="Slide 6" backgroundColor="#50000000" horizontalAlignment=""/>
                </CarouselItem>

                <CarouselItem id="slide4" backgroundColor="#03396c" verticalAlignment="middle">
                    <Label text="Slide 7" backgroundColor="#50000000" horizontalAlignment=""/>
                </CarouselItem>

            </Carousel>
        </GridLayout>

        </StackLayout>
    </Page>
</template>

<script >
import MenuVue from './Menu.vue';
import MenuVblborVue from './MenuVblbor.vue';
export default {
  data() {
    return {
      selectedTime:null
       
    };
  },
  methods: {
    eda(){
      this.$navigateTo(MenuVblborVue);
    },
    goBack(){
        this.$navigateTo(MenuVue)
    }
  }
};
</script>
<style scoped>
.nedel{
    border-radius: 10%;
    padding: 40px;
    position: absolute;
    bottom: 45px ; 
    
    background-color: #3f9473; 
}
.menu{
    position: absolute;
    bottom: 45px ;
    left: 15px;
    background-color: #3f9473; 
    font-size:20%;

}
</style>