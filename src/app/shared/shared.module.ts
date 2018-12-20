import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MinuteToHoursPipe } from './minutes-to-hours.pipe';

@NgModule({
  declarations: [ButtonComponent, MinuteToHoursPipe],
  providers: [MinuteToHoursPipe],
  imports: [CommonModule],
  exports: [ButtonComponent, MinuteToHoursPipe]
})
export class SharedModule {}
