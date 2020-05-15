import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegiste = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  register(){
    this.authService.register(this.model).subscribe(
      () => {console.log('Register successful'); },
      error => {console.log(console.error()); }
    );
  }
  cancel(){
    this.cancelRegiste.emit(false);
    console.log('Canceled');
  }

}
