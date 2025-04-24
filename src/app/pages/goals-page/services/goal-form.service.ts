import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Goal, GoalsForm} from "../models/goal-form.models";

@Injectable({
  providedIn: 'root'
})
export class GoalFormService {

  constructor(public formBuilder: FormBuilder) { }

  public initialize(value?: Goal) {
    return this.formBuilder.group<GoalsForm>({
      agressiveSaving: this.formBuilder.control(value?.agressiveSaving ?? false),
      byDate: this.formBuilder.control(value?.byDate ?? null),
      goalAmount: this.formBuilder.control(value?.goalAmount ?? 0),
      goalId: this.formBuilder.control(value?.goalId ?? '', Validators.required),
      safeSaving: this.formBuilder.control(value?.safeSaving ?? true),
    })
  }
}
