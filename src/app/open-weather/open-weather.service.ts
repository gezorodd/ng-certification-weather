import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OPEN_WEATHER_TOKEN } from '../app.config';
import { CoordinatesRepsonse, WeahterDataResponse } from './open-weather.model';

@Injectable()
export class OpenWeatherService {
  constructor(
    private http: HttpClient,
    @Inject(OPEN_WEATHER_TOKEN) private openWeatherToken: string
  ) {}

  getCoordinatesByZipCode(zipCode: string): Observable<CoordinatesRepsonse> {
    return this.http.get<CoordinatesRepsonse>(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=${this.openWeatherToken}`
    );
  }

  getWeahterByCoordinates(
    lat: number,
    lon: number
  ): Observable<WeahterDataResponse> {
    return this.http.get<WeahterDataResponse>(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${this.openWeatherToken}`
    );
  }
}
