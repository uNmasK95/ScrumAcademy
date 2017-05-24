import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util.service';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Task } from "app/models/task";

@Injectable()
export class TasksService {

  constructor(private http: Http, private httpUtil: HttpUtilService) { }

  //update  PUT /projects/:project_id/userstories/:userstory_id/tasks/:id
  // :description, :user_id, :state
  update(projectId: number, userStorieId: number, task: Task) {
    console.log("Vou atualizar task");
    return this.http.put(this.httpUtil.url('/projects/'+projectId+'/userstories/'+userStorieId+'/tasks/'+task.id),
            JSON.stringify({description: task.description, user_id: task.userId, state: task.state}),
            this.httpUtil.headers())
              .map(this.httpUtil.extrairDados);
  }

}
