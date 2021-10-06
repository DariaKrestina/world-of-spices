class CreateJoinTableBlendsSpices < ActiveRecord::Migration[6.1]
  def change
    create_join_table :blends, :spices do |t|
      # t.index [:blend_id, :spice_id]
      # t.index [:spice_id, :blend_id]
    end
  end
end
