import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MinuteToHoursPipe } from './minutesTohours.pipe';

@NgModule({
  declarations: [ButtonComponent, MinuteToHoursPipe],
  imports: [CommonModule],
  exports: [ButtonComponent, MinuteToHoursPipe]
})
export class SharedModule {}
