import { Component, OnInit } from '@angular/core';
import { Ride } from 'src/app/models/ride';
import { DeletedPipe } from 'src/app/pipes/deleted.pipe';
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
  editRide: Ride = null;
  bool: Boolean = false;




  constructor(
    private serv: RideService,
    private deleted: DeletedPipe
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
    this.bool = false;
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

  destroy(deletedRide : Ride){
    deletedRide.deleted = true;
    this.serv.updateRide(deletedRide).subscribe(
      data => {

        this.selected = data;
        this.loadRides();
      },
      err => console.error('failed to update: ' + err)
      );
  }
  update(updatedRide){
    this.bool = true;
    this.rides = null;
  }
  sendUpdate(selected){
    this.serv.updateRide(selected).subscribe(
      data => {

        this.selected = data;
        this.loadRides();
      },
      err => console.error('failed to update: ' + err)
      );
  }

}
