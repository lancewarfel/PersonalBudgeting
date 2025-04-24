import {FormControl} from "@angular/forms";

export interface GoalsForm {
  goalId: FormControl<string | null>;
  goalAmount: FormControl<number | null>;
  byDate: FormControl<Date | null>;
  safeSaving: FormControl<boolean | null>;
  agressiveSaving: FormControl<boolean | null>;
}

export interface Goal {
  goalId: string;
  goalAmount: number;
  byDate: Date;
  safeSaving: boolean;
  agressiveSaving: boolean;
}
