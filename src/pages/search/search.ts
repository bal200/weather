import { CitysProvider } from './../../providers/citys/citys';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  
  currentCitys: any = [];

  constructor(public navCtrl: NavController, public citys:CitysProvider) {
  }

  /** Search for the typed string in the City list **/
  getCitys(ev) {
    let searchString = ev.target.value;
    if (!searchString || !searchString.trim()) {
      this.currentCitys = [];
      return;
    }
    this.currentCitys = this.citys.query( searchString );
console.log(this.currentCitys);
  }

  /** when a City is tapped in the list, load the Weather page **/
  openCityId( cityId: string ) {
    this.navCtrl.push(WeatherPage, {
      cityId: cityId
    });
  }


}
