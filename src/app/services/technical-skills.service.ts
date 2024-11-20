// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    // private apiUrl = 'assests/data.json'; // Path to the JSON file in assets folder
    private apiUrl = 'https://fake-json-api.mock.beeceptor.com/users'; // Path to the JSON file in assets folder

    constructor(private http: HttpClient) { }

    // Method to get data from the JSON file
    getData(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}
