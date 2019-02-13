import ICourse from './course.interface'

class Course implements ICourse {
  id: string;
  name: string;
  date: Date;
  length: number;
  topRated: boolean;
  description?: string; 
}

export default Course;

