import { Observable } from "rxjs";

export type CallbackFunction = (filters: Record<string, any>) => Observable<any>;