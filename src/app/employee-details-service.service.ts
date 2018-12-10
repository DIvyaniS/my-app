import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsServiceService {

  private _url = '/assets/data/employees.json';
  constructor(private http: HttpClient) { }

  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}
