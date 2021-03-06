import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card__avatar">
        <ng-content select="[card-avatar]"></ng-content>
      </div>
      <div class="card__details">
        <p class="card__title">
          <ng-content select="[card-title]"></ng-content>
        </p>
        <span class="card__link">
      <ng-content select="[card-link]"></ng-content>
    </span>
      </div>
      <div class="card__button">
        <ng-content select="[card-button]"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
}
