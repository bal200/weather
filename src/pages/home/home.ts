import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OpenWeatherProvider } from './../../providers/open-weather/open-weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  result:object;
  constructor(public navCtrl: NavController, public openWeather:OpenWeatherProvider) {
  }

  ionViewDidEnter() {

    this.openWeather.get( "manchester" ).subscribe( (res) => {
      console.log(res);
      this.result = res;
    });
  }

}
