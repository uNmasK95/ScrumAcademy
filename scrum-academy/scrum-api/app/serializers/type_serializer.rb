class TypeSerializer < ActiveModel::Serializer
  attributes :id, :description

  #has_many :users
end
