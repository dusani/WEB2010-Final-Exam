class Task {
  constructor(taskOwner, taskDescription) {
    this.taskOwner = taskOwner
    this.taskDescription = taskDescription
    this.date = new Date()
    this.completed = false
    this.isTaskComplete = this.isComplete(this.completed)
  }

  isComplete(completed){
    if (!completed){
      return false
    }
  }
}

let newTask = new Task("Daniel Usani", "Lorem ipsum dolor sit amet")
console.log(newTask.date);

console.log(
  `\n\t Task Owner: ${newTask.taskOwner} \n
   \t Task Description: ${newTask.taskDescription} \n
   \t Task Creation Date: ${newTask.date} \n
   \t Is the task complete? ${newTask.isTaskComplete}`
)


class Student {
  constructor(firstName, lastName, studentId) {
    this.firstName = firstName
    this.lastName = lastName
    this.studentId = studentId
  }
}

class Assignment extends Student {
  constructor(assignmentUrl, assignmentType, grade) {
    super(studentId)
    this.studentId = studentId
    this.assignmentUrl = assignmentUrl
    this.assignmentType = this.assignmentType(this.homework, this.classwork)
    this.grade = grade
  }
}

class Gradebook extends Assignment {
  constructor(courseCode, courseId, instructorName) {
    super(assignmentUrl, assignmentType, grade)
    this.courseCode = courseCode
    this.courseId = courseId
    this.instructorName = instructorName
    this.assignments = []
  }

  addAssignment(grade){

  }

  addAverage(){

  }
}

// 8. What is node.js?
// Node.js is an open source server side framework that uses Javascript. It is asynchronous, fast and single threaded.
//
// 9. What is an example of the usage of an http session? In other words, what are http sessions for?
// A session is as a server-side storage of information that is desired to remain throughout a user's interaction with the web site or a web application. Instead of storing large and constantly changing information through cookies in the user's browser, a unique identifier is stored on the client side called a session ID. This session id is passed to the web server every time the browser makes an HTTP request.
//
// 10. Opportunity for bonus points: mention and explain 2 things which you learned in this course.
//
// I learned arrow functions, proper way to use var, let and const. Also, classes in JavaScript
