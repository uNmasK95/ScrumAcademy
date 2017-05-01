class CreateProjectTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :project_teams do |t|
      t.references :project, foreign_key: true
      t.references :team, foreign_key: true
      t.boolean :validTeam, default: false

      t.timestamps
    end
  end

  def self.up
    rename_column :project_teams, :valid, :validTeam
  end

  def self.down
    # rename back if you need or do something else or do nothing
  end
end
