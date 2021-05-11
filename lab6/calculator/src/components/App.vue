<template actionBarHidden="true">
    <Page actionBarHidden="true"  class="app">
      <StackLayout>
        <Image src="res://2222" stretch="none"/> 
        <Label class='city'  :text='listOfItems[this.selectedItem]' @tap='city()'/>
        <ScrollView orientation="vertical"> 
           <StackLayout class='forecast' orientation="vertical">
              
              <label class='text'> Температура: {{weather.fact.temp}}</label>
              <label class='text'>ощущается: {{weather.fact.feels_like}}</label>
              <label class='text'> Ветер {{weather.fact.wind_speed}} m/c, Влажность {{weather.fact.humidity}}%</label>
              <label class='text'> Давление {{weather.fact.pressure_mm}} мм рт. ст.</label>
           </StackLayout>
        </ScrollView>
      </StackLayout>
    </Page>
</template>

<script >
import { Http } from '@nativescript/core'
import * as ApplicationSettings from "application-settings";
  export default {
    data() {
      return {
        listOfItems: [
          { title: "Ханты-Мансийск",
            toString: () => {
              return 'Ханты-Мансийск';
            },
            latitude: 61.0041700,
            longitude: 69.0019400
          }, 
          { title: "Омск",
            toString: () => {
              return 'Омск';
            },
            latitude: 54.9924400,
            longitude: 73.3685900
          },
          { title: "Стрежевой",
            toString: () => {
              return 'Стрежевой';
            },
            latitude: 77.35334,
            longitude: 60.43998
          },
          { title: "Москва",
            toString: () => {
              return 'Москва';
            },
            latitude: 55.451332,
            longitude: 37.369336
          },
          { title: "Барнаул",
            toString: () => {
              return 'Барнаул';
            },
            latitude: 53.22,
            longitude: 83.45
          },
          { title: "Викулово",
            toString: () => {
              return 'Викулово';
            },
            latitude: 56.8166700,
            longitude: 70.6106900
          },
          { title: "Сочи",
            toString: () => {
              return 'Сочи';
            },
            latitude: 43.359502,
            longitude: 69.435414
          },
          { title: "Дубровное",
            toString: () => {
              return 'Дубровное';
            },
            latitude: 57.1750000,
            longitude: 66.5816667
          },
          { title: "Кип",
            toString: () => {
              return 'Кип';
            },
            latitude: 57.5458333,
            longitude: 71.8502778
          },
          { title: "Тавинск",
            toString: () => {
              return 'Тавинск';
            },
            latitude: 57.5872222,
            longitude: 71.7202778
          },
        ],
        selectedItem: 0,
        weather: {
          fact: {
            temp : 0,
            feels_like : 0,
            icon : 'name',
            condition : 'condition',
            wind_speed : 0,
            wind_dir : 'wind_dir',
            pressure_mm	: 0,
            }
        },
        cities:['Ханты-Мансийск', 'Омск', 'Стрежевой', 'Москва', 'Барнаул', 'Викулово', 'Сочи', 'Дубровное', 'Кип', 'Тавинск']
      }
    },
    mounted(){
      if(ApplicationSettings.getString('weather')){
        this.weather.fact=JSON.parse(ApplicationSettings.getString('weather'));
        console.log('Погода загружена');
      }
      if(ApplicationSettings.getString('city')){
        this.selectedItem=JSON.parse(ApplicationSettings.getString('city'));
        console.log('Место загружено');
      }
      else{
        this.city()
      }
    },
    methods:{
      check(){
        Http.request({
        url: 'https://api.weather.yandex.ru/v2/forecast?limit=1&lat=' +  String(this.listOfItems[this.selectedItem].latitude) + '&lon=' + String(this.listOfItems[this.selectedItem].longitude),
        method: "GET",
        headers: {"X-Yandex-API-Key": "56c71367-24dd-4af3-8f76-91fa82195e69"},
        }).then(
        (response) => {
        this.weather = response.content.toJSON();
        this.imagePath = '~/res/' + String(this.weather.fact.condition) + '.png';
        console.log(`Путь изображения: ${this.imagePath}`)
        ApplicationSettings.setString('weather', JSON.stringify(this.weather.fact));        
        console.log(`Сохранено как: ${JSON.stringify(this.weather)}`)
      });
      },
      city(){
        action("Выберите город:", "отмена", this.cities)
        .then(result => {
           this.selectedItem = this.cities.indexOf(result);
           console.log(this.selectedItem )
           ApplicationSettings.setString('city', JSON.stringify(this.selectedItem));        
           this.check();
           
        });
      }
    }
  }
</script>

<style scoped>
.app{
    background-color: #537fdd;
}
.forecast{
  font-size: 20;
  margin: 50px 70px;
  padding: 20px;
  padding-bottom: 90px;
  background-color: #3f9473;
  border-radius: 40%;
}

.text{
    margin: 50px auto;
    background-color: #3f9473;
    border-radius: 10%;
    padding: 40px;
}
.city{
  font-size: 30;
  text-align: center;
  height: 200px;
  margin: 50px 70px;
  padding: 50px;
  border-radius: 40%;
  background-color: #cf7200;
}
</style>