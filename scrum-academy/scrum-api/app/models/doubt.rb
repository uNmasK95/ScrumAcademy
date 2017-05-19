class Doubt < ApplicationRecord
  belongs_to :task

  validates_presence_of :description, :task_id, :on => :create

end
