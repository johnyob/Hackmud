function (context, args) { // {target: #scriptor, args:""}
  const lib = #s.thebloodlessman.lib();
  const getString = () => JSON.stringify(args.target.call(args.args)).replace(/`.([¡¢£¤¥¦§¨©ª])`/g, "$1");
  const corruptChars = "¡¢£¤¥¦§¨©ª";

  var returned = getString().split("");
  var indices = lib.range(0, returned.length - 1).filter(i => corruptChars.indexOf(returned[i]) > -1);

  indices.forEach((i) => {
    do {
      var n = getString();
    } while (corruptChars.indexOf(n[i]) > -1);
    returned[i] = n[i];
  });

  return JSON.parse(returned.join(""));
};
