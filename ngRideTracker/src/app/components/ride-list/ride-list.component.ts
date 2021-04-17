import { Component, OnInit } from '@angular/core';
import { Ride } from 'src/app/models/ride';
import { RideService } from 'src/app/services/ride.service';

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css']
})
export class RideListComponent implements OnInit {

  rides: Ride[] = [];
  selected: Ride = null;
  newRide: Ride = new Ride();




  constructor(
    private serv: RideService
  ) { }

  ngOnInit(): void {
    this.loadRides();
  }

  loadRides(){
    this.serv.index().subscribe(
      rides =>{
        this.rides = rides;
        this.selected = null;
      },
      fail => {
        console.error('Ride list failed to load');
        console.error(fail);
      }
    );
  }
  displayRide(ride){
  this.selected = ride;
  }
  newRideForm(){
    this.rides = null;
  }
  addRide(){
    this.serv.create(this.newRide).subscribe(
      data => {
        this.loadRides();
        this.newRide = new Ride();
      },
      err => console.error('Observer got an error: ' + err)
    );
  }


}
