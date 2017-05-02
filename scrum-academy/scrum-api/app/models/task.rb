class Task < ApplicationRecord
  belongs_to :userstorie
  belongs_to :user

  has_many :comment
  has_many :doubt
end
