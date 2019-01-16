import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the OpenWeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OpenWeatherProvider {

  url: string = 'http://api.openweathermap.org/data/2.5/weather';
  apiKey: string = 'e5ae937b53c31993b4b722b606998544';

  constructor(public http: HttpClient) {
  }


  get( city: string ):Observable<Object> {
    return this.http.get( this.url + "?appid=" + this.apiKey + "&q=" + city);
  }



}
