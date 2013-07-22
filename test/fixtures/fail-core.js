(function () {

  var foo = "foo"

  var bar = [1, 2, 3, 4,];

  var baz = {
    one: 1,
    two: 2,
    three: 3,
  };

  function qux () {
    for (;;) {
      if (true) {
        return;
        var unreachable = true;
      }
    }
  }

}());