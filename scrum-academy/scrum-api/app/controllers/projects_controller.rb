class ProjectsController < ApplicationController
    before_action :set_project, only: [:show, :update, :destroy]

    # GET /projects
    def index
        # filter by team
        if not params[:team].blank?
            @projects = Project.where( team_id: params[:team])
        elsif not params[:user].blank?
            @projects = Project.where( 
                team_id: Team.where( 
                    id: TeamUser.where( user_id: params[:user]).select( :team_id )
                )
            )
        else
            @projects = Project.all
        end
        json_response(@projects)
    end

    # POST /projects
    def create
        @project = Project.create!(project_params)
        json_response(@project, :created)
    end
    
    # GET /projects/:id
    def show
        json_response(@project)
    end

    # PUT /projects/:id
    def update
        @project.update(project_params)
        head :no_content
    end

    # DELETE /projects/:id
    def destroy
        @project.destroy
        head :no_content
    end
    
    private

    def project_params
        params.permit(:name, :description, :startDate, :endDate, :statement_id, :team_id)
    end

    def set_project
        @project = Project.find(params[:id])
    end
end
