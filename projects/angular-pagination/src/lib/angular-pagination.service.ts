import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { parseValue } from './utils';
import { CallbackFunction } from './types';

@Injectable({
  providedIn: 'root'
})
export class AngularPaginationService {
  constructor(private router: Router) { }

  public paginate(initialState: Record<string, any>, func: CallbackFunction): [BehaviorSubject<any>, Observable<any>] {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const initFilters: Record<string, any> = {};
    Object.keys(initialState).map((key: string) => initFilters[key] = parseValue(urlSearchParams.get(key)) || initialState[key]);

    const filters = new BehaviorSubject(initFilters);
    const data = filters.asObservable()
      .pipe(
        switchMap((changedFilters: any) => {
          this.router.navigate([], { queryParams: changedFilters, replaceUrl: true });
          return func(changedFilters);
        })
      );

    return [filters, data];
  }
}
