import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsServiceService } from './../../employee-details-service.service';
import {  FormBuilder, FormControl, FormArray, Validators, FormGroup } from '@angular/forms';

// export class d{
//   public id:number;
//   public selected:boolean;
//   constructor(id)
//   {
//     this.id=id;
//     this.selected=true
//   }
// }
@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})

export class NewFormComponent implements OnInit {

	
  public employees = [];
 
  
  form: FormGroup;
  constructor(private empService: EmployeeDetailsServiceService, private fb: FormBuilder) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe(data => {
      this.employees = data,
      console.log(this.employees[0].userId)
    })
    const controls = this.employees.map(c => new FormControl(false));
    // controls[0].setValue(true);

    this.form = this.fb.group({
      employees: new FormArray(controls)
    });
    
   
    
  }
  
  submit() {
    const selectedOrderIds = this.form.value.employees
      .map((v, i) => v ? this.employees[i].userId : null)
      .filter(v => v !== null);

    console.log(selectedOrderIds);
  }
}
