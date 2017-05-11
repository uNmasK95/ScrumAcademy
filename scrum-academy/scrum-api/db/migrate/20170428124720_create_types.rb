class CreateTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :types do |t|
      t.string :description, null: false

      t.timestamps
    end

    Type.create :description => "Product Owner"
    Type.create :description => "Scrum Master/ Developer"
  end
end
