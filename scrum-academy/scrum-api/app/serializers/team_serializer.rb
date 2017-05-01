class TeamSerializer < ActiveModel::Serializer
  attributes :id

  has_many :user
end
