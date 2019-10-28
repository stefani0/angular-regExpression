import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  expression : any;


 ngOnInit() {
   var regex = /hello/;
   
   var str = 'hello world';
   
   var result = regex.test(str);console.log(result);

   this.expression = result
  }
}