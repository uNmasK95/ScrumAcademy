class UserSerializer < ActiveModel::Serializer
  attributes :id, :name

  # model association
  belongs_to :type
  #has_many :team
end