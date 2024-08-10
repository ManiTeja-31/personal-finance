import { Component } from '@angular/core';
import data from '../dummy-data.json';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

  results:any = data;

}
