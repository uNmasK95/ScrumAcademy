class ProjectTeamSerializer < ActiveModel::Serializer
  attributes :id, :project_id, :team_id, :validTeam

  belongs_to :project
  belongs_to :team
end
