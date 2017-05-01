class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :startDate, :endDate

  has_many :project_teams
  has_many :team, through: :project_teams

  #has_many :team_users
  #has_many :team, through: :team_users
end
