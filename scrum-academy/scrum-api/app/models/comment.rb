class Comment < ApplicationRecord
  belongs_to :task

  validates_presence_of :description, :on => :create

end
