import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() imageUrl!: string;
  @Input() productName!: string;
  @Input() price!: string;
  @Input() description!: string;
}
