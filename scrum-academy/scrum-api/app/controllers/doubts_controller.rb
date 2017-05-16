class DoubtsController < ApplicationController
    before_action :set_doubt, only: [ :show, :update, :destroy ]

    # GET doubts
    def index
        if not params[:user].blank?
            @doubts = Doubt.where( 
                task_id: Task.where( 
                    userstorie_id: Userstorie.where( 
                        project_id: Project.where( 
                            statement_id: Statement.where(
                                user: params[:user]
                            )
                        )
                    )
                )
            )
        elsif not params[:task].blank?
            @doubts = Doubt.where( task_id: params[:task] )
        else
            @doubts = Doubt.all
        end
        json_response(@doubts)
    end

    # GET doubts/:id
    def show
        json_response(@doubt)
    end

    # POST doubts
    def create
        @doubt =Doubt.create!(doubt_params)
        json_response(@doubt, :created)
    end

    # PUT doubts/:id
    def update
        @doubt.update(doubt_params)
        head :no_content
    end

    # DELETE doubts/:id
    def destroy
        @doubt.destroy
        head :no_content
    end

    private

    def doubt_params
        params.permit(:description, :task_id)
    end

    def set_doubt
        @doubt = Doubt.find( params[:id] )
    end
end
