class DoubtSerializer < ActiveModel::Serializer
  attributes :id, :description, :answer

  belongs_to :user
end
