class ProjectsTeamsController < ApplicationController
    before_action :set_project, :set_team, only: [:show, :create, :update]


    # GET /projects/:project_id/teams
    def index
        @project_teams = ProjectTeam.where( project_id: params[:project_id] )
        json_response(@project_teams)
    end

    # POST /projects/:project_id/teams
    def create
        @project_teams = ProjectTeam.create!({
            project_id: @project.id,
            team_id: @team.id,
            validTeam: false
        })
        json_response(@project_teams, :created)
    end

    # GET /projects/:project_id/teams/:id
    def show
        @project_team = ProjectTeam.where( {
            project_id: @project.id,
            team_id: @team.id,
        })
        json_response(@project_team)
    end

    # PUT /projects/:project_id/teams/:id
    def update
        ProjectTeam.where( {
            project_id: params[:project_id], 
            team_id: params[:id]
        }).update({
            validTeam: params[:validTeam]
        })
        head :no_content
    end

    private 

    def project_team_params
        params.permit(:project_id, :team_id, :validTeam)
    end

    def set_project
        @project = Project.find( params[:project_id] )
    end

    def set_team
        if params[:id].present?
            @team = Team.find( params[:id] )
        else
            @team = Team.find( params[:team] )
        end
    end
end
