class TasksController < ApplicationController
    before_action :set_project_userstorie
    before_action :set_project_userstorie_task, only: [ :show, :update, :destroy ]

    # fazer filtro por utilizador

    # GET /projects/:project_id/userstories/:userstory_id/tasks
    def index
        # filter by user
        if not params[:user].blank?
            @tasks = @userstorie.task.where( user_id: params[:user])
        else
            @tasks = @userstorie.task
        end

        #filter by state 
        # em teste
         if not params[:state].blank?
            @tasks = @tasks.where( state: params[:state])
        end
        
        json_response(@tasks)
    end

    # GET /projects/:project_id/userstories/:userstory_id/tasks/:id
    def show
        json_response(@task)
    end

    # POST /projects/:project_id/userstories/:userstory_id/tasks
    def create
        @task = @userstorie.task.create!(task_params)
        json_response(@task, :created)
    end

    # PUT /projects/:project_id/userstories/:userstory_id/tasks/:id
    def update 
        @task.update(task_params)
        head :no_content
    end

    # DELETE /projects/:project_id/userstories/:userstory_id/tasks/:id
    def destroy
        @task.destroy
        head :no_content
    end

    private

    def task_params
        params.permit(:description, :user_id, :state)
    end

    def set_project_userstorie
        @project = Project.find( params[:project_id] )
        @userstorie = @project.userstorie.find( params[:userstory_id] ) if @project
    end

    def set_project_userstorie_task
        @task = @userstorie.task.find( params[:id] )
    end
end
