class UsersController < ApplicationController

    # POST /signup
    # return authenticated token upon signup
    def create
        param = user_params
        param[:type] = @type
        user = User.create!(param)
        auth_token = AuthenticateUser.new(user.email, user.password).call
        response = { message: Message.account_created, auth_token: auth_token }
        json_response(response, :created)
    end

    def user_params
        # whitelist params
        params.permit(:name, :email, :password, :password_confirmation, :type)
    end



end
