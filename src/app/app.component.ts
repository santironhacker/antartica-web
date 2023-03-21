import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'antartica-cs';
  updateSW = false;

  constructor(
    private readonly updates: SwUpdate,
  ) {
    this.updates.available.subscribe(event => {
      this.updateSW = true;
      updates.activateUpdate().then(() => document.location.reload());
    })
  }
}
