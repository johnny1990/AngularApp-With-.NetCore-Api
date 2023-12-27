import { Component } from '@angular/core';
import { SupplierService } from '../services/SupplierService';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-supplier-component',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {
  title = 'SupplierComponent';

  constructor(private SupplierService: SupplierService) { }
  data: any;
  SupForm!: FormGroup;
  submitted = false;
  EventValue: any = "Save";

  ngOnInit(): void {
    this.getdata();

    this.SupForm = new FormGroup({
      SupplierID: new FormControl(null),
      CompanyName: new FormControl("", [Validators.required]),
      ContactName: new FormControl("", [Validators.required]),
      ContactTitle: new FormControl("", [Validators.required]),
      Address: new FormControl("", [Validators.required]),
      City: new FormControl("", [Validators.required]),
      Region: new FormControl("", [Validators.required]),
      PostalCode: new FormControl("", [Validators.required]),
      Country: new FormControl("", [Validators.required]),
      Phone: new FormControl("", [Validators.required]),
      Fax: new FormControl("", [Validators.required]),
      HomePage: new FormControl("", [Validators.required]),
    })
  }
  getdata() {
    this.SupplierService.getData().subscribe((data) => {
      this.data = data;
    })
  }
  deleteData(id: any) {
    this.SupplierService.deleteData(id).subscribe((data) => {
      this.data = data;
      this.getdata();
    })
  }
  Save() {
    this.submitted = true;

    if (this.SupForm.invalid) {
      return;
    }
    this.SupplierService.postData(this.SupForm.value).subscribe((data) => {
      this.data = data;
      this.resetFrom();

    })
  }
  Update() {
    this.submitted = true;

    if (this.SupForm.invalid) {
      return;
    }
    this.SupplierService.putData(this.SupForm.value.CategoryID, this.SupForm.value).subscribe((data) => {
      this.data = data;
      this.resetFrom();
    })
  }

  EditData(Data: {
    SupplierID: any; CompanyName: any; ContactName: any; ContactTitle: any; Address: any;
City: any; Region: any; PostalCode: any; Country: any; Phone: any; Fax: any; HomePage: any;
  }) {

    this.SupForm.controls["SupplierID"].setValue(Data.SupplierID);
    this.SupForm.controls["CompanyName"].setValue(Data.CompanyName);
    this.SupForm.controls["CompanyName"].setValue(Data.CompanyName);
    this.SupForm.controls["ContactName"].setValue(Data.ContactName);
    this.SupForm.controls["ContactTitle"].setValue(Data.ContactTitle);
    this.SupForm.controls["Address"].setValue(Data.Address);
    this.SupForm.controls["City"].setValue(Data.City);
    this.SupForm.controls["Region"].setValue(Data.Region);
    this.SupForm.controls["PostalCode"].setValue(Data.PostalCode);
    this.SupForm.controls["Country"].setValue(Data.Country);
    this.SupForm.controls["Phone"].setValue(Data.Phone);
    this.SupForm.controls["Fax"].setValue(Data.Fax);
    this.SupForm.controls["HomePage"].setValue(Data.HomePage);
    this.EventValue = "Update";
  }

  resetFrom() {
    this.getdata();
    this.SupForm.reset();
    this.EventValue = "Save";
    this.submitted = false;
  }
}  

