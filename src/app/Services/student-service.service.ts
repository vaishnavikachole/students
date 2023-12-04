import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }

  getData(){
    return [{Name:'Riya',Age:14,Standard:11},
    {Name:'Shivam',Age:15,Standard:12},
    {Name:'Kumar',Age:13,Standard:10}
  ];
  }
}
