class User < ApplicationRecord
    # encrypt password
    has_secure_password

    #model association
    belongs_to :type

    # validation
    validates_presence_of :email, :password, :name, :type
    validates_uniqueness_of :email
end
