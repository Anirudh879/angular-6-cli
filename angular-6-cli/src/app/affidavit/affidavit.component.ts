import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({templateUrl: 'affidavit.component.html'})
export class AffidavitComponent implements OnInit {
  affidavitForm: FormGroup;
  loading = false;
  submitted = false;
  citys = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.affidavitForm = this.formBuilder.group({
          fName : ['',[ Validators.required,
                        Validators.minLength(2)]],
          mName : ['',[ Validators.required,
                        Validators.minLength(2)]],
          lName : ['',[ Validators.required,
                        Validators.minLength(2)]],
          DOB : [''],
          email : ['',[ Validators.required,
                        Validators.pattern('[a-zA-Z ]*')]],
          password : ['',[Validators.required,
                          Validators.minLength(6)]],
          address : ['',[Validators.required,
                        Validators.minLength(6)]],
          city : ['',[Validators.required]],
          country : ['',[Validators.required]],
          postCode : ['',[Validators.required]],
          gender : ['',[Validators.required]]
    });
  }

   // convenience getter for easy access to form fields
   get f() { return this.affidavitForm.controls; }

   onSubmit() {
    this.submitted = true;

    if (this.affidavitForm.invalid) {
      return;
    }
      console.log(this.affidavitForm.value);
   }

}
