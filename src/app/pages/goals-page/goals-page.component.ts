import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {GoalsForm} from "./models/goal-form.models";
import {WrappedInputComponent} from "../../shared/components/wrapped-input/wrapped-input.component";
import {GoalFormService} from "./services/goal-form.service";
import {MatButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";
import {Subscription} from "rxjs";
import {DatePickerComponent} from "../../shared/components/date-picker/date-picker.component";

@Component({
  selector: 'app-goals-page',
  standalone: true,
  imports: [WrappedInputComponent, ReactiveFormsModule, MatButton, MatCheckbox, DatePickerComponent],
  templateUrl: './goals-page.component.html',
  styleUrl: './goals-page.component.css'
})

export class GoalsPageComponent implements OnInit, OnDestroy {
  public goalForm!: FormGroup<GoalsForm>;
  public subscription = new Subscription();

  constructor(public readonly goalFormService: GoalFormService) {
  }

  public ngOnInit(): void {
    this.goalForm = this.goalFormService.initialize();

    this.subscription.add(this.goalForm.controls.safeSaving.valueChanges.subscribe(x => {
      if (x) {
        this.goalForm.controls.agressiveSaving.patchValue(!x);
      }
    }));

    this.subscription.add(this.goalForm.controls.agressiveSaving.valueChanges.subscribe(x => {
      if (x) {
        this.goalForm.controls.safeSaving.patchValue(!x);
      }
    }));
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
