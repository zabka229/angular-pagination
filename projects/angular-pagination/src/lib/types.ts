import { Observable } from 'rxjs';

export type CallbackFunction = (filters: any) => Observable<any>;
