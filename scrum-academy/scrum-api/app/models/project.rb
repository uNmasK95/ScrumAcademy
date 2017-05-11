class Project < ApplicationRecord
    has_many :statement
    has_many :team
    has_many :userstories
    has_many :sprint

    validates_presence_of :name, :description, :startDate, :endDate, :statement, :team
end
