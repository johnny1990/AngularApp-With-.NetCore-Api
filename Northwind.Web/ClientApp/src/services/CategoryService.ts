
    import { Injectable } from '@angular/core';  
    import { HttpClient,HttpHeaders }    from '@angular/common/http';  

    @Injectable()
      
    export class CategoryService {

      private headers: HttpHeaders;
      private accessPointUrl: string = 'http://localhost:53877/api/Category';

    //constructor(private http: HttpClient) { }  
    //  httpOptions = {  
    //    headers: new HttpHeaders({  
    //      'Content-Type': 'application/json'  
    //    })  
    //  }

      constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
      }

      getData(){  
           
       // return this.http.get('/api/Category');  //http://localhost:64045 webapi host url

        return this.http.get(this.accessPointUrl, { headers: this.headers });
      }  
      
      postData(formData){  
        //return this.http.post('/api/Category', formData);

        return this.http.post(this.accessPointUrl, formData, { headers: this.headers });
      }  
      
      putData(id,formData){  
        //return this.http.put('/api/Category/'+id,formData);
        return this.http.put(this.accessPointUrl + '/' + formData.id, formData, { headers: this.headers });
      }  
      
      deleteData(id){  
        //return this.http.delete('/api/Category/'+id);

        return this.http.delete(this.accessPointUrl + '/' + id, { headers: this.headers });
      }  
        
    }  
