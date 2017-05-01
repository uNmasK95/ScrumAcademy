class TeamUserSerializer < ActiveModel::Serializer
  attributes :team_id, :user_id, :function_id

  belongs_to :team
  belongs_to :user
  belongs_to :function
end
