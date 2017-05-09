class Statement < ApplicationRecord
  belongs_to :user
  has_many :request
  has_many :team, through: :request
  has_many :project
  has_many :feature

  validates_presence_of :name, :description, :startDate, :endDate, :user


end
