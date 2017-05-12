class RequestsController < ApplicationController
    before_action :set_statement
    before_action :set_request, only: [ :show, :update, :destroy]

    # GET /statements/:statement_id/requests
    def index
        json_response(@statement.request)
    end

    # GET /statements/:statement_id/requests/:id
    def show
        json_response(@request)
    end

    # POST /statements/:statement_id/requests
    def create
        @request = @statement.request.create!(requests_params)
        json_response(@request, :created)
    end
    
    # PUT /statements/:statement_id/requests/:id
    def update 
        @request.update(requests_params)
        head :no_content
    end

    # DELETE /statements/:statement_id/requests/:id
    def destroy
        @request.destroy
        head :no_content
    end
    

    private 

    def requests_params
        params.permit( :team_id, :accept )
    end

    def set_statement
        @statement = Statement.find( params[:statement_id])
    end

    def set_request
        @request = @statement.requests.find_by!( id: params[:id] ) if @statement
    end
end
