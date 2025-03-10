import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DataService {
    //Injects the Httpclient into service
    constructor(private httpClient: HttpClient) { }

    // Get student data from the API
    getStudentData(): Observable<any> {
        //Grab Student data from url
        return this.httpClient.get("https://www.jsonblob.com/api/jsonblob/1346093038287642624");

    }
    // Get weather data from API
    getWeatherData(): Observable<any> {
        return this.httpClient.get("https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303");

    }
}
