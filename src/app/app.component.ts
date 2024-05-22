import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckboxExampleComponent } from './components/checkbox-example/checkbox-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CheckboxExampleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'checkbox_selection';
}
