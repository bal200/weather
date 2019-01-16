import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OpenWeatherProvider } from './../../providers/open-weather/open-weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading = true;
  weather:object;

  constructor(public navCtrl: NavController, public openWeather:OpenWeatherProvider) {
  }

  ionViewDidEnter() {
    this.loading=true;
    this.openWeather.getCity( "manchester" ).subscribe( (res) => {
      console.log(res);
      this.weather = res;
      this.loading=false;
    });
  }

}
