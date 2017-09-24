import { Component } from '@angular/core';

@Component({
  selector: 'app-followed',
  template: `
    <p class="followed"><ng-content></ng-content></p>
  `,
  styles: [`
    .followed {
      color: #A5A5A5;
      margin: 0;
      width: 96px;
      text-align: center;
      cursor: pointer;
      outline: none;
    }
  `]
})
export class FollowedComponent {
}

