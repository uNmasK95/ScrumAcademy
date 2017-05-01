class Task < ApplicationRecord
  belongs_to :userstorie
  belongs_to :sprint
  belongs_to :user
end
