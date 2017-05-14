class Project < ApplicationRecord

    belongs_to :statement
    belongs_to :team
    has_many :userstorie, :dependent => :destroy
    has_many :sprint, :dependent => :destroy

    validates_presence_of :name, :description, :startDate, :endDate
end
