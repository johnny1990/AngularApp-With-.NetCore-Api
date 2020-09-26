
    import { Injectable } from '@angular/core';  
    import { HttpClient,HttpHeaders }    from '@angular/common/http';  
    @Injectable({  
      providedIn: 'root'  
    })  
      
    export class CategoryService {  
      
    constructor(private http: HttpClient) { }  
      httpOptions = {  
        headers: new HttpHeaders({  
          'Content-Type': 'application/json'  
        })  
      }    
      getData(){  
           
        return this.http.get('/api/Category');  //http://localhost:64045 webapi host url  
      }  
      
      postData(formData){  
        return this.http.post('/api/Category',formData);  
      }  
      
      putData(id,formData){  
        return this.http.put('/api/Category/'+id,formData);  
      }  
      
      deleteData(id){  
        return this.http.delete('/api/Category/'+id);  
      }  
        
    }  
