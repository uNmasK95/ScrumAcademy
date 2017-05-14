require 'date'

class SprintsController < ApplicationController
    before_action :set_project
    before_action :set_project_sprint, only: [ :show, :update, :destroy, :add]

    # fazer filtro das sprints por equipas

    # GET /projects/:project_id/sprints
    def index
        json_response(@project.sprint)
    end

    # GET /projects/:project_id/sprints/:id
    def show
        json_response(@sprint)
    end

    # POST /projects/:project_id/sprints
    def create
        @sprint = @project.sprint.create!( sprint_params )
        json_response(@sprint, :created)
    end

    # POST /projects/:project_id/sprints/:sprint_id/userstories
    def add
        @userstorie_sprint = @sprint.userstorie_sprints.create!( sprint_add_userstorie_params )
        json_response(@userstorie_sprint, :created)
    end

    # PUT /projects/:project_id/sprints/:id
    def update 
        @sprint.update(sprint_params)
        head :no_content
    end

    # DELETE /projects/:project_id/sprints/:id
    def destroy
        @sprint.destroy
        head :no_content
    end

    private 

    def sprint_params
        params.permit(:description, :startDate, :endDate, :project_id)
    end

    def sprint_add_userstorie_params
        params.permit(:sprint_id, :userstorie_id, :deferred)
    end
    
    def set_project
        @project = Project.find( params[:project_id] )
    end

    def set_project_sprint
        @sprint = @project.sprint.find( params[:sprint_id] ) if @project
    end
end