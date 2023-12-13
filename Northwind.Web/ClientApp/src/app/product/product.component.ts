import { Component } from '@angular/core';  
    import { ProductService } from 'src/services/ProductService';  
    import { FormGroup, FormControl,Validators } from '@angular/forms';   
    @Component({  
      selector: 'app-product-component',  
      templateUrl: './product.component.html',  
      styleUrls: ['./product.component.css']  
    })  
    export class ProductComponent {  
      title = 'ProductComponent';  
         
      constructor(private ProductService: ProductService) { }  
      data: any;  
      ProdForm: FormGroup;  
      submitted = false;   
      EventValue: any = "Save";  
      
      ngOnInit(): void {  
        this.getdata();  
      
        this.ProdForm = new FormGroup({  
        ProductID: new FormControl(null),  
        ProductName: new FormControl("",[Validators.required]),        
        SupplierID: new FormControl("",[Validators.required]),  
        CategoryID:new FormControl("",[Validators.required]),
        QuantityPerUnit: new FormControl("",[Validators.required]),        
        UnitPrice: new FormControl("",[Validators.required]),  
        UnitsInStock:new FormControl("",[Validators.required]),
        UnitsOnOrder:new FormControl("",[Validators.required]),
        ReorderLevel: new FormControl("",[Validators.required]),        
        Discontinued: new FormControl("",[Validators.required])
        })    
      }  
      getdata() {  
        this.ProductService.getData().subscribe((data: any[]) => {  
          this.data = data;  
        })  
      }  
      deleteData(id) {  
        this.ProductService.deleteData(id).subscribe((data: any[]) => {  
          this.data = data;  
          this.getdata();  
        })  
      }  
      Save() {   
        this.submitted = true;  
        
         if (this.ProdForm.invalid) {  
                return;  
         }  
        this.ProductService.postData(this.ProdForm.value).subscribe((data: any[]) => {  
          this.data = data;  
          this.resetFrom();  
      
        })  
      }  
      Update() {   
        this.submitted = true;  
        
        if (this.ProdForm.invalid) {  
         return;  
        }        
        this.ProductService.putData(this.ProdForm.value.ProductID,this.ProdForm.value).subscribe((data: any[]) => {  
          this.data = data;  
          this.resetFrom();  
        })  
      }  
      
      EditData(Data) {  
        this.ProdForm.controls["ProductID"].setValue(Data.ProductID);  
        this.ProdForm.controls["ProductName"].setValue(Data.ProductName);      
        this.ProdForm.controls["SupplierID"].setValue(Data.SupplierID);  
        this.ProdForm.controls["CategoryID"].setValue(Data.CategoryID);  
        this.ProdForm.controls["QuantityPerUnit"].setValue(Data.QuantityPerUnit);  
        this.ProdForm.controls["UnitPrice"].setValue(Data.UnitPrice);  
        this.ProdForm.controls["UnitsInStock"].setValue(Data.UnitsInStock);  
        this.ProdForm.controls["UnitsOnOrder"].setValue(Data.UnitsOnOrder);  
        this.ProdForm.controls["ReorderLevel"].setValue(Data.ReorderLevel);  
        this.ProdForm.controls["Discontinued"].setValue(Data.Discontinued);
        this.EventValue = "Update";  
      }  
      
      resetFrom()  
      {     
        this.getdata();  
        this.ProdForm.reset();  
        this.EventValue = "Save";  
        this.submitted = false;   
      }  
    }  