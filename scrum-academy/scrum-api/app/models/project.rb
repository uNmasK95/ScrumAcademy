class Project < ApplicationRecord
    has_many :project_teams
    has_many :team, through: :project_teams

    validates_presence_of :name, :description, :startDate, :endDate
end
