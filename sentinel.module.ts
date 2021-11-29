import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SentinelService } from '@sentinel/sentinel.service';
import { SearchDatePipe } from '@sentinel/search-date.pipe';


@NgModule({
  declarations: [
    SearchDatePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchDatePipe
  ],
  providers:[
    SentinelService
  ]
})
export class SentinelModule { }
