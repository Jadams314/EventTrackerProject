import { Pipe, PipeTransform } from '@angular/core';
import { Ride } from '../models/ride';
import { RideService } from '../services/ride.service';

@Pipe({
  name: 'deleted'
})
export class DeletedPipe implements PipeTransform {

  transform(rides: Ride[]) {
    var result = [];

    for(let i = 0; i < rides.length; i++){
      if (!rides[i].deleted){
        result.push(rides[i]);
      }
    }
    return result;
  }
}
