import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface City {
  id: string;
  name: string;
}

/*
  CitysProvider provider maintains a list of citys and their Ids to match the Open Weather API.
  This is used to populate the City search bar.
  query() method is used to filter/search the citys.
*/
@Injectable()
export class CitysProvider {
  
  citys: Array<City> = [];

  constructor(public http: HttpClient) {
    this.getCityListFile().subscribe(data => {
      this.citys = data;
    });
  }

  getCityListFile(): Observable<any> {
    return this.http.get("assets/data/cityList.json");
  }

  query( searchString:string ) : Array<City> {
    const search = searchString.toLowerCase();
    return this.citys.filter( (city:City) => 
      city.name.toLowerCase().indexOf(search) >= 0 
    );

  }

}


