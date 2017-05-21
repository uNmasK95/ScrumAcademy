class RequestSerializer < ActiveModel::Serializer
  attributes :id, :accept

  belongs_to :team
  belongs_to :statement

end
