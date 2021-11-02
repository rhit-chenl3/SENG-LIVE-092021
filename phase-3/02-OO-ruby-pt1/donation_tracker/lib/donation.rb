class Donation

    attr_accessor :organization, :amount, :date, :completed

    # special method: invoked simultaneously with .new
    def initialize(organization, amount, date, completed)
        # instance variables: @variable_name, bound to the instance of which they were defined for
        @organization = organization
        @amount = amount
        @date = date
        @completed = completed
    end

    # # getter method: instance method
    # def amount
    #     # self: the receiver of the method currently being invoked
    #     @amount
    # end

    # # setter method
    # def amount = (amount)
    #     @amount = amount
    # end

    def read_donation # instance method, being called on an instance of donation
        # in this scope, we have access to the donation instance and its asociated instanec variables
        puts "Organization: #{@organization}"
        puts "Amount: #{@amount}"
        puts "Date: #{@date}"
        puts "Completed? #{@completed}"
    end

end