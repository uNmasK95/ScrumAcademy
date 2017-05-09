class UsersController < ApplicationController
    skip_before_action :authorize_request, only: :create

    before_action :set_user , only: [:show]

    # POST /signup
    # return authenticated token upon signup
    def create
        #TODO change that
        param = user_params
        param[:type] = Type.find(params[:type])
        user = User.create!(param)
        auth_token = AuthenticateUser.new(user.email, user.password).call
        response = { message: Message.account_created, auth_token: auth_token }
        json_response(response, :created)
    end

    # GET /users
    def index
        @users = User.all
        json_response(@users)
    end

    # GET /users/:id
    def show
        json_response(@user)
    end


    private

    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        # whitelist params
        params.permit(:name, :email, :password, :password_confirmation, :type)
    end



end
