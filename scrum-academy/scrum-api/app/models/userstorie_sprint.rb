class UserstorieSprint < ApplicationRecord
  belongs_to :userstorie
  belongs_to :sprint

  validates_presence_of :sprint_id, :userstorie_id, :on => :create

end
