import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name:String='';
  email:String='';
   mobileno:String='';
   submit:boolean=false;
   dataArray: any[]=[];
 
  Submit()
  {
 const newUser={name:this.name,email:this.email,mobileno:this.mobileno};
   this.dataArray.push(newUser);
   this.submit=true;
   
  Swal.fire({
     title:"Data received",
     text:`the user with name ${this.name} is added`,
     icon:`success`
   })
       console.log(`the user name is ${this.name}`);
       this.submit=true
     }
  }
 
 
 

