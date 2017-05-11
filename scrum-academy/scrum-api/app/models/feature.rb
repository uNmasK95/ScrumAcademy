class Feature < ApplicationRecord
  belongs_to :statement

  validates_presence_of :description, :priority, :statement

end
