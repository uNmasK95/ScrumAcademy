class TeamSerializer < ActiveModel::Serializer
  attributes :id, :description
  
  has_many :team_users
  has_many :user, through: :team_users

  #has_many :project_teams
  #has_many :projects, through: :project_teams
end
