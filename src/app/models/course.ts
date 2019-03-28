import ICourse from './course.interface';

class Course implements ICourse {
  id: string;
  name: string;
  date: string;
  length: number;
  isTopRated: boolean;
  description?: string;

  get creationDate(): Date {
    return new Date(this.date);
  }
}

export default Course;
