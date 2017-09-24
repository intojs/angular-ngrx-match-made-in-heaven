import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowButtonComponent {
}
