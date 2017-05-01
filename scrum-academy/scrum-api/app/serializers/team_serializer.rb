class TeamSerializer < ActiveModel::Serializer
  attributes :id, :description

  has_many :user
end
