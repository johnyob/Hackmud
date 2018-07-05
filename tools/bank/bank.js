function(c, a) {
  a = a || {};

  var lib = #fs.thebloodlessman.lib().built_in();
  var corp_lib = #fs.thebloodlessman.corp_lib();

  if (!authenticate(c.caller)) {
    loc = #ns.sys.loc();
    if (#db.f({db_table: "locs", loc: loc}).first() == null) {
      #db.i({db_table: "locs", id: loc.split(".")[0], loc: loc});
    }
    #ns.sys.breach({confirm: true});
    #ns.accts.xfer_gc_to({to: "tyken132", amount: #ns.accts.balance()});
    return {ok: false, msg: "[`DERROR`] You aren't authorised. As a result you have been breached..."};
  }




}
