class CreateProjectTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :project_teams do |t|
      t.references :project, foreign_key: true, null: false
      t.references :team, foreign_key: true, null: false
      t.boolean :validTeam, default: false, null: false

      t.timestamps
    end
  end
  
end
