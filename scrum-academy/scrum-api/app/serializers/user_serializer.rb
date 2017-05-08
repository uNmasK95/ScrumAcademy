# app/serializers/user_serializer.rb
class UserSerializer < ActiveModel::Serializer
  # attributes to be serialized  
  attributes :id, :name
  # model association
  belongs_to :type
end