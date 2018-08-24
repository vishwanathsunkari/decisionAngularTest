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
public searchAlpha3 = '';
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data['RestResponse'].result;
    });
  }

}
