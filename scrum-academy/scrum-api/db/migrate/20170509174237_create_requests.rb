class CreateRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :requests do |t|
      t.references :team, foreign_key: true
      t.references :statement, foreign_key: true
      t.boolean :accept, default: false

      t.timestamps
    end
  end
end
