class TeamsUsersController < ApplicationController
    before_action :set_team
    before_action :set_team_user, only: [:show, :update, :destroy]
    
    # GET /teams/:team_id/users
    def index
        @team_users = TeamUser.all
        json_response(@team_users)
    end

    # POST /teams/:team_id/users
    def create
        @team = TeamUser.create!(team_params)
        json_response(@team, :created)
    end
    
    # GET /teams/:id
    def show
        json_response(@team)
    end

    # PUT /teams/:id
    def update
        @team.update(team_params)
        head :no_content
    end

    # DELETE /teams/:id
    def destroy
        @team.destroy
        head :no_content
    end

    private 
    
    def team_params
        params.permit(:description)
        
    end

    def set_team
        @team = Team.find(params[:team_id])    
    end

    def set_team_user
        @team_users = TeamUser.find(params[:id])
    end


end
