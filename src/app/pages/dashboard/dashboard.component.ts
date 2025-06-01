import {Component, OnInit} from '@angular/core';
import {AsyncPipe, CurrencyPipe, NgForOf} from "@angular/common";
import {ProgressBarComponent} from "../../shared/components/progress-bar/progress-bar.component";
import {TotalPipe} from "../../shared/pipes/total-pipe.pipe";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PercentPipe} from "../../shared/pipes/percent.pipe";
import {ObjTransaction, Transaction, TransactionGroup} from "./components/models/transaction.models";
import {DatePickerComponent} from "../../shared/components/date-picker/date-picker.component";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {TransactionComponent} from "./components/transactions/transaction.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [
    NgForOf,
    ProgressBarComponent,
    AsyncPipe,
    TotalPipe,
    PercentPipe,
    CurrencyPipe,
    DatePickerComponent,
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    TransactionComponent
  ]
})
export class DashboardComponent implements OnInit {
  public form!: FormGroup<TransactionGroup>;
  public goal = 5000;

  public recentTransactions: ObjTransaction[] = [
    { category: 'Grocery Shopping', amount: -100.50, date: '2024-09-15', name: 'Expense' },
    { category: 'Salary Payment', amount: 2500.00, date: '2024-09-10', name: 'Expense' },
    { category: 'Gym Membership', amount: -50.00, date: '2024-09-08', name: 'Expense' }
  ];

  public labels = ['Grocery Shopping', 'Gym Membership', 'Take Out'];

  constructor(public readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group<TransactionGroup>({
       name: this.fb.control(null),
      category: this.fb.control(null),
      amount: this.fb.control(null),
      date: this.fb.control(null),
      transactions: this.fb.array(this.recentTransactions.map(transaction => (this.initializeGroups(transaction)))),
    })
  }

  public addTransaction(): void {
    if (this.form.controls.transactions.length % 20 === 0) {
      this.form.controls.transactions.push(this.initializeGroups({
        category: 'Salary Payment',
        amount: 2000,
        date: new Date().toLocaleDateString(),
        name: 'Salary'
      }));
      return;
    }
    this.form.controls.transactions.push(this.initializeGroups({
      category: this.getRandomTransactionLabel(this.getRandomInt(0,this.labels.length)),
      amount: this.getRandomInt(-100,100),
      date: new Date().toLocaleDateString(),
      name: ''
    }));
  }

  public getRandomTransactionLabel(index: number) {
    return this.labels[index];
  }

  public initializeGroups(transaction: ObjTransaction): FormGroup<Transaction> {
    return this.fb.group<Transaction>({
      name: this.fb.control(transaction.name ?? null),
      amount: this.fb.control(transaction.amount ?? null),
      date: this.fb.control(new Date(transaction.date) ?? null),
      category: this.fb.control(transaction.category ?? null)
    });
  }

  protected readonly Math = Math;
  public getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }
}
