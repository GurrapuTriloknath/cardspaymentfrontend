import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoustomerdetailsService } from '../coustomerdetails.service';

@Component({
  selector: 'app-coustomerdetails',
  templateUrl: './coustomerdetails.component.html',
  styleUrls: ['./coustomerdetails.component.scss']
})
export class CoustomerdetailsComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    phonenumber: new FormControl(''),
  });

  constructor(private coustomerdetailsService: CoustomerdetailsService,public router:Router ,private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],

        age: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        address: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],

        phonenumber: ['', [Validators.required]],
      },
    );
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
console.log(this.form.value);

    this.coustomerdetailsService.coustomer(this.form.value).subscribe(
      () => {

      },
      
    );
  }
}
