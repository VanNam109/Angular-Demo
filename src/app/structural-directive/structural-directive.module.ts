import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSWitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { BaiTapNgIfComponent } from './bai-tap-ng-if/bai-tap-ng-if.component';





@NgModule({
  declarations: [StructuralDirectiveComponent, NgIfComponent, NgSWitchComponent, NgForComponent, BaiTapNgIfComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    StructuralDirectiveComponent
  ]
})
export class StructuralDirectiveModule { }
