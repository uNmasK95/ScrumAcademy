class Team < ApplicationRecord
    has_many :team_users
    has_many :user, through: :team_users
    has_many :project
    has_many :request
    has_many :statement, through: :request

    validates_presence_of :description
end
