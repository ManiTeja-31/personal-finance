import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [MatSelectModule,MatFormFieldModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
  categories :string[] = ["Food","Rent","Travel","Fuel","Groceries"];
  selectedCategory:string ='';
}
