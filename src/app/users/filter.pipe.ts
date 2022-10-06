import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTerm: any ): any {
    if(value.length === 0) {
      return value;
    }
    else{
      return value.filter((searchValue: any): any | undefined => {
          return searchValue.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;

      })

    }
  }

}
