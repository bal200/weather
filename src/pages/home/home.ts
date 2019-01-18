import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OpenWeatherProvider } from './../../providers/open-weather/open-weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading = true;
  weather:object;
  cityId:string;

  constructor(public navCtrl: NavController, public openWeather:OpenWeatherProvider,
              public navParams: NavParams) {
    
    this.cityId = navParams.get('cityId') || "manchester";
  }
  
  ionViewDidEnter() {
    this.loading=true;
    this.openWeather.getCityId( this.cityId ).subscribe( (res) => {
      console.log(res);
      this.weather = res;
      this.loading=false;
    });
  }

}
