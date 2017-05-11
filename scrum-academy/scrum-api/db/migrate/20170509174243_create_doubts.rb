class CreateDoubts < ActiveRecord::Migration[5.1]
  def change
    create_table :doubts do |t|
      t.string :description, null: false
      t.string :answer, null: true
      t.references :task, foreign_key: true, null: false

      t.timestamps
    end
  end
end
