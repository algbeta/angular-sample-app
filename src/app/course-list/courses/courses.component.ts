import { Component, OnInit } from '@angular/core';
import Course from '../../models/course'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  constructor() {}

  ngOnInit() {
    this.courses = [
      {
        id: 'hash1',
        title: 'Bohemian Rhapsody',
        creationDate: new Date(2018, 9),
        duration: 133,
        description:
          'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound'
      },
      {
        id: 'hash2',
        title: 'Fantastic Beasts: The Crimes of Grindelwald',
        creationDate: new Date(2018, 10),
        duration: 134,
        description:
          "In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world."
      }
    ];
  }

  deleteCourse(courseId) {
    console.log(`Courses component's delete course is called: ${courseId}`);
  }

  loadMore() {
    console.log('Load more is called');
  }
}
