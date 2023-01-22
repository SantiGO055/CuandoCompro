import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CuandoCompro';
  session = this.supabase.session
  constructor(private readonly supabase: AuthService){

  }
  ngOnInit(){
    this.supabase.authChanges((_,session) => (this.session = session))
  }
}
