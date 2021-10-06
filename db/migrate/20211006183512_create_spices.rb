class CreateSpices < ActiveRecord::Migration[6.1]
  def change
    create_table :spices do |t|
      t.string :name
      t.text :description
      t.string :flavor
      t.string :img_URL

      t.timestamps
    end
  end
end
