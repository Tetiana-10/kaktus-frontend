import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {Injectable} from '@angular/core';
import { SettingsComponent } from './settings.component';
import { catchError, map, tap } from 'rxjs/operators';
import {SettingModel} from '../setting';


@Injectable({ providedIn: 'root' })
export class SettingsService{

  private url = 'http://8362596264a1.ngrok.io/default';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) {}

  addSettings(settings: SettingModel): Observable<SettingsComponent> {
    return this.http.post<SettingsComponent>(this.url, settings, this.httpOptions);
  }
}
