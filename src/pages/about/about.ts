import { CitysProvider } from './../../providers/citys/citys';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  currentItems: any = [];

  constructor(public navCtrl: NavController, public citys:CitysProvider) {
  }

  getCitys(ev) {
    let searchString = ev.target.value;
    if (!searchString || !searchString.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.citys.query( searchString );

  }

  /** when a City is tapped in the list, load the Weather page **/
  openCityId( cityId: string ) {
    this.navCtrl.push(HomePage, {
      cityId: cityId
    });
  }


}
