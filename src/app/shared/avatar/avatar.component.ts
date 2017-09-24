import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <div class="avatar">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./avatar.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
}
