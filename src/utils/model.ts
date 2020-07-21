export interface FormValue<T> { 
  name: keyof T; 
  value: T[keyof T];
}