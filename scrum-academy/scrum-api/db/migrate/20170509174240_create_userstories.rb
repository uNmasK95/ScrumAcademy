class CreateUserstories < ActiveRecord::Migration[5.1]
  def change
    create_table :userstories do |t|
      t.string :description, null: false
      t.integer :priority, default: 0
      t.integer :score, default: 0
      t.references :project, foreign_key: true, null: false

      t.timestamps
    end
  end
end