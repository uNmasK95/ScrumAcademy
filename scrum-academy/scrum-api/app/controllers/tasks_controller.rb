class TasksController < ApplicationController
    before_action :set_project, :set_project_userstorie, :set_project_userstorie_sprint, :set_project_userstorie_sprint
    before_action :set_project_userstorie_sprint_task, only: [ :show, :update, :destroy ]

    # fazer filtro por utilizador

    # GET /projects/:project_id/userstories/:userstory_id/sprints/:sprint_id/tasks
    def index
        json_response(@sprint.tasks)
    end

    # GET /projects/:project_id/userstories/:userstory_id/sprints/:sprint_id/tasks/:id
    def show
        json_response(@task)
    end

    # POST /projects/:project_id/userstories/:userstory_id/sprints/:sprint_id/tasks
    def create
        @sprint.tasks.create!(task_params)
        json_response(@sprint, :created)
    end

    # PUT /projects/:project_id/userstories/:userstory_id/sprints/:sprint_id/tasks/:id
    def update 
        @task.update(task_params)
        head :no_content
    end

    # DELETE /projects/:project_id/userstories/:userstory_id/sprints/:sprint_id/tasks/:id
    def destroy
        @task.destroy
        head :no_content
    end

    private

    def task_params
        params.permit(:description, :user_id)
    end

    def set_project
        @project = Project.find( params[:project_id] )
    end

     def set_project_userstorie
        @userstorie = @project.userstories.find_by!( id: params[:userstory_id]) if @project
    end

    def set_project_userstorie_sprint
        @sprint = @userstorie.sprints.find_by!( id: params[:sprint_id] )
    end

    def set_project_userstorie_sprint_task
        @task = @sprint.tasks.find_by!( id: params[:id] )
    end
end
