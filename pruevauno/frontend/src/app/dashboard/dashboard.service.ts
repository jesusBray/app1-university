import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Passenger } from "./passenger";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const url = 'http://localhost:3003/';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  public getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(`${url}pasajeros`,httpOptions);
  };
  
  public getPassenger(id_Passenger: any): Observable<Passenger> {
    return this.http.get<Passenger>(`${url}/${id_Passenger}`, httpOptions);
  }

  public deletPassengers(id_Passenger): Observable<Passenger> {
    return this.http.delete<Passenger>(`${url}/${id_Passenger}`, httpOptions);
  }

  public updatePassengers(Passenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>(url, httpOptions);
  }

  public addPassengers(Passenger: Passenger): Observable<Passenger> {
    return this.http.post<Passenger>(url, httpOptions);
  }
}
