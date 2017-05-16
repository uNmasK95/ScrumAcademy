class UsersController < ApplicationController
    skip_before_action :authorize_request, only: :create

    before_action :set_user , only: [:show, :update, :destroy]

    # POST /signup
    # return authenticated token upon signup
    def create
        #TODO change that
        param = user_params
        param[:type] = Type.find(params[:type])
        user = User.create!(param)
        auth_token = AuthenticateUser.new(user.email, user.password).call
        response = { 
            message: Message.account_created, 
            auth_token: auth_token,
            user_id: user.id
        }
        json_response(response, :created)
    end

    # GET /users
    def index
        # filter by type
        if not params[:type].blank?
            @users = User.where( type: params[:type] )
        else
            @users = User.all
        end
        json_response(@users)
    end

    # GET /users/:id
    def show
        json_response(@user)
    end

    # PUT /projects/:id
    def update
        @user.update(user_params)
        head :no_content
    end

    # DELETE /projects/:id
    def destroy
        @user.destroy
        head :no_content
    end

    private

    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        # whitelist params
        params.permit(:name, :email, :password, :type)
    end



end
