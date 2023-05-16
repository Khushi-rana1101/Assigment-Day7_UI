import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

//dependency injection
@Injectable({
  providedIn: 'root'
})


export class CountriesService {


  //implement the service 
  constructor( private _httpClient: HttpClient) {    //created the variable of httpclient

  
  }
  public getCountries(): any{
   //we are making call by using .get, .put , .post, .delete
   //get() method returns an Observable type
    // to get the data out of the Observable
    return this._httpClient.get("https://restcountries.com/v3.1/name/japan")
  }
}
