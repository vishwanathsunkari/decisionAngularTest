import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'ISO'})
export class ISOCountry implements PipeTransform {
  transform(ISO: any , searchText: any) {
    if (searchText == null) {
      return ISO;
    }
    return searchText.filter(function(data) {
      return data.alpha2_code.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }
}
