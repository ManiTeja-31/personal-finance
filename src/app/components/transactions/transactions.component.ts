import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import data from '../dummy-data.json';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TransactionData } from '../../Models/transaction-data';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CurrencyPipe,DatePipe],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent implements OnInit{

  records:any = data;

  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  constructor(){
    console.log(this.records);
  }

  ngOnInit(){
    const apiCall = this.httpClient
    .get<{ transactions:TransactionData[]}>('http://localhost:3000/records')
    .subscribe({
      next: (resData) => {
        this.records=resData;
        console.log(resData);
      }
    });

    this.destroyRef.onDestroy(() =>{
      apiCall.unsubscribe();
    })

  }

}


// whenever you are using HttpClient don't forget to add them 
// in providers: [provideHttpclient()] in main.ts or else you'll get error in concole
