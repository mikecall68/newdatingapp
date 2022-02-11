import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get('https://localhost:6001/api/users').subscribe(response =>{
      this.users = response;
    },error => {console.log(error)});
  }
}
