interface ICourse {
  readonly id: string;
  name: string;
  date: Date;
  length: number;
  description?: string; 
}

export default ICourse;
