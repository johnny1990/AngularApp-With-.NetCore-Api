import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//@Component({
//  selector: 'app-fetch-data',
//})
export class FetchDataComponent {
  public forecasts: WeatherForecast[] | undefined;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
