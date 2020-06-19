describe("Service", function(){
  it("Creates a valid Transaction instance", function(){
    spyOn(Date, 'now').and.returnValue('01/01/2000');
    var transaction = new Transaction(1000, "deposit")

    expect(transaction.amount).toEqual(1000)
    expect(transaction.type).toEqual("deposit")
    expect(transaction.date).toBeInstanceOf(Date)
  });
});


