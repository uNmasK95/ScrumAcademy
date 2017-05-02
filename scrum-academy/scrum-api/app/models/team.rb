class Team < ApplicationRecord
    has_many :team_users
    has_many :user, through: :team_users
    has_many :sprint
end
