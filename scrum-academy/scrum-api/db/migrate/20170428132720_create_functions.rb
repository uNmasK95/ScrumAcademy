class CreateFunctions < ActiveRecord::Migration[5.1]
  def change
    create_table :functions do |t|
      t.string :description, null: false

      t.timestamps
    end

    Function.create :description => "Scrum Master"
    Function.create :description => "Developer"
  end
end
