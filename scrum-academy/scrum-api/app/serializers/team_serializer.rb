class TeamSerializer < ActiveModel::Serializer
  attributes :id, :description
  
  has_many :team_users
  #has_many :user, through: :team_users

  #has_many :request
  #has_many :project, through: :request
end
