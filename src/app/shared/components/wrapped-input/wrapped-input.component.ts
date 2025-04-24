import {Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-wrapped-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    NgIf,
  ],
  templateUrl: './wrapped-input.component.html',
  styleUrl: './wrapped-input.component.css'
})
export class WrappedInputComponent {
  @Input() control!: FormControl<any>;
  @Input() inputType: string = 'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() noLabel: boolean = false;
}
