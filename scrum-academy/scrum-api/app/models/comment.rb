class Comment < ApplicationRecord
  belongs_to :task
  belongs_to :user

  validates_presence_of :description, :on => :create
end
