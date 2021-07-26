import { TransactionModel } from './../../data/types/transaction.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  transactions: TransactionModel[] = [
    {
      color: "#6c7795",
      header: "Total transactions",
      amountOne: 99999999999,
      amountTwo: 99999999999
    },
    {
      color: "#8bc19d",
      header: "Successful",
      amountOne: 99999999999,
      amountTwo: 99999999999
    },
    {
      color: "#cb8494",
      header: "Rejected",
      amountOne: 99999999999,
      amountTwo: 99999999999
    },
    {
      color: "#3a84a9",
      header: "Payments",
      amountOne: 99999999999,
      amountTwo: 99999999999
    },
    {
      color: "#d3a981",
      header: "Refunds",
      amountOne: 99999999999,
      amountTwo: 99999999999
    },
  ]

  secondaryTransactionsOne: TransactionModel[] = [
    {
      color: "green",
      header: "success",
      amount: 85
    },
    {
      color: "red",
      header: "rejected",
      amount: 24
    }
  ]

  secondaryTransactionsTwo: TransactionModel[] = [
    {
      color: "blue",
      header: "payment",
      amount: 85
    },
    {
      color: "orange",
      header: "refund",
      amount: 24
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
