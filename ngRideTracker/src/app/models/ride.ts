export class Ride {
  id: number;
  title: string;
  description: string;
  miles: number;
  bikeUsed: string;
  timeHours: String;
  timeMinutes: string;
  deleted: boolean;

  constructor(
    id?: number,
    title?: string,
    description?: string,
    miles?: number,
    bikeUsed?: string,
    timeHours?: String,
    timeMinutes?: string,
    deleted?: boolean,){
      this.id = id;
      this.title = title;
      this.description = description;
      this.miles = miles;
      this.bikeUsed = bikeUsed;
      this.timeHours = timeHours;
      this.timeMinutes = timeMinutes
      this.deleted = deleted;
    }
}
