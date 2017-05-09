class StatementSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :startDate, :endDate

  belongs_to :user
end
