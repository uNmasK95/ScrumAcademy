class CreateFeatures < ActiveRecord::Migration[5.1]
  def change
    create_table :features do |t|
      t.string :description, null: false
      t.integer :priority, null: false, default: 0
      t.references :statement, foreign_key: true, null: false

      t.timestamps
    end
  end
end
