var assert = require( 'assert' );
var Store = require( '../store' );
var Record = require( '../record' );
var _ = require( 'lodash' );

describe( 'Store', function(){

  beforeEach( function(){
    store1 = new Store( 'North Store', 'London', 5000 );

    record1 = new Record( 'Childish Gambino', 'Because The Internet', 60 );
    record2 = new Record( 'Asher Roth', 'RetroHash', 30 );
    record3 = new Record( 'Action Bronson', 'Mr. Wonderful', 20 );
    record4 = new Record( 'J.Cole', '2014 Forest Hills Drive', 25 );

    store1.addRecord(record1)
    store1.addRecord(record2)
    store1.addRecord(record3)
    store1.addRecord(record4)
  })

  it( 'should have a name.', function() {;
    assert.equal( 'North Store', store1.name ); 
  })

  it( 'should have city location.', function() {
    assert.equal( 'London', store1.city ); 
  })

  it( 'should have a starting balance.', function() {
    assert.equal( 5000, store1.balance ); 
  })

  it( 'should be able to add new record to inventory.', function() {
    assert.equal( 4, store1.inventory.length );
  })

  it( 'should sell record and adjust balance and inventory.', function() {
    store1.sellRecord( record1, 1 );
    assert.equal( 4940, store1.balance );
    assert.equal( 3, store1.inventory.length );
  })

  it( 'should print a financial report.', function() {
    store1.financialReport();
  })
    
})
