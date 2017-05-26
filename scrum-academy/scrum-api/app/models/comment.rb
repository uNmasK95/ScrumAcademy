class Comment < ApplicationRecord
  belongs_to :task
  belongs_to :user

  validates_presence_of :description, :user_id, :on => :create
end
