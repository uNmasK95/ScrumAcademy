import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Project } from "app/dashboard/project/project";
import { SprintService } from "app/services/sprint.service";
//import { Options } from 'angular-2-daterangepicker';

@Component({
  selector: 'sprint-create',
  templateUrl: './sprint-create.component.html',
  styleUrls: ['./sprint-create.component.css']
})
export class SprintCreateComponent implements OnInit {

  returnUrl: string;
  projectId : number;
  project : Project;
  daterangepickerOptions = {
        startDate: '09/01/2017',
        endDate: '09/02/2017',
        format: 'DD/MM/YYYY'
    }

  model: any = {};


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sprintService: SprintService) { }

  /*ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }*/


  //ver se nao da problemas mais tarde
  ngOnInit() {
    this.route
        .params
        .subscribe(params => {
            this.projectId = params['id'];
    });
    this.project = JSON.parse(localStorage.getItem('projectOn'));
  }
  
  voltar(){
    this.router.navigate(['/projects',this.projectId,'sprints']);
  }
  addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*3600*1000);
  }

  addSprint(){
    if(this.validadatas()){
      //ver a diferença de dias
      console.log("ola");
      let Iday = new Date(this.model.Iday);
      let Dday = new Date(this.model.Iday);
      var timeDiff = Math.abs(Iday.getTime() - (new Date(this.project.endD)).getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
      Dday.setDate(Dday.getDate() + this.model.duration); 
      let numerosprints = diffDays/+this.model.duration;
      for(var i=0; i < numerosprints-1;){
        let descricao = 'Sprint '+(i+1);
        this.sprintService.post(this.project.id,descricao,Iday,Dday).subscribe(
          resultado =>{
            console.log("sprints Criadas");
          },
          error=>{
            console.log(error);
            console.log("algo correu mal");
          }
        );
        i++;
        Iday.setDate(Iday.getDate() + this.model.duration); 
        if(i < numerosprints-1){
          Dday.setDate(Dday.getDate() + this.model.duration); 
        }    
      }
      if((diffDays - i*numerosprints)>0){
        let p = diffDays - (i*this.model.duration);
        Dday.setDate(Dday.getDate() + p); 
        let descricao = 'Sprint '+(i+1);
        this.sprintService.post(this.project.id,descricao,Iday,Dday).subscribe(
          resultado =>{
            console.log("sprints Criadas");
          },
          error=>{
            console.log("algo correu mal");
          }
        );
        
      }
      this.router.navigate(['projects',this.projectId,'sprints']);
      // ESTA LINHA NAO TESTEI, MAS É PARA ELE ASEGUIR A CRIAR ATUALIZAR LOGO É ESSA A IDEIA
     // this.voltar();
    }
  }

  validadatas(){
    let timeIday = new Date(this.model.Iday);
    let timenow = new Date();
    if( timeIday.getTime()> (new Date()).getTime()){
      return true;
    }
    else{
      if(timeIday.getDay()==timenow.getDay() && timeIday.getMonth() == timenow.getMonth() && timeIday.getFullYear() == timenow.getFullYear()){
        return true;
      }
    }
    return false;
  }
  

}
