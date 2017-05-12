class Project < ApplicationRecord

    belongs_to :statement
    belongs_to :team
    has_many :userstories
    has_many :sprint

    validates_presence_of :name, :description, :startDate, :endDate
end
