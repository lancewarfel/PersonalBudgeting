import {Component, Input} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatInput} from "@angular/material/input";
import {provideNativeDateAdapter} from "@angular/material/core";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInput,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    ReactiveFormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {
  @Input() label: string = '';
  @Input() control!: FormControl<any>
}
