//https://developer.mozilla.org/en-US/docs/Glossary/Scope

var x = 0; // A global variable, because it is not in any function

function f() {
  var z = 'foxes', r = 'birds'; // 2 local variables
  m = 'fish'; // global, because it wasn't declared anywhere before

  function child() {
    var r = 'monkeys'; // This variable is local and does not affect the "birds" r of the parent function.
    z = 'penguins'; // Closure: Child function is able to access the variables of the parent function.
  }

  twenty = 20; // This variable is declared on the next line, but usable anywhere in the function, even before, as here
  var twenty;

  child();
  return x; // We can use x here, because it is global
}

f();

// console.log(z); // This line will raise a ReferenceError exception, because the value of z is no longer available

var site_base = "http://site.com/";
var Wrap1 = {
  Inner : {
    marker_purple : site_base + "images/icon/marker-puple.png"
  }
};
console.log(Wrap1);

var Wrap2 = { // variable names starting with capital letters make me uncomfortable
  Inner: function() {
    var site_base = "http://some-other-site.com/";
    return {
      marker_purple: site_base + "images/icon/marker-purple.png"
    };
  }()
};
console.log(Wrap2);

var Wrap3 = (function(){
  var site_base = "http://different-site.com/";

  return {
    Inner: {marker_purple : site_base + "images/icon/marker-puple.png"}
  };
}());
console.log(Wrap3);

var Wrap4 ={
  Inner: Object.create(Object.prototype, {

    site_base: { writable:true, configurable:true, value: "http://site.com/" },

    marker_purple: {
      get: function() { return this.site_base + "images/icon/marker-puple.png" }
    }
  })
};
console.log(Wrap4);
