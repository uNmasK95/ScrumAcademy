class TeamsController < ApplicationController
    before_action :set_team, only: [:show, :update, :destroy]

    # GET /teams
    def index
        @teams = Team.all
        json_response(@teams)
    end

    # POST /teams
    def create
        @team = Team.create!(team_params)
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
        @team = Team.find(params[:id])    
    end


end
