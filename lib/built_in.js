function (c, a) {
  var m = {
    range: (s, e, x = 1) => {
      const l = Math.floor((e - s) / x) + 1;
      return Array(l).fill().map((_, i) => s + (i * x));
    }
    format: (s, x) => {
      return s.split(/({\d+})/g).map((_) => {
        if (_.match(/{\d+}/)) {
		      return x[_.match(/\d+/)]
        }
        return _
      }).join("");
    }
  };

  return m;
}
