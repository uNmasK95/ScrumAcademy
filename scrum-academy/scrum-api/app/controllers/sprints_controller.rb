class SprintsController < ApplicationController
    before_action :set_project, :set_project_userstorie
    before_action :set_project_userstorie_sprint, only: [ :show, :update, :destroy]

    # fazer filtro das sprints por equipas

    # GET /projects/:project_id/userstories/:userstory_id/sprints
    def index
        json_response(@userstorie.sprints)
    end

    # GET /projects/:project_id/userstories/:userstory_id/sprints/:id
    def show
        json_response(@sprint)
    end

    # POST /projects/:project_id/userstories/:userstory_id/sprints
    def create
        @userstorie.sprints.create!(sprint_params)
        json_response(@userstorie, :created)
    end

    # PUT /projects/:project_id/userstories/:userstory_id/sprints/:id
    def update 
        @sprint.update(sprint_params)
        head :no_content
    end

    # DELETE /projects/:project_id/userstories/:userstory_id/sprints/:id
    def destroy
        @sprint.destroy
        head :no_content
    end

    private 

    def sprint_params
        params.permit(:description, :startDate, :endData, :team_id, :userstory_id)
    end

    def set_project
        @project = Project.find( params[:project_id] )
    end

    def set_project_userstorie
        @userstorie = @project.userstories.find_by!( id: params[:id]) if @project
    end

    def set_project_userstorie_sprint
        @sprint = @userstorie.sprints.find_by!( id:params[:id]) if @userstorie
    end
end