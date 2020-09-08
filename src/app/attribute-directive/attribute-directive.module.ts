import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { HighlightDirectiveDirective } from './highlight-directive.directive';



@NgModule({
  declarations: [AttributeDirectiveComponent, NgStyleComponent, NgClassComponent, HighlightDirectiveDirective],
  imports: [
    CommonModule
  ],
  exports:[
    AttributeDirectiveComponent
  ]

})
export class AttributeDirectiveModule { }
