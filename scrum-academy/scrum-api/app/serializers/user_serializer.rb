class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email

  # model association
  belongs_to :type
  has_many :team
end