class UsersController < ApplicationController
    before_action :set_type
    before_action :set_user, only: [:show, :update, :destroy]

    # GET /users
    def index
        @users = User.all
        json_response(@users)
    end

    # POST /users
    def create
        param = user_params
        param[:type] = @type
        @user = User.create!(param)
        json_response(@user, :created)
    end

    # GET /users/:id
    def show
        json_response(@user)
    end

    # PUT /users/:id
    def update
        @user.update(user_params)
        head :no_content
    end

    # DELETE /users/:id
    def destroy
        @user.destroy
        head :no_content
    end

    def user_params
        # whitelist params
        params.permit(:email, :password, :name, :type)
    end

    def set_type
        if(params[:type])
            @type = Type.find(params[:type])
        end
    end

    def set_user
        @user = User.find(params[:id])
    end

end
