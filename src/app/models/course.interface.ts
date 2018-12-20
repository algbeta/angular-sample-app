interface ICourse {
  readonly id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description?: string; 
}

export default ICourse;
