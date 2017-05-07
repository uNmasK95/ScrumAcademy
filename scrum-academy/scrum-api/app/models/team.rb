class Team < ApplicationRecord
    has_many :team_users
    has_many :user, through: :team_users
    has_many :sprint
    has_many :project_teams
    has_many :project, through: :project_teams

    validates_presence_of :description
end
