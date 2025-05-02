import {FormArray, FormControl, FormGroup} from "@angular/forms";

export interface TransactionGroup {
  name: FormControl<string | null>;
  category: FormControl<string | null>;
  amount: FormControl<number | null>;
  date: FormControl<Date | null>;
  transactions: FormArray<FormGroup<Transaction>>,
}

export interface Transaction {
  name: FormControl<string | null>;
  category: FormControl<string | null>;
  amount: FormControl<number | null>;
  date: FormControl<Date | null>;
}

export interface ObjTransaction {
  name: string,
  category: string,
  amount: number,
  date: string,
}
