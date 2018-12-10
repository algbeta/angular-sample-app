import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ButtonComponent, ListComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
