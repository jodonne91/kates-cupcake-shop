## Kate's Cupcake Shop

### Description

We're all comfortable with using JavaScript now, right? Let's put our code to the test.

We're going to write the code to do some simple business management for our friend Kate. She owns a cupcake shop (which is called "CupKates" because I like obnoxious puns), and having some inventory management and point-of-sale software would make her life a heck of a lot easier.

The first thing we're going to do is write the initial version of the software, making the tests pass like we've done in our previous assignments. We're going to **release** the software at that point.

Once that's done, we're going to add new features. This will require *you* to write the tests, and then make them pass.

## Objectives

### Learning Objectives

After completing this assignment, you should...

* Understand all the Good Parts in native JavaScript
* Be comfortable with a TDD workflow -- not just making tests pass, but writing them as well
* Understand common functional programming paradigms, and how to implement them with underscore.js

### Performance Objectives

After completing this assignment, you should be able to effectively use:

* Simple node.js web server applications
* underscore.js
* Loops to iterate over objects and arrays
* Big honkin' objects
* Test-driven development

## Details

This assignment consists of a simple test runner that's performing tests on functions that we need to complete.

## Normal Mode -- Step 1

First off, make all the tests pass. Same as it ever was. This may be a little tricker than usual; there's plenty of them.

**When you are done with all of the tests, create a git commit.**

After you've created the git commit, enter this command:

`git tag initial-release`

This creates a little convenient flag that lets anyone that's looking at your code base know that this specific commit is special.

## Hard Mode -- Step 2

Remember how a test-driven development workflow operates.

1. Write new tests that **fail**.
2. Implement the new functionality.
3. All tests (old and new) should **pass**.

We're going to add the following features. **You should do it in a TDD way.**

* **Add a discount method**. Kate wants to drum up business for CupKates, so she's giving out coupons for some percentage off the price of a cupcake. You should write a `cupcakeShop.discountSale` method that works a lot like `makeSale` -- it accepts a flavor parameter, but it also accepts a number value, and the price of cupcakes is temporarily multiplied by that number. (So for 50% off, the number would be .5)

* **Add a bulk restock method**. Kate invested in her business and bought an EZ-Kate oven. Now she can make a bunch of cupcakes at once. Write a method that works like `restock`, except it only takes one parameter, the number of cupcakes to add. That method should add that number to all cupcake flavors.

* **Add a retired flavors property**. Red velvet cupcakes taste like garbage, but, like, the worst customers come in asking if she makes them all the time. Kate needs a list of all flavors of cupcakes that CupKates used to sell so she can say to them, "see, we used to make red velvet, but it's awful, and you're an awful person for liking it." Modify the `removeFlavor` method so that it adds the flavor to an array of retired flavors. You should make sure that the retired flavors array can't contain duplicate values.

Once that's all done, tag your git commit with `second-release`.

## Nightmare Mode -- Step 3

Part of TDD involves removing old, outdated tests. We're probably going to have to do that here.

If you're not adding new functionality but *changing* existing functionality, you may have to remove tests. Your workflow then becomes:

1. Identify existing, currently passing tests that should fail, post-your changes.
2. Write new tests that **fail**.
3. Implement the existing functionality.
4. Unaffected old tests and your new tests should **pass**. Outdated old tests should **fail.**
5. Delete the outdated tests.

Add the following feature changes, in a test-driven development way:

* **Modify the inventory and pricing system.** The current system has each cupcake flavor costing the same price. Kate wants to be able to implement market segmentation strategies, and this requires her to sell different cupcakes at different prices. You'll need to change the `cupcakeShop.inventory` property to store cupcake flavor inventory values as objects (with `price` and `quantity` properties). You'll also need to modify many of the existing methods to use the new inventory format.

