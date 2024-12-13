import { Component } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-sportcard',
  standalone: true,
  imports: [LazyLoadImageModule],
  templateUrl: './sportcard.component.html',
  styleUrl: './sportcard.component.scss'
})
export class SportcardComponent {

}
