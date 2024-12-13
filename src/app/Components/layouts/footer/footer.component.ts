import { Component } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LazyLoadImageModule,NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  paymentGetways=[
    { url:'assets/getways-logos/paytm.svg'},
    { url:'assets/getways-logos/imps.svg'},
    { url:'assets/getways-logos/lipi.svg'},
    { url:'assets/getways-logos/muchBetter.png'},
    { url:'assets/getways-logos/aestroPay.webp'},
    { url:'assets/getways-logos/jeton.png'},
    { url:'assets/getways-logos/tron.png'},
    { url:'assets/getways-logos/bitcoin.png'}
  ]
}
