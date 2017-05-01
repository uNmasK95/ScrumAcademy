class TeamUser < ApplicationRecord
  belongs_to :team
  belongs_to :user
  belongs_to :function

  validates_presence_of :team_id, :user_id, :function_id
  validates_uniqueness_of :team_id, scope: :user_id
end
