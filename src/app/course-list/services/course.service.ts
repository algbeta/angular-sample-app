import { Injectable } from '@angular/core';
import Course from '../../models/course'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses = [
    'hash1':{
      id: 'hash1',
      title: 'Bohemian Rhapsody',
      creationDate: new Date(2018, 11),
      duration: 133,
      topRated: false,
      description:
        'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound'
    },
    {
      id: 'hash2',
      title: 'Fantastic Beasts: The Crimes of Grindelwald',
      creationDate: new Date(2018, 10),
      duration: 134,
      topRated: true,
      description:
        "In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world."
    }, {
      id: 'hash3',
      title: 'The Lego Movie 2: The Second Part',
      creationDate: new Date(2019, 9),
      duration: 55,
      topRated: false,
      description: 'The citizens of Bricksburg face a dangerous new threat when LEGO DUPLO invaders from outer space start to wreck everything in their path. The battle to defeat the enemy and restore harmony to the LEGO universe takes Emmet, Lucy, Batman and the rest of their friends to faraway, unexplored worlds that test their courage and creativity.'
    }
  ];
  constructor() { }

  getList() {
    return this.courses
  }

  createCourse(course) {
    course.id = course.name
    this.courses.push(course)
    return course
  }

  getCourseById(id) {
    const course = this.courses.filter(item => item.id === id)
    if (course && course.length > 0) {
      return course[0]
    }
    return null;
  }

  removeItem() {}
  updateItem() {}
}
