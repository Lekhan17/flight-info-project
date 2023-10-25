import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightInfoPayload } from '../models/flight-info-payload';

@Injectable({
  providedIn: 'root'
})
export class FlightInfoService {
  private apiUrl = 'https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge';

  constructor(private http: HttpClient) {}

  sendFlightInfo(flightInfo: FlightInfoPayload): Observable<any> {
    // Define the headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': 'WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXM' +
              'gdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh',
      'candidate': 'Lekhan Guru sai Dachepalli',
    });

    // Send a POST request with the flightInfo and headers
    return this.http.post(this.apiUrl, flightInfo, { headers });
  }
}
