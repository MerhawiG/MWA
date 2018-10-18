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
    this.arrayItems = [{ name: 'anna', color: '#b00404' }, 
    { name: 'mera', color: '#00aaff' }, 
    { name: 'blue', color: '#04b04a' }, 
    { name: 'grey', color: '#a704b0' }];
  }

}
