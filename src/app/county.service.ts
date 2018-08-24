import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _url = 'http://localhost:8000';
  constructor(private http: HttpClient) {}
  public headers = new HttpHeaders().set('Content-Type', 'application/json');

   // 'Access-Control-Allow-Origin', '*'
  getCountries() {
    return this.http.get(this._url);
  }
  }


  // http://services.groupkt.com/country/get/all










