class Type < ApplicationRecord
    #model association
    has_many :users, dependent: :destroy

    # validations
    validates_presence_of :description
end
