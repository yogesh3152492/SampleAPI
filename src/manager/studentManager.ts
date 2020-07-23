import { student } from "../model/student";

export default class studentManager {
    public getStudents = (id: number) => (new Promise((resolve, reject) => {
      
        let student : student[] = [{id: id,name : "Yogesh Sharma", email : "yogesh.sharma01@nagarro.com", age: 32, phoneNumber:9999999999}];
        resolve(student);
        
    }));
}