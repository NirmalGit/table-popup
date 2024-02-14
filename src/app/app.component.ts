import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef: ViewContainerRef;

  showDynamicComponent(): void {
    //this.viewRef.clear();
    const userid = [1, 2, 3, 4, 5];
    this.viewRef.createComponent(DynamicComponent);
  }

  removeDynamicComponent(): void {
    this.viewRef.clear();
  }
}

function of(userid: any) {
  throw new Error('Function not implemented.');
}
