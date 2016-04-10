function foo(){
  quux = 1;
    function zip(){
      var quux = 2;
  };
  var bar;
}


// # Global Scope & Shadowing
//
// ## Global Scope
//
// Understanding where Scope Chains end is an important part of scoping. All
// Javascript runtimes must implicitly create a Global Scope object (window in
// the browser, global in node), which sits at the top of every scope chain:
//
//         (global)
//            ↑
//            |
//        someFunc()
//            ↑
//           / \
//          /   \
//         /     \
//     inner()  inner2()
//                ↑
//                |
//              foo()
//
// In Scopes we covered how usage of var or let dictates the scope of the
// variable being defined. When assigning a variable without using either of var,
// let, etc, the variable is assumed to exist in an outer scope.
//
// The javascript runtime follows these steps to assign a variable:
//
//  1) Search within the current scope.
//  2) If not found, search in the immediately outer scope.
//  3) If found, go to 6.
//  4) If not found, repeat 2. Until the Global Scope is reached.
//  5) If not found in Global Scope, create it (on window / global objects).
//  6) Assign the value.
//
// In this way, it is possible to accidentally define a global variable (step 5).
//
// ### Example Global Scope
//
// Consider the following example:
//
//     function someFunc() {
//        var scopedVar = 1;
//        function inner() {
//           foo = 2;
//        }
//     }
//
// Note the lack of var or let, etc for foo = 2. The Javascript runtime will
// follow the above algorithm, first checking the scope of inner(), then of
// someFunc(), then finally the Global Scope. Step 5 is then executed, so foo
// becomes a variable in the Global Scope (window.foo / global.foo).
//
// Phrased another way: By accidentally forgetting to use var, the variable foo
// which otherwise would have been only within the lexical scope of inner() is
// now available to be modified by any scope. So, someFunc() now has access
// where the developer may have meant for it not to.
//
// Remember: Only inner scopes can access variables of outer scopes. In this case
// the someFunc() scope is an inner scope of the Global Scope, allowing access of
// foo to someFunc().
//
// ## Shadowing
//
// A variable is created in a 'Step 0)' of the above algorithm: When var or let
// is used. The variable is assigned to the correct scope, then execution moves on,
// and any assignments to that variable follow the above algorithm.
//
// It is perfectly valid to define two different variables, in different scopes,
// with the same name:
//
//     function someFunc() {
//        var foo = 1;
//     }
//     function anotherFunc() {
//        var foo = 2;
//     }
//
// It is also valid to do this in nested scopes:
//
//     function someFunc() {
//        var foo = 1;
//        function inner() {
//           var foo = 2;
//        }
//     }
//
// This is called Shadowing. The foo inside inner() is said to Shadow the foo
// inside someFunc.
//
// Shadowing means that the inner() scope only has access to its own foo. There
// is no way for it to access the foo defined in someFunc().
//
// This can also be an accidental source of bugs, especially when there is deep
// nesting, or long functions.
