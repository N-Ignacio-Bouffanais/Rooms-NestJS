export type Subject = {
  name: string;
  id: string;
  limit: number;
  professorId?: string;
  student:[]
  professor:{
    firstname:string
  }
};
