export interface Student{
  name: string,
  adm_no: string,
  form: string,
  stream: string,
  house: string,
  term: string,
  passport: string

}

export interface Subject{
  name: string,
  marks: number,
  teacher: string,
  strengths: string,
  weaknesses: string,
  trend: string,
}

export interface History{
  form: string,
  year: number,
  term: string,
  avg_points: number,
  position: number
}

export interface Dataset {
  total: number[];
  mathematics: number[];
  english: number[];
  CRE: number[];
  history: number[];
  chemistry: number[];
}
