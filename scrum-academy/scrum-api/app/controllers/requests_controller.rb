class RequestsController < ApplicationController
    before_action :set_request, only: [ :show, :update, :destroy]

    # GET /requests ? user=1&accept=false
    def index
        if not params[:user].blank?
            if params[:accept].blank?
                @requests = Request.where(statement_id: Statement.where(user: params[:user]) )
            else
                @requests = Request.where(
                    statement_id: Statement.where(user: params[:user]),
                    accept: params[:accept]
                )
            end
        else
            @requests = Request.all
        end
        
        json_response(@requests)
    end

    # GET /requests/:id
    def show
        json_response(@request)
    end

    # POST /requests
    def create
        @request = Request.create!(requests_params)
        json_response(@request, :created)
    end
    
    # PUT /requests/:id
    def update 
        @request.update(requests_params)

        if (not params[:accept].blank?) and params[:accept].to_s == "true"
            #TODO create project and usertories
        end
        
        head :no_content
    end

    # DELETE /requests/:id
    def destroy
        @request.destroy
        head :no_content
    end
    

    private 

    def requests_params
        params.permit( :team_id, :statement_id, :accept )
    end

    def set_request
        @request = Request.find( params[:id])
    end
end
