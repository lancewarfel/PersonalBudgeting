import {Component, OnInit, ViewChild} from '@angular/core';
import {MatNativeDateModule} from "@angular/material/core";
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTable, MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {DatePipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {DatePickerComponent} from "../../shared/components/date-picker/date-picker.component";
import {MatIcon} from "@angular/material/icon";

export interface TransactionForm {
  name: FormControl<string | null>;
  category: FormControl<string | null>;
  amount: FormControl<number | null>;
  date: FormControl<Date | null>;
  transactions: FormArray<FormGroup<Transaction>>
}

export interface Transaction {
  name: FormControl<string | null>;
  category: FormControl<string | null>;
  amount: FormControl<number | null>;
  date: FormControl<Date | null>;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-transaction-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,
    MatButtonModule,
    MatNativeDateModule,
    DatePipe,
    NgForOf,
    DatePickerComponent,
    NgIf,
    JsonPipe,
    MatIcon,
  ],
  templateUrl: './transaction-page.component.html',
  styleUrl: './transaction-page.component.css'
})
export class TransactionPageComponent implements OnInit{
  public transactionForm!: FormGroup<TransactionForm>;
  public displayedColumns: string[] = ['name', 'category', 'amount', 'date', 'button'];
  public categories = ['Groceries', 'Rent', 'Utilities', 'Entertainment', 'Miscellaneous'];

  public dataSource:FormGroup<Transaction>[] = [];
  @ViewChild(MatTable) public table!: MatTable<FormArray<FormGroup<Transaction>>>;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit() {
    this.transactionForm = this.fb.group<TransactionForm>({
      name: this.fb.control(null),
      category: this.fb.control(null),
      amount: this.fb.control(null),
      date: this.fb.control(null),
      transactions: this.fb.array<FormGroup<Transaction>>([]),
    });

    console.log(this.dataSource.length);

   /* this.dataSource.data = this.transactionForm.controls.transactions.controls;*/
  }

  addData() {
    this.dataSource.push(this.addTransaction());
    this.transactionForm.patchValue({
      name: null,
      category: null,
      amount: null,
      date: null,
    })
    this.table.renderRows();
  }

  removeData(index: number) {
    console.log(index);
    this.transactions.removeAt(index);
    this.dataSource = this.transactions.controls;
    this.table.renderRows();
  }

  editData(index: number){
    console.log(index, 'dialog');
  }

  get totalExpenses(): number {
    return this.transactions.controls.reduce((sum, transaction) => sum + (transaction.controls.amount.value ?? 0), 0);
  }

  addTransaction() {
      return new FormGroup({
        name: new FormControl(this.transactionForm.controls.name.value ?? ''),
        category: new FormControl(this.transactionForm.controls.category.value ?? ''),
        amount: new FormControl(this.transactionForm.controls.amount.value ?? 0),
        date: new FormControl(this.transactionForm.controls.date.value ?? new Date()),
      });

   /* console.log(this.transactions.value, this.dataSource.data);*/
  }

  get transactions(): FormArray<FormGroup<Transaction>> {
    return this.transactionForm.controls.transactions;
  }
}

