import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  accountBalance: number = 1250.50; // Example value
  recentTransactions = [
    { description: 'Grocery Shopping', amount: -100.50, date: '2024-09-15' },
    { description: 'Salary Payment', amount: 2500.00, date: '2024-09-10' },
    { description: 'Gym Membership', amount: -50.00, date: '2024-09-08' }
  ]; // Example transactions
  goalProgress = 60; // Example goal progress percentage

  constructor() { }

  ngOnInit(): void {
    // You can add logic here to fetch the actual data from an API
  }

  protected readonly Math = Math;
}
