import {Component, Input, OnChanges} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {TotalPipe} from "../../pipes/total-pipe.pipe";
import {Transaction} from "../../../pages/dashboard/components/models/transaction.models";

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [
    TotalPipe
  ],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent implements OnChanges{
  public goal = 5000;
  @Input() goalProgress!: FormArray<FormGroup<Transaction>>;
  public percentGoal!: string;

  public ngOnChanges() {
    this.percentGoal = this.goalProgress.controls.reduce(
      (acc, control) => (acc + (control.controls.amount.value ?? 0)), 0
    ).toFixed(2) + '%';
  }
}
