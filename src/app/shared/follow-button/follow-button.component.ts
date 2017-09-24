import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-follow-button',
  template: `
    <button
      type="button"
      class="follow-button"
    >
      <img
        class="follow-button__icon"
        srcset="assets/follow-button/icon.png 1x, assets/follow-button/icon@2x.png 2x"
      >
      <span class="follow-button__text"><ng-content></ng-content></span>
    </button>
  `,
  styleUrls: ['./follow-button.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowButtonComponent {
}
