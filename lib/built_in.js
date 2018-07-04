function (c, a) {
  var m = {
    range: function (s, e, x = 1) {
      const l = Math.floor((e - s) / x) + 1;
      return Array(l).fill().map((_, i) => s + (i * x));
    }
  };

  return m;
}
