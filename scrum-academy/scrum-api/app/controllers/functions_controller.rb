class FunctionsController < ApplicationController

    before_action :set_function, only: [:show, :update, :destroy]

    # GET /functions
    def index
        @function = Function.all
        json_response(@function)
    end

    # POST /functions
    def create
        @function = Function.create!(function_params)
        json_response(@function, :created)
    end

    # GET /functions/:id
    def show
        json_response(@function)
    end

    # PUT /functions/:id
    def update
        @function.update(function_params)
        head :no_content
    end

    # DELETE /functions/:id
    def destroy
        @function.destroy
        head :no_content
    end

    private

    def function_params
        # whitelist params
        params.permit(:description)
    end

    def set_function
        @function = Function.find(params[:id])
    end
end
