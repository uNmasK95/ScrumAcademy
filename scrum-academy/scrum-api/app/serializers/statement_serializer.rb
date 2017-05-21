class StatementSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :startDate, :endDate

  belongs_to :user
  # has_many :feature

end
