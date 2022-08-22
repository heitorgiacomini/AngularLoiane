import { debounceTime, distinct, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss'],
})
export class LibSearchComponent implements OnInit {
  queryField = new FormControl();
  SEARCH_URL = 'https://api.cdnjs.com/libraries';

  results$!: Observable<any>;
  total!: number;
  readonly fields = "name,description,version,homepage";
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.results$ = this.queryField.valueChanges
    .pipe(
      map(value => value.trim()),
      filter(value => value.length > 2),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => this._http.get(this.SEARCH_URL, { params: { search: value, fields: this.fields } })),
      tap((res:any) => this.total = res.total),
      map((res) => res.results)
    );
  }

  onSearch() {
    let value = this.queryField.value;

    if (value && (value = value.trim()) != '') {

      const params = {
        search: value,
        fields: this.fields
      }

      // let params2 = new HttpParams();
      // params2 = params2.set('search', value);
      // params2 = params2.set('fields', fields);

      this.results$ = this._http
        .get(
          this.SEARCH_URL,
          { params  }
        )
        .pipe(
          tap((res: any) => (this.total = res.total)),
          map((res) => res.results)
        );
    }
  }
}
