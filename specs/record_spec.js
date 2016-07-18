var assert = require( 'assert' );
var Record = require( '../record' );

describe( 'Record', function(){

  it( 'has an artist name.', function(){
    record1 = new Record( 'Childish Gambino', 'Because The Internet', 60 )
    assert.equal( 'Childish Gambino', record1.artist )
  })

  it( 'has an album name.', function(){
    record1 = new Record( 'Childish Gambino', 'Because The Internet', 60 )
    assert.equal( 'Because The Internet', record1.title )
  })

  it( 'has a price.', function(){
    record1 = new Record( 'Childish Gambino', 'Because The Internet', 60 )
    assert.equal( 60, record1.price )
  })

})