import { BaiTap3Component } from './bai-tap3.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [BaiTap3Component],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports: [BaiTap3Component]
})
export class BaiTap3Module { }
