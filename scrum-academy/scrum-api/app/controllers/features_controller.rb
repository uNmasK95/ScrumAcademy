class FeaturesController < ApplicationController
    before_action :set_statement
    before_action :set_feature, only: [ :show, :update, :destroy]

    # GET /statements/:statement_id/features
    def index
        json_response(@statement.feature)
    end

    # GET /statements/:statement_id/features/:id
    def show
        json_response(@feature)
    end

    # POST /statements/:statement_id/features
    def create
        @feature = @statement.feature.create!(features_params)
        json_response(@feature, :created)
    end
    
    # PUT /statements/:statement_id/features/:id
    def update 
        @feature.update(features_params)
        head :no_content
    end

    # DELETE /statements/:statement_id/features/:id
    def destroy
        @feature.destroy
        head :no_content
    end
    

    private 

    def features_params
        params.permit( :description, :priority)
    end

    def set_statement
        @statement = Statement.find( params[:statement_id])
    end

    def set_feature
        @feature = @statement.features.find_by!( id: params[:id] ) if @statement
    end
end