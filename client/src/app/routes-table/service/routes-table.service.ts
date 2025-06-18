import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '../models/route.interface';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoutesTableService {

  constructor(private http: HttpClient) { }

  getRoutes(): Observable<Route[]> {
    return this.http.get<Route[]>('/api/routes').pipe(//  '/api/routes' ${environment.apiURL}/routes
      tap((data: Route[]) => data),
      catchError(err => throwError(() => err))
   )
  }
}
