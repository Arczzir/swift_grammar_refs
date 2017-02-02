require 'json'
require 'csv'
s = File.read('swift.txt')
s = s.delete([173].pack("U*"))
a = JSON.parse(s)

i = 0
CSV.open("db.csv", "wb") do |csv|
  a.each {|x|
    csv << x[1].flatten + [ x[3..-1].flatten.join(" ") ]
  }
end
