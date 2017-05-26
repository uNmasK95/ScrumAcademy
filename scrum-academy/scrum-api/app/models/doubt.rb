class Doubt < ApplicationRecord
  belongs_to :task
  belongs_to :user

  validates_presence_of :description, :task_id, :user_id, :on => :create

end
