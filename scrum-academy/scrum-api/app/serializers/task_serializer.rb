class TaskSerializer < ActiveModel::Serializer
  attributes :id, :description, :state

  belongs_to :user
end
