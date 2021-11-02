class Pizza
    attr_accessor :name, :toppings, :desc

    def initialize(name, toppings, desc)
        @name = name
        @toppings = toppings
        @desc = desc
    end

    def details
        puts ""
        puts "name: #{@name}"
        puts @toppings
        puts @desc
        puts ""
    end

end