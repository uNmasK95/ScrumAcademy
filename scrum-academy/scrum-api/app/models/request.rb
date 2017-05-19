class Request < ApplicationRecord
  belongs_to :team
  belongs_to :statement

  validates_presence_of :team_id, :statement_id, :on => :create

  validates_uniqueness_of :team_id, scope: :statement_id
end
