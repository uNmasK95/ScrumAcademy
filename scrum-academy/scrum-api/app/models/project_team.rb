class ProjectTeam < ApplicationRecord
  belongs_to :project
  belongs_to :team

  validates_presence_of :project_id, :team_id, :validTeam
  validates_uniqueness_of :project_id, scope: :team_id  
end
