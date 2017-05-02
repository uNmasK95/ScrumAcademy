class DoubtsController < ApplicationController
    before_action :set_project, :set_project_userstorie, :set_project_userstorie_sprint, :set_project_userstorie_sprint, :set_project_userstorie_sprint_task
    before_action :set_project_userstorie_sprint_task_doubt, only: [ :show, :update, :destroy ]

    # GET /projects/:project_id/userstories/:userstory_id/sprints/:sprint_id/tasks/:task_id/comments
    def index
        json_response(@task.doubts)
    end

    # GET /projects/:project_id/userstories/:userstory_id/sprints/:sprint_id/tasks/:task_id/comments/:id
    def show
        json_response(@doubt)
    end

    # POST /projects/:project_id/userstories/:userstory_id/sprints/:sprint_id/tasks/:task_id/comments
    def create
        @task.doubts.create!(doubt_params)
        json_response(@task, :created)
    end

    # PUT /projects/:project_id/userstories/:userstory_id/sprints/:sprint_id/tasks/:task_id/comments/:id
    def update 
        @doubt.update(doubt_params)
        head :no_content
    end

    # DELETE /projects/:project_id/userstories/:userstory_id/sprints/:sprint_id/tasks/:task_id/comments/:id
    def destroy
        @doubt.destroy
        head :no_content
    end

    private

    def doubt_params
        params.permit(:description, :task_id)
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
        @task = @sprint.tasks.find_by!( id: params[:task_id] )
    end

    def set_project_userstorie_sprint_task_doubt
        @doubt = @task.doubts.find_by!( id: params[:id] )
    end
end
