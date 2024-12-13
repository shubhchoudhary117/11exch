import { Component } from '@angular/core';
import { ExchangeSportsTableComponent } from './exchange-sports-table/exchange-sports-table.component';

@Component({
  selector: 'app-exchange',
  standalone: true,
  imports: [ExchangeSportsTableComponent],
  templateUrl: './exchange.component.html',
  styleUrl: './exchange.component.scss'
})
export class ExchangeComponent {

}
