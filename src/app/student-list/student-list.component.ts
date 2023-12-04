import { Component } from '@angular/core';
import { StudentServiceService } from '../Services/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  // providers : [StudentServiceService] 
  // register the service on component level, we can register service on app level also by adding providers into app.module.ts file
})
export class StudentListComponent {

//   public student = [{Name:'Riya',Age:14,Standard:11},
//   {Name:'Shivam',Age:15,Standard:12},
//   {Name:'Kumar',Age:13,Standard:10}
// ];

students : any;
constructor(private std : StudentServiceService){
   this.students = std.getData();
   console.log(this.students)
}

}
