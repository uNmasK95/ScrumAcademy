class Userstorie < ApplicationRecord
  
  belongs_to :project

  has_many :task
  has_many :userstorie_sprints
  has_many :sprint, through: :userstorie_sprints

  # validation
  validates_presence_of :description, :priority, :score, :project_id
end
