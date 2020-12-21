import { Component, OnInit } from '@angular/core';
import { SettingModel } from '../setting';
import {SettingsService} from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  colors = ['red', 'blue', 'green'];
  model = new SettingModel(20, 30, this.colors[0]);
  submitted = false;
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.settingsService.addSettings(this.model)
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('Error!', error)
      );
  }
  constructor(private settingsService: SettingsService) {
  }
}
