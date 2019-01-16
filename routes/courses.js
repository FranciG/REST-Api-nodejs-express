var courses = [
    {"id":1, "name": "Programming", "desc": "Basics of java"},
    {"id":2, "name": "Math", "desc": "Calculus"},
    {"id":3, "name": "Suomi", "desc": "Finnish Courses"}
]; //array of courses

//functions that will call our api resources
exports.getCourses = function(req, res) {
    res.send(courses); //will reply with the list of courses
}

exports.addCourse = function(req, res) {
    var name = req.body.name;
    var desc = req.body.desc;
	//Recibimos variables del body,raw,json. Pero no me acuerdo de la sistaxis
    // Add course
    var id = courses.length +  1
    courses.push({"id": id, "name": name, "desc": desc}); //mete el usuario al array
    res.send(courses);
}

exports.updateCourse = function(req, res) {
  var courseId = req.params.courseId; //lo cogemos del parametro courseid del fichero routes
  var name = req.body.name;
  var desc = req.body.desc;

  for (var courseIndex in courses) {
      var course = courses[courseIndex];

      if (courseId == course.id) {
        courses[courseIndex].name = name;
        courses[courseIndex].desc = desc;
      }

  }

  res.send(courses); //devolvemos los usuarios modificados
}

exports.deleteCourse = function(req, res) {
    var courseId = req.params.courseId; //lo cogemos del parametro courseid del fichero routes

    for (var courseIndex in courses) {
        var course = courses[courseIndex];

        if (course.id == courseId) {
            courses.splice(courseIndex, 1);
            break;
        }
    }

    res.send(courses); //devolvemos los usuarios modificados

}
