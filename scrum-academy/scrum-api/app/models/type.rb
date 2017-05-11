class Type < ApplicationRecord
    #model association
    has_many :user, dependent: :destroy

    # validations
    validates_presence_of :description
end
