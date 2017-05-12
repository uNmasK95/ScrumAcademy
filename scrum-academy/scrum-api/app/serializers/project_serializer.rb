class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :startDate, :endDate

  belongs_to :team
  belongs_to :statement

  #has_many :team_users
  #has_many :team, through: :team_users
end
