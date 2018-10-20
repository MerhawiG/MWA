import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-newComp [items]="arrayItems"></app-newComp>
  `,
  styles: []
})
export class AppComponent {
  title = 'exercise1';

  private arrayItems: Array<object>;

  constructor() {
    this.arrayItems = [{ name: 'me', color: '#b00404' }, 
    { name: 'merhawi', color: '#00aaff' }, 
    { name: 'anna', color: '#04b04a' }, 
    { name: 'sam', color: '#a704b0' }];
  }

}
