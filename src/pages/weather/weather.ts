import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OpenWeatherProvider } from './../../providers/open-weather/open-weather';

interface Weather {
  name: string,
  id: string,
  main: {
    temp: string,
    humidity: string,
    pressure: string
  },
  weather: [
    {
      description: string
    }
  ]

}


@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  loading = true;
  weather: Weather;
  cityId:string;

  constructor(public navCtrl: NavController, public openWeather:OpenWeatherProvider,
              public navParams: NavParams) {
    
    this.cityId = navParams.get('cityId') || "manchester";
  }
  
  ionViewDidEnter() {
    this.loading=true;
    this.openWeather.getCityId( this.cityId ).subscribe( (res:Weather) => {
      console.log(res);
      this.weather = res;
      this.loading=false;
    });
  }

}
