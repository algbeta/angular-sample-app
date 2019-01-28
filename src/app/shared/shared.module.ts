import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MinuteToHoursPipe } from './minutes-to-hours.pipe';
import { OrderByPipe } from './order-by.pipe';
import { FilterByPipe } from './filter-by.pipe';

@NgModule({
  declarations: [ButtonComponent, MinuteToHoursPipe, OrderByPipe, FilterByPipe],
  providers: [MinuteToHoursPipe],
  imports: [CommonModule],
  exports: [ButtonComponent, MinuteToHoursPipe, OrderByPipe, FilterByPipe]
})
export class SharedModule {}
