class User < ApplicationRecord

    #model association
    belongs_to :type

    # validation
    validates_presence_of :email, :password, :name, :type
    validates_uniqueness_of :email
end
