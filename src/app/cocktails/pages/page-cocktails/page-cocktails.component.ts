import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CocktailsServiceService } from '../../services/cocktails-service.service';

@Component({
  selector: 'app-page-cocktails',
  templateUrl: './page-cocktails.component.html',
  styleUrls: ['./page-cocktails.component.css']
})
export class PageCocktailsComponent implements OnInit {
  myForm!: FormGroup;
  search : any;
  list : any;
  result$ : Observable<any> = of({})

  constructor(private fb : FormBuilder, private api: CocktailsServiceService) {
    this.myForm = fb.group({
      'search':  ['', Validators.required]
    });
    this.search = this.myForm.controls['search'];
  }

  ngOnInit(): void {
    this.result$ = this.search.valueChanges.pipe(switchMap((param : any) => this.api.getcocktails(param)))
    // .subscribe((response: any) => this.list = response['drinks']);
  }

}
