import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCocktailsComponent } from './pages/page-cocktails/page-cocktails.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PageCocktailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PageCocktailsComponent
  ]
})
export class CocktailsModule { }
