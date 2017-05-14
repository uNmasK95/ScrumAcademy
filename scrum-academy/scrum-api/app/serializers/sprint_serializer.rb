class SprintSerializer < ActiveModel::Serializer
  attributes :id, :description, :startDate, :endDate
  
  has_many :userstorie, through: :userstorie_sprints
end
