import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filter'})
export class CountryPipe implements PipeTransform {
  transform(countries: any , searchText: any , searchISO: any, searchAlpha3: any) {
    if (countries.length !== 0) {
      return countries.filter(country => {
          if (searchText && country.name.toLowerCase().indexOf( searchText.toLowerCase()) === -1) {
            return false;
          }
          if (searchISO && country.alpha2_code.toLowerCase().indexOf( searchISO.toLowerCase()) === -1) {
            return false;
          }
          if (searchAlpha3 && country.alpha3_code.toLowerCase().indexOf( searchAlpha3.toLowerCase()) === -1) {
            return false;
          }
          return true;
      });
    } else {
      return countries;
    }
  }
}
