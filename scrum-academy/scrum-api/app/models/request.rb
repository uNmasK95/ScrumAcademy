class Request < ApplicationRecord
  belongs_to :team
  belongs_to :statement
end
