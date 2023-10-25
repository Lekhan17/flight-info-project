import { Component } from '@angular/core';
import { FlightInfoService } from '../services/flight-info.service';
import { FlightInfoPayload } from '../models/flight-info-payload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  flightInfo: FlightInfoPayload = {
    airline: '',
    arrivalDate: '',
    arrivalTime: '',
    flightNumber: '',
    numOfGuests: 0,
    comments: ''
  };
  apiResponse: any;

  constructor(private flightInfoService: FlightInfoService) {}

  ngOnInit() {}

  submitForm() {
    this.flightInfoService.sendFlightInfo(this.flightInfo).subscribe(
      (response) => {
        if(response === true){
          this.apiResponse = "your ticket has been booked"
        }
        else{
          this.apiResponse = "booking denied";
        }
        
      },
      (error) => {
        console.error('Error:', error);
        this.apiResponse = 'An error occurred.';
      }
    );
  }
}
