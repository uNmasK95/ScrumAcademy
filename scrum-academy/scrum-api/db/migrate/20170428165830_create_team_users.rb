class CreateTeamUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :team_users, id :false do |t|
      t.references :team, foreign_key: true
      t.references :user, foreign_key: true
      t.references :function, foreign_key: true

      t.timestamps
    end
  end
end
