
    import { Injectable } from '@angular/core';  
    import { HttpClient,HttpHeaders }    from '@angular/common/http';  

    @Injectable()
      
    export class CustomerService {

      private headers: HttpHeaders;
      private accessPointUrl: string = 'http://localhost:53877/api/Customer';



      constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
      }

      getData(){          

        return this.http.get(this.accessPointUrl, { headers: this.headers });
      }  
      
      postData(formData){  

        return this.http.post(this.accessPointUrl, formData, { headers: this.headers });
      }  
      
      putData(id,formData){  

        return this.http.put(this.accessPointUrl + '/' + formData.id, formData, { headers: this.headers });
      }  
      
      deleteData(id){  

        return this.http.delete(this.accessPointUrl + '/' + id, { headers: this.headers });
      }  
        
    }  
