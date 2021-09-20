import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirHoverDirective } from './directives/dir-hover.directive';



@NgModule({
  declarations: [
    DirHoverDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DirHoverDirective
  ]
})
export class SharedModule { }
