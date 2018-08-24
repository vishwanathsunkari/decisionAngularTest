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
    return this.http.get('http://localhost:8000');
  }

  get2CodeISOCountires(ISOcode) {
    return this.http.get('http://localhost:8000/isocode/' + ISOcode.toUpperCase());
    }
  }








