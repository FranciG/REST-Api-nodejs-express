var users = require('./users')

exports.assignRoutes = function (app) {
    app.get('/users', users.getUsers); //method get, name=users, and function we want to execute when calling that method
    app.post('/users', users.addUser);
    app.put('/users/:userId', users.updateUser);
    app.delete('/users/:userId', users.deleteUser);
}

var courses = require('./courses')

exports.assignRoutes = function (app) {
    app.get('/courses', courses.getCourses); //method get, name=users, and function we want to execute when calling that method
    app.post('/courses', courses.addCourse);
    app.put('/courses/:courseId', courses.updateCourse);
    app.delete('/courses/:courseId', courses.deleteCourse);
}
