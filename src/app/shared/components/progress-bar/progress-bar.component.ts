import {Component, Input} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {TotalPipe} from "../../pipes/total-pipe.pipe";
import {Transaction} from "../../../pages/dashboard/components/models/transaction.models";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-progress-bar',
  standalone: true,
    imports: [
        TotalPipe,
        CurrencyPipe
    ],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  public goal = 5000;
  @Input() goalProgress!: FormArray<FormGroup<Transaction>>;

  public get getTransactionPercent() {
    return this.goalProgress.controls.reduce((acc, record) => (acc + (record.controls.amount.value ?? 0)), 0) / this.goal * 100;
  }
}
