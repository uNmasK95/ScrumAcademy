class CommentsController < ApplicationController
    before_action :set_project, :set_project_userstorie, :set_project_userstorie_sprint, :set_project_userstorie_sprint, :set_project_userstorie_sprint_task
    before_action :set_project_userstorie_sprint_task_comment, only: [ :show, :update, :destroy ]

    # GET /projects/:project_id/userstories/:userstory_id/sprints/:sprint_id/tasks/:task_id/comments
    def index
        json_response(@task.comments)
    end

    # GET /projects/:project_id/userstories/:userstory_id/sprints/:sprint_id/tasks/:task_id/comments/:id
    def show
        json_response(@comment)
    end

    # POST /projects/:project_id/userstories/:userstory_id/sprints/:sprint_id/tasks/:task_id/comments
    def create
        @task.comments.create!(comment_params)
        json_response(@task, :created)
    end

    # PUT /projects/:project_id/userstories/:userstory_id/sprints/:sprint_id/tasks/:task_id/comments/:id
    def update 
        @comment.update(comment_params)
        head :no_content
    end

    # DELETE /projects/:project_id/userstories/:userstory_id/sprints/:sprint_id/tasks/:task_id/comments/:id
    def destroy
        @comment.destroy
        head :no_content
    end

    private

    def comment_params
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

    def set_project_userstorie_sprint_task_comment
        @comment = @task.comments.find_by!( id: params[:id] )
    end
end
