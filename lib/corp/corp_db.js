function(c, a) {
  a = a || {};
  var lib = #fs.thebloodlessman.lib().built_in();

  function authenticate_caller(l) {
    return authenticate(c.caller, {access_level: l});
  }

  function authenticate(id, l={}) {
    return #db.f(Object.assign({db_table: "users", id: id}, l)).first() != null;
  }

  function add_user(id, l) {
    if (!authenticate_caller(1)) {
      return {ok: false, msg: "[`DERROR`] Action requires access level of 1."};
    }
    if (!authenticate(id)) {
      return {ok: false, msg: lib.format("[`DERROR`] User: {0} already exists.", [id])};
    }
    #db.i({db_table: "users", id: id, access_level: l});
    return {ok: true, msg: lib.format("[`LINFO`] Successfully added user: {0} with access level: {1}.", [id, l])};
  }

  function delete_user(id) {
    if (!authenticate_caller(1)) {
      return {ok: false, msg: "[`DERROR`] Action requires access level of 1."};
    }
    if (authenticate(id)) {
      return {ok: false, msg: lib.format("[`DERROR`] User: {0} doesn't exists.", [id])};
    }
    #db.r({db_table: "users", id: id});
    return {ok: true, msg: lib.format("[`LINFO`] Sucessfully deleted user: {0}.", [id])};
  }

  function set_access_level(id, l) {
    if (!authenticate_caller(1)) {
      return {ok: false, msg: "[`DERROR`] Action requires access level of 1."}
    }
    if (!authenticate(id)) {
      return {ok: false, msg: lib.format("[`DERROR`] User: {0} doesn't exists.", [id])};
    }
    #db.u({db_table: "users", id: id}, {$set: {access_level: l}});
    return {ok: true, msg: lib.format("[`LINFO`] Successfully updated access level: user: {0}, access level: {1}.", [id, l])};
  }

  return {
    authenticate: authenticate,
    add_user: add_user,
    delete_user: delete_user,
    set_access_level: set_access_level
  };
}

/*
Tables:
  Users
  Access Level:
   - 0; member
   - 1; admin
*/
