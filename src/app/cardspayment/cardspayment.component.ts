import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardspaymentService } from '../cardspayment.service';


@Component({
  selector: 'app-cardspayment',
  templateUrl: './cardspayment.component.html',
  styleUrls: ['./cardspayment.component.scss']
})
export class CardspaymentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}