// import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsServiceService } from './../../employee-details-service.service';
import { Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-card-example',
  templateUrl: './card-example.component.html',
  styleUrls: ['./card-example.component.css'],
  
})
export class CardExampleComponent implements OnInit {
  form: FormGroup;
  public employees = [];
  public selectedOptions = [];
  public lastSelectedOptions = [];
  // typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor(private empService : EmployeeDetailsServiceService, private fb: FormBuilder) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe(data => {
      this.employees = data,
      this.selectedOptions = data,
      console.log(this.employees[0].selected)
    });
    for(let i=0; i< this.employees.length;i++)
    {
      this.employees[i].selected = true;
    }
    this.form = this.fb.group({
      emps: this.buildemps()
    })
  }
  onNgModelChange(event: Event) {
    console.info('b4\tListSelectionExample::onNgModelChange::selectedOptions:', this.selectedOptions, ';');
    
    // TODO: Get it so only one tab is selected at a time. Attempt:
    // if (this.selectedOptions && this.selectedOptions.length > 1
    //     && this.lastSelectedOptions && this.lastSelectedOptions.length > 0) {
    //    delete this.selectedOptions[this.selectedOptions.indexOf(this.lastSelectedOptions[0])];
    //    this.lastSelectedOptions = this.selectedOptions;
    // }
    // console.info('l8\tListSelectionExample::onNgModelChange::selectedOptions:', this.selectedOptions, ';');
  }
  buildemps()
  {
    const arr = this.employees.map(s => {
      return this.fb.control(s.selected);
      
    })
    return this.fb.array(arr);
  }
  submit(value) {
   
    const f = Object.assign({}, value, {
      emps: value.emps.map((s, i) => {
      return {
        id: this.employees[i].userId,
        selected: s
      }
    })
    })
    
     console.log(f);
  }


}
