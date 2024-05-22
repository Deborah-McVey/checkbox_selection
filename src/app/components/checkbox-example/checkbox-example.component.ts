import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox-example',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './checkbox-example.component.html',
  styleUrl: './checkbox-example.component.scss'
})
export class CheckboxExampleComponent {
  isChecked = false;

  @ViewChild('checkboxForm') form: any;

onSubmit() {
  if (this.form?.valid) {
    alert('Form is valid');
  } else {
    this.form?.control.markAllAsTouched();
  }
}
}
