class UserstorieSerializer < ActiveModel::Serializer
  attributes :id, :description, :priority, :score

  #has_many :sprint, through: :userstorie_sprints

end
