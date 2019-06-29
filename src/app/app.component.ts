import { Component } from '@angular/core';
import {  NgForm} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   userForm = {
     name:'',
     age:''
   }

   onSubmit(e:NgForm){
     console.log(e);
   }
}
