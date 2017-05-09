class CreateStatements < ActiveRecord::Migration[5.1]
  def change
    create_table :statements do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.date :startDate, null: false
      t.date :endDate, null: false
      t.references :user, foreign_key: true, null: false

      t.timestamps
    end
  end
end
