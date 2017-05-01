class CreateSprints < ActiveRecord::Migration[5.1]
  def change
    create_table :sprints do |t|
      t.string :description
      t.date :startDate
      t.date :endDate
      t.references :team, foreign_key: true
      t.references :userstorie, foreign_key: true

      t.timestamps
    end
  end
end
