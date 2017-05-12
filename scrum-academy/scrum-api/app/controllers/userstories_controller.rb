class UserstoriesController < ApplicationController
    before_action :set_project
    before_action :set_project_userstorie, only: [ :show, :update, :destroy]

    # GET /projects/:project_id/userstories
    def index
        json_response(@project.userstories)
    end

    # GET /projects/:project_id/userstories/:id
    def show
        json_response(@userstorie)
    end

    # POST /projects/:project_id/userstories
    def create
        @project.userstories.create!(userstorie_params)
        json_response(@project, :created)
    end
    
    # PUT /projects/:project_id/userstories/:id
    def update 
        @userstorie.update(userstorie_params)
        head :no_content
    end

    # DELETE /projects/:project_id/userstories/:id
    def destroy
        @userstorie.destroy
        head :no_content
    end

    private

    def userstorie_params
        params.permit(:description, :priority, :score)
    end
    
    def set_project
        @project = Project.find( params[:project_id] )
    end

    def set_project_userstorie
        @userstorie = @project.userstories.find_by!( id: params[:id]) if @project
    end
end
