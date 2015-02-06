
/*
  This object will contain all of the information we're tracking about Kate's shop.
  It will contain several properties and methods, which we'll describe below.
*/

var cupcakeShop = {

  /*
    shop.inventory: An object, representing the available stock of each flavor of cupcake. 
      If there are four chocolate available, and two vanilla, the property will be equal to:

      { 
        chocolate: 4, 
        vanilla: 2 
      }
  */
  inventory: {



  },

  retired: [

  ],

  /*
    shop.price: A number, representing the price of a single cupcake.
  */

  price: 3,

  /*
    shop.register: A number, representing the amount of money in the cash register.
  */

  register: 0,

  /*
    shop.bank: A number, representing the amount of money in the business' bank account.
  */

  bank: 0,

  
  /*
    shop.addFlavor: Accepts a string as a parameter, representing a cupcake flavor.
      Adds that flavor to the inventory of cupcake flavors available for sale.\

      If that flavor is ALREADY for sale, make sure that you don't 
      overwrite its existing inventory.

  */

  addFlavor: function(type) {

    if ( this.inventory[type] === undefined )
    {
      this.inventory[type] = 0;
    }

  },

  /*
    shop.removeFlavor: Accepts a string as a parameter, representing a cupcake flavor.
      Removes that flavor from the inventory of cupcake flavors available for sale.
      If there are cupcakes of that flavor, throw them away. (Eww, red velvet.)
  */
  removeFlavor: function(type) {

    if ( this.inventory[type] === undefined )
      {return}

    delete this.inventory[type];

    this.retired.push(type);


  },

  /*
    shop.listFlavors: Returns a list of the flavors for sale.
  */
  listFlavors: function() {

    return _.keys(this.inventory)

  },

  /*
    shop.showStock: Accepts a string as a parameter, representing a cupcake flavor.
      Returns the quantity of that cupcake flavor in the inventory.
      
      If that that cupcake flavor is available, returns 0.
  */

  showStock: function(flavor) {

    if(this.inventory[flavor] === undefined)
    {
      return 0;
    }

    return this.inventory[flavor];

  },


  /*
    shop.restock: Accepts two parameters:
        * A string, representing a cupcake flavor, and
        * A number, representing an amount of cupcakes of that flavor to add.

      If that flavor exists in the inventory, add that number of cupcakes to it.

      If that flavor DOESN'T exist in the inventory, do nothing.
  */

  restock: function(flavor, count) {

    if (this.inventory[flavor] === undefined)
    {
      return
    }

    this.inventory[flavor] += count;

  },

  /*
    shop.makeSale: Accepts a string as parameter, representing a cupcake flavor.

      If that cupcake flavor is available and there is at least 1 in the inventory,
        then subtract one from that flavor's inventory, 
        add the price of a cupcake to the register,
        and return true.

      If that cupcake flavor is not available, or is out of inventory,
        then return false.
  */

  makeSale: function(flavor) {

    if ( (this.inventory[flavor] === undefined) || this.inventory[flavor] === 0 )
    {
      return false
    }

    this.inventory[flavor] -= 1

    this.register += this.price;

    return true

  },

  /*
    shop.reconcile: Adds the number in the register to the bank.
      Sets the register to 0.

      (Think of this like depositing the day's take in the bank at night.)
  */

  reconcile: function() {

    this.bank += this.register;
    this.register = 0;

  },

  /*
    shop.sellsCookies: Returns true if this shop sells cookies. Returns false if not.
      (Note: This shop does not ever sell cookies. It is a cupcake shop.)
  */
  sellsCookies: function() {

    return false;
    
  },


  /*
    Discount sale, sells cupcake but accepts discount parameter that gets applied to the sale price
  */

  discountSale: function(flavor, discount) {

    if ( (this.inventory[flavor] === undefined) || (this.inventory[flavor] === 0) )
    {
      return false
    }

    this.inventory[flavor] -= 1

    this.register += this.price*discount;

    return true

  },

  /* 
    bulk restock  : restocks all cupcakes with the accepted amount 
  */

  bulkRestock: function(count) {

    for ( var flavor in this.inventory ){
      this.inventory[flavor] += count;
    }
  },

  retired: [],

}
/*
  This function exists for testing purposes. It's called before every test
    to ensure that results of previous tests don't have any effect on this one.

    All it does is set the cupcakeShop properties to their default, empty values.

    Don't modify it.
*/

var resetShop = function() {

  cupcakeShop.inventory = {};
  cupcakeShop.price = 3;
  cupcakeShop.register = 0;
  cupcakeShop.bank = 0;

}
