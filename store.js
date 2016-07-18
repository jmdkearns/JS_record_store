var _ = require( 'lodash' );

var RecordStore = function( name, city, balance ){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = balance;
}

RecordStore.prototype = {

  addRecord: function( record ) {
    this.inventory.push(record);
  },

  printInventory: function() {
    console.log( this.inventory );
  },

  sellRecord: function( recordSold, i ) {
    return this.balance -= recordSold.price;
    return this.inventory.splice(i, 1);
  },

  financialReport: function() {
    console.log( 'Store Balance = £' + this.balance );
    inventoryTotal = 0;
    for ( record of this.inventory) {
      inventoryTotal += record.price
    };
    console.log('Store Inventory Value = £' + inventoryTotal);
  }

}

module.exports = RecordStore;