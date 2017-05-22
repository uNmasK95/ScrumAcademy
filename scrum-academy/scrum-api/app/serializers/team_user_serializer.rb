class TeamUserSerializer < ActiveModel::Serializer
  attributes :id, :team_id, :user_id, :function_id
end
