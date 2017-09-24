import { Component } from '@angular/core';

@Component({
  selector: 'app-followed',
  template: `
    <p class="followed"><ng-content></ng-content></p>
  `,
  styleUrls: [`./followed.component.styl`]
})
export class FollowedComponent {
}

