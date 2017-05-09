class FeatureSerializer < ActiveModel::Serializer
  attributes :id, :description, :priority

  belongs_to :statement
end
