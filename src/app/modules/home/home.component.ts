import { TransactionModel } from './../../data/types/transaction.model';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  defaultDate = '';
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
      color: "#4abb78",
      header: "success",
      amount: 85
    },
    {
      color: "#df5b73",
      header: "rejected",
      amount: 15
    }
  ]

  secondaryTransactionsTwo: TransactionModel[] = [
    {
      color: "#2273b5",
      header: "payment",
      amount: 85
    },
    {
      color: "#ef954d",
      header: "refund",
      amount: 15
    }
  ]

  filterForm

  constructor() { }

  ngOnInit(): void {
    alert(1);
    this.defaultDate = moment(new Date).format('YYYY-MM-DD');
  }

  changeView(e) {
    console.log('TODO: Handle dropdown');
  }

}
