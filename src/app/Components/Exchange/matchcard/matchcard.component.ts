import { Component } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-matchcard',
  standalone: true,
  imports: [LazyLoadImageModule],
  templateUrl: './matchcard.component.html',
  styleUrl: './matchcard.component.scss'
})
export class MatchcardComponent {

}
