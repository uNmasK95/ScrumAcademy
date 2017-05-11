import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
//import { Options } from 'angular-2-daterangepicker';

@Component({
  selector: 'sprint-create',
  templateUrl: './sprint-create.component.html',
  styleUrls: ['./sprint-create.component.css']
})
export class SprintCreateComponent implements OnInit {

  returnUrl: string;
  projectId : number;
  daterangepickerOptions = {
        startDate: '09/01/2017',
        endDate: '09/02/2017',
        format: 'DD/MM/YYYY'
    }
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  /*ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }*/

  ngOnInit() {
    this.route
        .params
        .subscribe(params => {
            this.projectId = params['id'];
    });
  }
  
  voltar(){
    this.router.navigate(['/projects',this.projectId,'sprints']);
  }

  rangeSelected($event){

  }
  

}
