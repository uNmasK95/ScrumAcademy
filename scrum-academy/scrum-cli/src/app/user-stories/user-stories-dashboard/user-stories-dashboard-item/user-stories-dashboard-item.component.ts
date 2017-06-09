import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { DragulaService } from "ng2-dragula";
import { Task } from "app/models/task";
import { Comment } from "app/models/comment";
import { Doubt } from "app/models/doubt";
import { TasksService } from "app/services/tasks.service";
import { UserStorieUser } from "app/models/userStorieUser";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { UserService } from "app/services/user.service";
import { CommentsService } from "app/services/comments.service";
import { DoubtsService } from "app/services/doubts.service";

@Component({
  selector: 'user-stories-dashboard-item',
  templateUrl: './user-stories-dashboard-item.component.html',
  styleUrls: ['./user-stories-dashboard-item.component.css', '../../../../assets/css/dragula.min.css', '../../../../assets/css/example.css']
})
export class UserStoriesDashboardItemComponent implements OnInit {
    
  @Input() userstorie: UserStorieUser;

  private subscription: Subscription;
  private projectId: number = 0;
  private myTasksToAss: Task[] = []; //[new Task(1,"TaskToAss1",3,0),new Task(2,"TaskToAss2",3,0)]; 
  private othersTasksToAss: Task[] = [];
  private myTasksInProgress: Task[] = []; //[new Task(3,"TaskIn3",3,1),new Task(4,"TaskIn4",3,1)];
  private othersTasksInProgress: Task[] = [];
  private myTasksDone: Task[] = []; //[new Task(5,"TaskD5",3,2),new Task(6,"TaskD6",3,2)];
  private othersTasksDone: Task[] = [];
  private allTasks: Task[] = [];//this.tasksToAss.concat(this.tasksInProgress.concat(this.tasksDone));  //Todas tasks
  
  private userOnName = JSON.parse(localStorage.getItem('userOn')).name;
  private taskSelected : Task = new Task(999,"",999,"",0);

  private comments: Comment[] = [];
  private doubts: Doubt[] = [];

  addc: boolean = false;
  addd: boolean = false;
  model : any ={};

