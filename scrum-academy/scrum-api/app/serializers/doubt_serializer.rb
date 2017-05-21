class DoubtSerializer < ActiveModel::Serializer
  attributes :id, :description, :answer

  belongs_to :task
  belongs_to :user
end
