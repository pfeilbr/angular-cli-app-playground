import { Component } from '@angular/core';
import { QuoteComponent } from './quote';
@Component({
  moduleId: module.id,
  selector: 'angular-cli-app-playground-app',
  templateUrl: 'angular-cli-app-playground.component.html',
  styleUrls: ['angular-cli-app-playground.component.css'],
  directives: [QuoteComponent]
})
export class AngularCliAppPlaygroundAppComponent {
  title = 'angular-cli-app-playground works!';
}
