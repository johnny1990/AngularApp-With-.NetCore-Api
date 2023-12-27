    import { Component } from '@angular/core';  
    import { CustomerService } from '../services/CustomerService';
    import { FormGroup, FormControl,Validators } from '@angular/forms';   
    @Component({  
      selector: 'app-customer-component',  
      templateUrl: './customer.component.html',  
      styleUrls: ['./customer.component.css']  
    })  
    export class CustomerComponent {  
      title = 'CustomerComponent';  
         
      constructor(private CustomerService: CustomerService) { }  
      data: any;  
      CstForm!: FormGroup;  
      submitted = false;   
      EventValue: any = "Save";  
      
      ngOnInit(): void {  
        this.getdata();  
      
        this.CstForm = new FormGroup({  
        CustomerID: new FormControl(null),  
        CompanyName: new FormControl("",[Validators.required]),        
        ContactName: new FormControl("",[Validators.required]),  
        ContactTitle:new FormControl("",[Validators.required]),
        Address: new FormControl("", [Validators.required]),


  
        })    
      }  
      getdata() {  
        this.CustomerService.getData().subscribe((data) => {  
          this.data = data;  
        })  
      }  
      deleteData(id : any) {  
        this.CustomerService.deleteData(id).subscribe((data) => {  
          this.data = data;  
          this.getdata();  
        })  
      }  
      Save() {   
        this.submitted = true;  
        
         if (this.CstForm.invalid) {  
                return;  
         }  
        this.CustomerService.postData(this.CstForm.value).subscribe((data) => {  
          this.data = data;  
          this.resetFrom();  
      
        })  
      }  
      Update() {   
        this.submitted = true;  
        
        if (this.CstForm.invalid) {  
         return;  
        }        
        this.CustomerService.putData(this.CstForm.value.CustomerID,this.CstForm.value).subscribe((data) => {  
          this.data = data;  
          this.resetFrom();  
        })  
      }  
      
      EditData(Data: any) {  
        this.CstForm.controls["CustomerID"].setValue(Data.CustomerID);  
        this.CstForm.controls["CompanyName"].setValue(Data.CompanyName);      
        this.CstForm.controls["ContactName"].setValue(Data.ContactName);  
        this.CstForm.controls["ContactTitle"].setValue(Data.ContactTitle);  
        this.CstForm.controls["Address"].setValue(Data.Address); 
        this.CstForm.controls["City"].setValue(Data.City); 
        this.CstForm.controls["Region"].setValue(Data.Region); 
        this.CstForm.controls["PostalCode"].setValue(Data.PostalCode); 
        this.CstForm.controls["Country"].setValue(Data.Country); 
        this.CstForm.controls["Phone"].setValue(Data.Phone); 
        this.CstForm.controls["Fax"].setValue(Data.Fax); 
        this.EventValue = "Update";  
      }  
      
      resetFrom()  
      {     
        this.getdata();  
        this.CstForm.reset();  
        this.EventValue = "Save";  
        this.submitted = false;   
      }  
    }  

