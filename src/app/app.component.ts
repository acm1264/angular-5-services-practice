import { Component } from '@angular/core';
import { CounterService } from './shared/counter.service';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  constructor(private usersService: UsersService, private counterService: CounterService){}

 
}
