class CreateFunctions < ActiveRecord::Migration[5.1]
  def change
    create_table :functions do |t|
      t.string :description, null: false

      t.timestamps
    end
  end
end
