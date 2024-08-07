import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FinanceComponent } from "./components/finance/finance.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FinanceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-finance';
}
