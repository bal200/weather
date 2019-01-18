import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../environments/environment.prod';

/*
  Generated class for the OpenWeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OpenWeatherProvider {

  url: string; 

  constructor(public http: HttpClient) {
    this.url = environment.openWeather.url + "?appid="+environment.openWeather.apiKey;
  }


  getCity( city: string ):Observable<Object> {
    return this.http.get( this.url + "&units=metric" + "&q="+city );
  }

  getCityId( cityId: string ):Observable<Object> {
    return this.http.get( this.url + "&units=metric" +"&id="+cityId );
  }

}
