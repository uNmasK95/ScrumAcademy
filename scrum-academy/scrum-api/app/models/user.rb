class User < ApplicationRecord
    # encrypt password
    has_secure_password

    #model association
    belongs_to :type
    has_many :team_users
    has_many :team, through: :team_users
    has_many :task
    has_many :statement

    # validation
    #validates_presence_of :email, :password, :name, :type
    validates_uniqueness_of :email
end
