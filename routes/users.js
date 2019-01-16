var users = [
    {"id":1, "name": "Ricky Lahey", "kind": "Open university", "adress": "Torikatu"},
    {"id":2, "name": "Eetu Richardson", "kind": "Degree student", "adress": "Rantakatu"},
    {"id":3, "name": "Jhon Rambo", "kind": "Degree student" , "adress": "Kauppakatu"}
]; //array of users

//functions that will call our api resources
exports.getUsers = function(req, res) {
    res.send(users); //will reply with the list of users
}

exports.addUser = function(req, res) {
    var name = req.body.name;
    var kind = req.body.kind;
	//Recibimos variables del body,raw,json. Pero no me acuerdo de la sistaxis
    // Add user
    var id = users.length +  1
    users.push({"id": id, "name": name, "kind": kind, "adress": adress}); //mete el usuario al array
    res.send(users);
}

exports.updateUser = function(req, res) {
  var userId = req.params.userId; //lo cogemos del parametro userid del fichero routes
  var name = req.body.name;
  var kind = req.body.kind;

  for (var userIndex in users) {
      var user = users[userIndex];

      if (userId == user.id) {
        users[userIndex].name = name;
        users[userIndex].kind = kind;
      }

  }

  res.send(users); //devolvemos los usuarios modificados
}

exports.deleteUser = function(req, res) {
    var userId = req.params.userId; //lo cogemos del parametro userid del fichero routes

    for (var userIndex in users) {
        var user = users[userIndex];

        if (user.id == userId) {
            users.splice(userIndex, 1);
            break;
        }
    }

    res.send(users); //devolvemos los usuarios modificados

}
