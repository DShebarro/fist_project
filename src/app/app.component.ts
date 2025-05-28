import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';

@Component({
  selector: 'app-root',
  imports: [PerfilComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fist_project';
}
