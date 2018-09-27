export interface Error {
  num: boolean;
  letter: boolean;
  caps: boolean;
  special: boolean;
  min: boolean;
  match: boolean;
}

export interface Response {
  password: string;
  valid: boolean;
}
