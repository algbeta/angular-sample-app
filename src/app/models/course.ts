import ICourse from './course.interface'

class Course implements ICourse {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  topRated: boolean;
  description?: string; 
}

export default Course;

