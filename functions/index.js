// function declaration
function foo() {
  this.aaa = 'foo';
  console.log('foo this', this.aaa);

  // function expression
  (function bar() {
    console.log('bar this', this.aaa);
  })();

  let x = function hello() {
    console.log('hello this', this.aaa);
  };

  x();

  function aaa() {
    console.log('aaa this', this.aaa);
  }

  aaa();
}

const fooInstance = new foo();

const objLiteral = {
  foo() {
    console.log('foo', this);
  },

  bar: function () {
    console.log('bar', this);

    function xxx() {
      console.log('xxx', this);
    }

    xxx();
  }
};

objLiteral.foo();
objLiteral.bar();
