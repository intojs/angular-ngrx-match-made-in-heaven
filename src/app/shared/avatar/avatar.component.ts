import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
}
