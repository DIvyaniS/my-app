import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsServiceService } from './../../employee-details-service.service';
import {  FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';

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

	user = {
    skills: [
      { name: 'JS',  selected: true, id: 12 },
      { name: 'CSS',  selected: false, id: 2 },
    ]
  }
  public employees = [];
  public data_list = [];
  isAvailable1=true;
  isAvailable2=true;
  // let map = new Map();
  formGroup: FormGroup;
  constructor(private empService: EmployeeDetailsServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe(data => {
      this.employees = data
      // console.log(this.employees[0].userId)
    })
    this.formGroup = this.formBuilder.group({
      roster: this.formBuilder.array(this.employees.map(elem => this.formBuilder.group({
       id: elem.userId,
       selected: true
      })))
    });
    console.log(this.formGroup.get("roster") as FormArray)
  }
  
//   this.form = this.fb.group({
//     skills: this.buildSkills()
//  });
//  console.log(this.form.get("skills"))
// this.form = this.fb.group({
//   employees : this.buildEmp()
//   // employees:
// })
// console.log(this.form.get('employees'))

// }
//   get skills(): FormArray {
//     return this.form.get('skills') as FormArray;
//   };
//   get employee(): FormArray {
//     return this.form.get('employees') as FormArray;
//   };
  
//   buildEmp()
//   {
//     for(let i=0;i<this.employees.length;i++)
//     {
//       let dtemp = new d(this.employees[i].userId);
//       console.log(this.employees[i].userId);
//       this.data_list.push(dtemp);
//     }
//     const arr = this.data_list.map(s=>{
//       return this.fb.control(s.selected);
//     })
//     return this.fb.array(arr);
    
//   }
  
  submit(value) {
   
    
    // const f = Object.assign({},value, {
    //   data_list: value.id.map((s,i)=>{
    //     return {
    //       id: this.data_list[i].id,
    //       selected: s
    //     }
    //   })
    // })
    console.log(value.isAvailable1);

  }
  
  // ----------------------------------------------------
  // user = {
  //   skills: [
  //     { name: 'JS',  selected: true, id: 12 },
  //     { name: 'CSS',  selected: false, id: 2 },
  //   ]
  // }
  // form;
  // constructor(private fb: FormBuilder) {
  //    console.clear();
     
  //    this.form = this.fb.group({
  //      skills: this.buildSkills()
  //    });
     
  //    console.log(this.form.get("skills"))
  // }
  
  // get skills(): FormArray {
  //   return this.form.get('skills') as FormArray;
  // };
  
  
  // buildSkills() {
  //   const arr = this.user.skills.map(s => {
  //     return this.fb.control(s.selected);
  //     // return this.fb.group({
  //     //   selected: [s.selected],
  //     //   id: [s.id]
  //     // }
  //   })
  //   return this.fb.array(arr);
  // }
  
  // submit(value) {
   
  //   const f = Object.assign({}, value, {
  //     skills: value.skills.map((s, i) => {
  //     return {
  //       id: this.user.skills[i].id,
  //       selected: s
  //     }
  //   });
  //   })
    
  //    console.log(f);
  // }

  //-----------------------------------------------------

  

}
