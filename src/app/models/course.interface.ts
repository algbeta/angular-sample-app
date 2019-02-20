interface ICourse {
  readonly id: string;
  name: string;
  date: string;
  length: number;
  description?: string; 
}

export default ICourse;
