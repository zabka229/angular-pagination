import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { parseValue } from './utils';
import { CallbackFunction } from './types';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AngularPaginationService {
  constructor(private router: Router, private fb: FormBuilder) { }

  public paginate(initialState: Record<string, any>, func: CallbackFunction): [FormGroup, Observable<any>] {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const initFilters: Record<string, any> = {};
    Object.keys(initialState).map((key: string) => initFilters[key] = parseValue(urlSearchParams.get(key)) || initialState[key]);

    const filters: FormGroup = this.fb.group(initFilters);
    const data = filters.valueChanges
      .pipe(
        switchMap((changedFilters: any) => {
          this.router.navigate([], { queryParams: changedFilters, replaceUrl: true });
          return func(changedFilters);
        })
      );

    return [filters, data];
  }
}
