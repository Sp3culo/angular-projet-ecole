import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { DateCustomPipe } from './date-custom.pipe';

@NgModule({
  declarations: [
    DatePipeComponent,
    DateCustomPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DatePipeComponent,
  ]
})
export class DateModule { }
