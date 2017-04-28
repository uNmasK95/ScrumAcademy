class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.string :password, null: false
      t.string :name, null:false
      t.references :type, foreign_key: true, null:false

      t.timestamps
    end
  end
end
