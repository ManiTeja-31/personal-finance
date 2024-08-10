import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [MatSelectModule,MatFormFieldModule,FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
  categories :string[] = [
    "Food",
    "Rent",
    "Travel",
    "Fuel",
    "Groceries",
    "Travel",
    "Loans",
    "Bills",
    "Entertainment",
    "Education",
    "Personal Care",
    "Others"];
  selectedCategory:string ='';
  transactionDate!: Date;
  transactionCategory!: string;
  transactionAmount!: number;
  transactionDescription!: string;
}
