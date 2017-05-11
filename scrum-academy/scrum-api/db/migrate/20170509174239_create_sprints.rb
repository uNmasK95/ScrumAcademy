class CreateSprints < ActiveRecord::Migration[5.1]
  def change
    create_table :sprints do |t|
      t.string :description, null: false
      t.date :startDate, null: false
      t.date :endDate, null: false
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end
