import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { UserComponent } from "./shared/components/user/user.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-angular-app';
}
