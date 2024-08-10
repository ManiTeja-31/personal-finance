import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { UserInputComponent } from "../user-input/user-input.component";
import { InfoCardComponent } from "../../cards/info-card/info-card.component";
import { TransactionsComponent } from "../transactions/transactions.component";

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [MatCardModule, UserInputComponent, InfoCardComponent, TransactionsComponent],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss'
})
export class FinanceComponent {

}
