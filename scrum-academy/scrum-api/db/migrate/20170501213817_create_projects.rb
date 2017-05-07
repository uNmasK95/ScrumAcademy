class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.date :startDate, null: false
      t.date :endDate, null: false

      t.timestamps
    end
  end
end
