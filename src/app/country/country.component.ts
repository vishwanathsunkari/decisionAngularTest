import { Component, OnInit } from '@angular/core';
import { CountryService } from '../county.service';
import { CountryPipe } from './country.pipe';
import { ISOCountry } from './ISOCountry.pipe';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
public countries = [];
public searchText = '';
public searchISO = '';

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data['RestResponse'].result;
    });
  }

  get2code(e) {

    if (e.key === 'Enter') {
      if (this.searchISO.length ===  0 ) {
        alert('Please enter ISO code');
      } else {
        console.log('requesting data');
        this.countryService.get2CodeISOCountires(this.searchISO);
        this.countryService.get2CodeISOCountires(this.searchISO).subscribe(data => {
          this.countries = [];
          if (data['RestResponse'].result) {
            this.countries.push(data['RestResponse'].result);
          }
        });
      }
    }
  }


}
