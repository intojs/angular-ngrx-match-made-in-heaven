import { Component } from '@angular/core';

@Component({
  selector: 'app-preloader',
  template: `
    <div class="preloader"></div>
  `,
  styles: [`
    .preloader {
      display: block;
      position: fixed;
      width: 54px;
      height: 54px;
      top: 50%;
      margin-top: -27px;
      z-index: 400;
      left: 50%;
      margin-left: -27px;
      background: url("/assets/loader.svg") no-repeat center center;
    }
  `]
})
export class PreloaderComponent {
}
