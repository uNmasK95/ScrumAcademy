class TaskSerializer < ActiveModel::Serializer
  attributes :id, :description

  belongs_to :user
  #has_many :comment
  #has_many :doubt
end
