class StatementsController < ApplicationController
    before_action :set_statement, only: [:show, :update, :destroy]

    # GET /statements
    def index
        #TODO add filter by endDate
        if not params[:user].blank?
            @statements = Statement.where( user: params[:user] )
        elsif not params[:date].blank?
            @statements = Statement.where( "endDate > ?", params[:date] )
        else
            @statements = Statement.all
        end
                
        json_response(@statements)
    end

    # POST /statements
    def create
        @statement = Statement.create!(statement_params)
        json_response(@statement, :created)
    end
    
    # GET /statements/:id
    def show
        json_response(@statement)
    end

    # PUT /statements/:id
    def update
        @statement.update(statement_params)
        head :no_content
    end

    # DELETE /statements/:id
    def destroy
        @statement.destroy
        head :no_content
    end

    private

    def statement_params
        params[:user_id] = params[:user]
        params.permit(:name, :description, :startDate, :endDate, :user_id)
    end

    def set_statement
        @statement = Statement.find(params[:id])
    end

end
