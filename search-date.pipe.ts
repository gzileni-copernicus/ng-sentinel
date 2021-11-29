import { Pipe, PipeTransform } from '@angular/core';

import * as _moment from 'moment';

@Pipe({
  name: 'searchDate'
})
export class SearchDatePipe implements PipeTransform {

  transform(value: any): string {
    return _moment(value, _moment.ISO_8601).toString();
  }

}
