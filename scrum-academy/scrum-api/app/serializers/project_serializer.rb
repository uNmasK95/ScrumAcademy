class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :startDate, :endDate

  belongs_to :team
  belongs_to :statement
  
end
