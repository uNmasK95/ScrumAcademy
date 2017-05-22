class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :startDate, :endDate

  belongs_to :team
  has_many :team_user, through: :team

  belongs_to :statement  
end
