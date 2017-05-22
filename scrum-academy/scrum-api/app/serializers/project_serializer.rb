class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :startDate, :endDate

  belongs_to :team
  #has_many :team_users, through: :team

  belongs_to :statement  
end
