import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface City {
  id: number;
  name: string;
}

/*
  CitysProvider provider maintains a list of Citys and their Ids to match the Open Weather API.
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

  /* loading the city list from a local file */
  getCityListFile(): Observable<any> {
    return this.http.get("assets/data/cityList.json");
  }

  /** filter/search the citys by a search string.
  *** limits the search to only 10 results, for brevity
  *** returns an Array of Cities.
  **/
  query( searchString:string ) : Array<City> {
    const search = searchString.toLowerCase().trim();
    let count=0;
    return this.citys.filter( (city:City) => {
      if (count>=10) return false;
      const c=city.name.toLowerCase().substr(0,search.length);
      if (c === search) {
        count++;
        return true;
      }
    });

  }

}


