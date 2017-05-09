class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.date :startDate, null: false
      t.date :endDate, null: false
      t.references :statement, foreign_key: true, null: false
      t.references :team, foreign_key: true, null: false

      t.timestamps
    end
  end
end
