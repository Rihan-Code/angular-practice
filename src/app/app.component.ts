import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

// decorator of the class 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  // this is the template which tells the component what to run
  template: `
    <app-header />
    <main>
      <!-- <app-home /> --> <!-- we are using this via router, now -->
      <router-outlet />
    </main>
  `,
  // if you write styles within a component it remains with in a component
  styles: [`
      main {
        padding-inline: 16px;
      }
    `],
})
export class AppComponent {
  title = 'test-angular';
}
