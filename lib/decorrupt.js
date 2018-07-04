function (c, a) { // {t: #s.name.loc, a:""}
  const l = #fs.thebloodlessman.built_lib(),
        _ = () => JSON.stringify(a.t.call(a.a)).replace(/`.([¡¢£¤¥¦§¨©ª])`/g, "$1"),
        c = "¡¢£¤¥¦§¨©ª";

  var r = _().split(""),
      x = l.range(0, r.length - 1).filter(j => c.indexOf(r[j]) > -1);

  x.forEach((i) => {
    do {
      var n = _();
    } while (c.indexOf(n[i]) > -1);
    r[i] = n[i];
  });

  return JSON.parse(r.join(""));
};
