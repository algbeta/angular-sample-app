class Course implements ICourse {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description?: string; 
}

export default Course
