class Function < ApplicationRecord

    #model association
    has_many :team_users, dependent: :destroy

    # validations
    validates_presence_of :description

end
