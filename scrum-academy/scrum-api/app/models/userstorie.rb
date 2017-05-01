class Userstorie < ApplicationRecord
  belongs_to :project

  has_many :task
  has_many :sprint

  # validation
  validates_presence_of :description, :priority, :project_id
end
