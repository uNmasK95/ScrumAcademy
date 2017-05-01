class CreateDoubts < ActiveRecord::Migration[5.1]
  def change
    create_table :doubts do |t|
      t.string :description
      t.string :answer
      t.references :task, foreign_key: true

      t.timestamps
    end
  end
end