  public constructor(
    private dragulaService:DragulaService, 
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private userService: UserService,
    private commentsService: CommentsService,
    private doubtsService: DoubtsService) {
      dragulaService.dropModel.subscribe((value:any) => {
        console.log("TOU DO DROP:");
        console.log(value);
        this.onDropModel(value.slice(1));
      });
      dragulaService.removeModel.subscribe((value:any) => {
        this.onRemoveModel(value.slice(1));
      });
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.projectId = params['id'];
      });
    console.log(localStorage.getItem('userOn'));
    let userId =JSON.parse(localStorage.getItem('userOn')).id;
    this.tasksService.get(this.projectId,this.userstorie.id)
      .subscribe(
        resultado => {
          console.log("RESULTADO DO GETAll"),
          console.log(resultado)
          for(let r of resultado){
            let t : Task = new Task(r.id,r.description,r.user.id,r.user.name,r.state);
            console.log(t);
            this.allTasks.push(t);
            if(t.state==0){ //ToDo
              if(t.userId==userId){//Minha task
                this.myTasksToAss.push(t);
              }else{//Task de outro
                this.othersTasksToAss.push(t);
              }
            }else if(t.state==1){ //In Progress
              if(t.userId==userId){//Minha task
                this.myTasksInProgress.push(t);
              }else{//Task de outro
                this.othersTasksInProgress.push(t);
              }
            }else{ //Done
              if(t.userId==userId){//Minha task
                this.myTasksDone.push(t);
              }else{//Task de outro
                this.othersTasksDone.push(t);
              }
            }
            console.log("Atribui");
            //console.log(r.team.description+"--"+r.statement.name);
            //let req : Request = new Request(r.id, r.team.id, r.team.description, r.statement.id, r.statement.name);
            //this.requests.push(req);
          }
          console.log(this.allTasks);
          console.log(this.myTasksToAss);
          console.log(this.myTasksInProgress);
          console.log(this.myTasksDone);
          console.log(this.othersTasksToAss);
          console.log(this.othersTasksInProgress);
          console.log(this.othersTasksDone);
        }
      )
  }

  private onDropModel(args:any):void {
    let [el, target, source] = args;
    console.log('onDropModel:');
    console.log(el);
    console.log(target);
    console.log(source);

    //Ver target 
    let newState = 0; // 0->"No state"
    if(target.id=="bag2"){ //Mudou para "In progress"
      newState=1;
    }else if(target.id=="bag3"){
      newState=2;
    }
    console.log("TARGET: newState:"+newState+" -- TaskId:"+el.getAttribute('taskId'));
    this.changeState(el.getAttribute('taskId'), newState);
  }

  private onRemoveModel(args:any):void {
    let [el, source] = args;
    console.log('onRemoveModel:');
    console.log(el);
    console.log(source);
  }

  concate(){
    return "third-bag";
  }

  changeState(taskId, newState){
    console.log("Tou changeStat11");
    console.log(this.allTasks);
    let allTasksAux: Task[] = [];
    this.tasksService.get(this.projectId,this.userstorie.id)
      .subscribe(
        resultado => {
          console.log("RESULTADO DO GETAll2:"+taskId+"---"+newState),
          console.log(resultado)
          for(let r of resultado){
            let t : Task = new Task(r.id,r.description,r.user.id,r.user.name,r.state);
            allTasksAux.push(t);
          }

          //Atualizar task
          let taskToChangeAux = allTasksAux.find(x => x.id == taskId);
          console.log(taskToChangeAux);
          if(taskToChangeAux){
            let taskToChange = new Task(taskToChangeAux.id,taskToChangeAux.description,taskToChangeAux.userId,taskToChangeAux.userName,newState);
            console.log("TOU CHANGESTATE");
            console.log(taskToChange);
            //console.log(taskToChange.id,taskToChange.description);
            this.tasksService.update(this.projectId,this.userstorie.id, taskToChange)
              .subscribe();
            }
        }
      );
  }

  changeTask(task: Task){
    console.log("TOU NO CHANGE TASK");
    this.taskSelected = task;
    console.log(this.projectId+"-"+this.userstorie.id+"-"+task.id)
    this.commentsService.get(this.projectId,this.userstorie.id, task.id)
      .subscribe(
        resultado =>{
          this.comments = [];
          console.log(resultado);
          for(let res of resultado){
            let c : Comment = new Comment(res.id,res.description,task.id);
            this.comments.push(c);
          }
        }
      );
    
    this.doubtsService.get(task.id)
      .subscribe(
        resultado =>{
          this.doubts = [];
          console.log(resultado);
          for(let res of resultado){
            let d : Doubt= new Doubt(res.id,res.description, res.answer,task.id);
            this.doubts.push(d);
          }
        }
      );
  }

  addD(){
    if(this.addd) this.addd = false;
    else this.addd = true;
  }
  addC(){
    if(this.addc) this.addc = false;
    else this.addc = true;
  }
  addC2(){
    this.addc = false;
    this.addd = false;
  }

  //Comments ----
  createComment(){
    console.log(this.model.descriptionC);
    this.commentsService.create(this.projectId,this.userstorie.id, 
      this.model.descriptionC,JSON.parse(localStorage.getItem('userOn')).id,this.taskSelected.id)
      .subscribe(
        resultado => {
          console.log(resultado);
          this.comments.push(new Comment(resultado.id,resultado.description,this.taskSelected.id));
        }
      );
  }

  removeC(commentId: number){
    console.log(this.model.descriptionC);
    this.commentsService.remove(this.projectId,this.userstorie.id,this.taskSelected.id,commentId)
      .subscribe(
        resultado => {
          console.log(resultado);
          this.commentsService.get(this.projectId,this.userstorie.id, this.taskSelected.id)
              .subscribe(
                resultado =>{
                  this.comments = [];
                  for(let res of resultado){
                    let c : Comment = new Comment(res.id,res.description,this.taskSelected.id);
                    this.comments.push(c);
                  }
                }
              );
        }
      );
  }

  //Doubts ----
  createDoubt(){
    console.log(this.model.descriptionD);
    this.doubtsService.create(this.model.descriptionD,JSON.parse(localStorage.getItem('userOn')).id,this.taskSelected.id)
      .subscribe(
        resultado => {
          console.log(resultado);
          this.doubts.push(new Doubt(resultado.id,resultado.description,resultado.answer,this.taskSelected.id));
        }
      );
  }

  removeD(doubtId: number){
    console.log(this.model.descriptionD);
    this.doubtsService.remove(doubtId)
      .subscribe(
        resultado => {
          console.log(resultado);
          this.doubtsService.get(this.taskSelected.id)
              .subscribe(
                resultado =>{
                  this.doubts = [];
                  for(let res of resultado){
                    let d : Doubt = new Doubt(res.id,res.description,res.answer,this.taskSelected.id);
                    this.doubts.push(d);
                  }
                }
              );
        }
      );
  }

}
