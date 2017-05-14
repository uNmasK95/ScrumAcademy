import { Component, OnInit } from '@angular/core';
import { ProjectService } from "app/services/project.service";
import { Project } from "app/dashboard/project/project";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  loading: boolean = false;
  model: any = {};
  projCreated: boolean = false;
  project : Project;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  createProject(){
   // this.loading = true;
   /* this.project = new Project(this.model.nameP,this.model.desriptionP, new Date(), new Date('2017/07/07'));
    let user = JSON.parse(localStorage.getItem('userOn'));
    this.projectService.create(user.id,this.project).subscribe(
      resultado => {
        let res = resultado;
        this.projCreated=true;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    )*/
    this.projCreated=true; // isto é para elminar depois apenas é para nao estar sempre a criar projectos cada vez que carregas no submit
  }
}
