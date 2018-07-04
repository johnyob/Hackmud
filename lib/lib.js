function (context, args) {
  var modules = {
    range: function (start, end, step = 1) {
      const len = Math.floor((end - start) / step) + 1;
      return Array(len).fill().map((_, index) => start + (index * step));
    }
  };

  return modules;
}
