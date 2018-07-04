function (c, a) {
  a = a || {};
  if (!a.t) {
    return {usage: "t1_scraper{t:#s.name.loc}"};
  }

  const P = /(date for|continues on|of the|developments on) ([a-z0-9_]+(.sh|.exe)?)/ig,
        U = /([a-z0-9_]+) (of project|when being)/ig, PW = /(strategy )([a-z0-9_]+)/ig;

  var d = #fs.thebloodlessman.lib().decorrupt,
      p = d.call({t: a.t, a: ""}).split("\n").slice(-1)[0].split("|").map((x) => x.trim()).filter((x) => x.length > 0),
      _ = d.call({t: a.t, a: {}}).match(/with ([a-z]+):"([a-z]+)"/i), c = _[1], pr = _[2],
      ps = [], pw = [], u = [], ts = [], q = {}, i;

  p.forEach((x) => {
    q[c] = x;
    w = d.call({t: a.t, a: q});

    while (i = P.exec(w)) ps.push(i[2])
    while (i = PW.exec(w)) pw.push(i[2])
    while (i = U.exec(w)) u.push(i[1])
  });

  ps.forEach((x) => {
    w = d.call({t: a.t, a: {
      c: pr,
      p: pw[0],
      pass: pw[0],
      password: pw[0],
      project: p
    }});

    w.forEach((t) => {
      if (!t.includes(" ")) ts.push("#s." + t)
    });
  });

  return {t: ts};
}
