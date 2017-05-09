class Sprint < ApplicationRecord
  belongs_to :project
  has_many :userstorie_sprints
  has_many :userstorie, through: :userstorie_sprints
end
