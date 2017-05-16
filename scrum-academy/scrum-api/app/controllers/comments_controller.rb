class CommentsController < ApplicationController
    before_action :set_project_userstorie_task
    before_action :set_project_userstorie_task_comment, only: [ :show, :update, :destroy ]

    # GET /projects/:project_id/userstories/:userstory_id/tasks/:task_id/comments
    def index
        json_response(@task.comment)
    end

    # GET /projects/:project_id/userstories/:userstory_id/tasks/:task_id/comments/:id
    def show
        json_response(@comment)
    end

    # POST /projects/:project_id/userstories/:userstory_id/tasks/:task_id/comments
    def create
        @comment = @task.comment.create!(comment_params)
        json_response(@comment, :created)
    end

    # PUT /projects/:project_id/userstories/:userstory_id/tasks/:task_id/comments/:id
    def update 
        @comment.update(comment_params)
        head :no_content
    end

    # DELETE /projects/:project_id/userstories/:userstory_id/tasks/:task_id/comments/:id
    def destroy
        @comment.destroy
        head :no_content
    end

    private

    def comment_params
        params.permit(:description, :user_id)
    end

    def set_project_userstorie_task
        @project = Project.find( params[:project_id] )
        @userstorie = @project.userstorie.find( params[:userstory_id]) if @project
        @task = @userstorie.task.find( params[:task_id] )
    end

    def set_project_userstorie_task_comment
        @comment = @task.comment.find( params[:id] )
    end
end
