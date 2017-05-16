class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :description, null: false
      t.references :userstorie, foreign_key: true, null: false
      t.references :user, foreign_key: true, null: true
      t.integer :state, default: 0

      t.timestamps
    end
  end
end
