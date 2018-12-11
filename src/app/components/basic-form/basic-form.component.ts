import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeDetailsServiceService } from 'src/app/employee-details-service.service';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  form: FormGroup;
  // public group = {};
  // let group: any={};
  public employees = [];
  constructor(private empService: EmployeeDetailsServiceService) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe(data => this.employees = data);
    // const group = {};
    let group:any = {};
    this.employees.forEach(attribute => {
      group[attribute.userId] = new FormControl(true);
    });
    // for(let attribute of this.employees)
    // {
    //   group[attribute.userId] = new FormControl(true);
    // }
    this.form = new FormGroup(group);
    
  }
  apply()
  {
    console.info("im clicked")
  }
  reset()
  {
   
  }
  
  

}
