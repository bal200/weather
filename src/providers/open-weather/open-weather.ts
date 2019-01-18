import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../environments/environment.prod';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';

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
    return this.http.get<string>( this.url + "&units=metric" + "&q="+city )
    .pipe(
      catchError(this.handleError)
    );
  }

  getCityId( cityId: string ):Observable<Object> {
    return this.http.get( this.url + "&units=metric" +"&id="+cityId )
    .pipe(
      catchError(this.handleError)
    );
  }


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
