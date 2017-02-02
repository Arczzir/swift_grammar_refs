require 'csv'


require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter:  'sqlite3',
  database: 'm1.db',
)


#ActiveRecord::Schema.define do
  #create_table :ref, force: true do |t|
    #t.string :key_id
    #t.string :value
  #end
#end


class Ref < ActiveRecord::Base
  self.table_name = "Ref"
end

h = {}

CSV.foreach("./db.csv") do |row|
  k = h[row[0]]
  h[row[0]] = (k == nil ? "" : k + "\n") + row[1]
end

h.each_pair{|k, v|
  r = Ref.new
  r.key_id = k
  r.value = v
  r.save
}
