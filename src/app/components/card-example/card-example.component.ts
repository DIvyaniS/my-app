// import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsServiceService } from './../../employee-details-service.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-example',
  templateUrl: './card-example.component.html',
  styleUrls: ['./card-example.component.css'],
  
})
export class CardExampleComponent implements OnInit {

  public employees = [];
  // typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor(private empService : EmployeeDetailsServiceService) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe(data => {
      this.employees = data,
      console.log(this.employees[0].userId)
    });
  }

}
