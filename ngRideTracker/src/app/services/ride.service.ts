import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ride } from '../models/ride';

import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  private baseUrl = 'http://localhost:8084/';
  private url = this.baseUrl + 'api/rides';


  constructor(
  private http: HttpClient
  ) { }

  index(){
    return this.http.get<Ride[]>(this.url)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Error getting Todo List' + err);
      })
    );
  }

  create(newRide : Ride){
    newRide.deleted = false;
   return this.http.post<Ride>(this.url,newRide)
   .pipe(
     catchError((err: any) => {
       console.log(err);
       return throwError('Failed to Create newRide' + err);
     })
   );
  }
    updateRide(ride: Ride){
        return this.http.put<Ride>(`${this.url}/${ride.id}`, ride)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('Failed to set Deleted to True' + err);
          })
        );
    }
}
