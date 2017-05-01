class CreateUserstories < ActiveRecord::Migration[5.1]
  def change
    create_table :userstories do |t|
      t.string :description
      t.integer :priority
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end
