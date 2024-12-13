import { Component, Input } from '@angular/core';
import { MatchcardComponent } from '../matchcard/matchcard.component';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-exchange-sports-table',
  standalone: true,
  imports: [MatchcardComponent,NgClass],
  templateUrl: './exchange-sports-table.component.html',
  styleUrl: './exchange-sports-table.component.scss'
})
export class ExchangeSportsTableComponent {

  @Input() sportType:String="";

}
