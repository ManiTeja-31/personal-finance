import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { UserInputComponent } from "../user-input/user-input.component";

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [MatCardModule, UserInputComponent],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss'
})
export class FinanceComponent {

}
