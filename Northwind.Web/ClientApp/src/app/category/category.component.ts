
    import { Component } from '@angular/core';  
    import { CategoryService } from 'src/services/CategoryService';  
    import { FormGroup, FormControl,Validators } from '@angular/forms';   
    @Component({  
      selector: 'app-category-component',  
      templateUrl: './category.component.html',  
      styleUrls: ['./category.component.css']  
    })  
    export class CategoryComponent {  
      title = 'CategoryComponent';  
         
      constructor(private CategoryService: CategoryService) { }  
      data: any;  
      CatForm: FormGroup;  
      submitted = false;   
      EventValue: any = "Save";  
      
      ngOnInit(): void {  
        this.getdata();  
      
        this.CatForm = new FormGroup({  
        CategoryID: new FormControl(null),  
        CategoryName: new FormControl("",[Validators.required]),        
        Description: new FormControl("",[Validators.required]),  
        Picture:new FormControl("",[Validators.required]),
        })    
      }  
      getdata() {  
        this.CategoryService.getData().subscribe((data: any[]) => {  
          this.data = data;  
        })  
      }  
      deleteData(id) {  
        this.CategoryService.deleteData(id).subscribe((data: any[]) => {  
          this.data = data;  
          this.getdata();  
        })  
      }  
      Save() {   
        this.submitted = true;  
        
         if (this.CatForm.invalid) {  
                return;  
         }  
        this.CategoryService.postData(this.CatForm.value).subscribe((data: any[]) => {  
          this.data = data;  
          this.resetFrom();  
      
        })  
      }  
      Update() {   
        this.submitted = true;  
        
        if (this.CatForm.invalid) {  
         return;  
        }        
        this.CategoryService.putData(this.CatForm.value.CategoryID,this.CatForm.value).subscribe((data: any[]) => {  
          this.data = data;  
          this.resetFrom();  
        })  
      }  
      
      EditData(Data) {  
        this.CatForm.controls["CategoryID"].setValue(Data.CategoryID);  
        this.CatForm.controls["CategoryName"].setValue(Data.CategoryName);      
        this.CatForm.controls["Description"].setValue(Data.Description);  
        this.CatForm.controls["Picture"].setValue(Data.Picture);  
        this.EventValue = "Update";  
      }  
      
      resetFrom()  
      {     
        this.getdata();  
        this.CatForm.reset();  
        this.EventValue = "Save";  
        this.submitted = false;   
      }  
    }  

    
    // <!-- public int CategoryID { get; set; }
    // public string CategoryName { get; set; }
    // public string Description { get; set; }
    // public byte[] Picture { get; set; } -->
