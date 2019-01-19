import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../environments/environment.prod';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';

/** 
 ** API calling Provider to get Weather information from Open Data,
 ** for a given City.
*/

@Injectable()
export class OpenWeatherProvider {

  url: string; 

  constructor(public http: HttpClient) {
    this.url = environment.openWeather.url + "?appid="+environment.openWeather.apiKey;
  }

  /** Get the weather by searching a city name **/
  getCity( city: string ):Observable<Object> {
    return this.http.get<string>( this.url + "&units=metric" + "&q="+city )
    .pipe(
      catchError(this.handleError)
    );
  }

  /** Get the weather by City Id.  These are Open Weathers city codes **/
  getCityId( cityId: string ):Observable<Object> {
    return this.http.get( this.url + "&units=metric" +"&id="+cityId )
    .pipe(
      catchError(this.handleError)
    );
  }

  /** log or return a decent error message if the API call fails **/
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return new ErrorObservable(
      'Oops something went wrong, try again.');
  };
}
