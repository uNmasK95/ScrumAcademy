class CreateUserstorieSprints < ActiveRecord::Migration[5.1]
  def change
    create_table :userstorie_sprints do |t|
      t.references :userstorie, foreign_key: true, null: false
      t.references :sprint, foreign_key: true, null: false

      t.timestamps
    end
  end
end
