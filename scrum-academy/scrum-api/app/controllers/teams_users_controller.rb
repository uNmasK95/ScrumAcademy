class TeamsUsersController < ApplicationController
    before_action :set_team, :set_user, :set_function, only: [:create, :update]
    before_action :set_team, :set_user, only: [:show] 
    
    # falta testar os casos em que vem lista vazia

    # GET /teams/:team_id/users
    def index
        @team_users = TeamUser.where( team: params[:team_id] )
        json_response(@team_users)
    end

    # POST /teams/:team_id/users
    def create
        @team_users = TeamUser.create!({
            team_id: @team.id,
            user_id: @user.id,
            function_id: @function.id
        })
        json_response(@team_users, :created)
    end
    
    # GET /teams/:team_id/users/:id
    def show
        @team_user = TeamUser.where( {
            team_id: @team.id, 
            user_id: @user.id
        })
        json_response(@team_user)
    end

    # PUT /teams/:team_id/users/:id
    def update
        TeamUser.where( {
            team_id: params[:team_id], 
            user_id: params[:id]
        }).update({
            function_id: @function.id
        })
        head :no_content
    end

    # DELETE /teams/:team_id/users/:id
    def destroy
        @team_user = TeamUser.find_by( {
            team_id: params[:team_id], 
            user_id: params[:id]
        })
        TeamUser.destroy(@team_user.id)
        head :no_content
    end

    private 

    def team_user_params
        params.permit( :user_id, :function_id, :team_id )
    end

    def set_team
        @team = Team.find(params[:team_id])
    end

    def set_user
        if params[:id].present?
            @user = User.find(params[:id])
        else
            @user = User.find(params[:user])
        end
    end

    def set_function 
        @function = Function.find(params[:function])
    end
end
