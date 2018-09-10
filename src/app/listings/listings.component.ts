import { Component, OnInit, ViewChild } from '@angular/core';
import { ListingsService } from '../services/listings.service';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  listings = [];
  listingForm: any;

  constructor(
    private listingsService: ListingsService, 
    private http: HttpClient,     
    private formBuilder: FormBuilder
  ) {}
  
  ngOnInit() {     
    this.listingForm = this.formBuilder.group({
      listingName: ['', [Validators.required]],
      listingDescription: [''],
      tags: new FormArray([])

    });
    
    this.listingsService.getListings()
      .subscribe(
        (listings: any[]) => this.listings = listings
      )  
  }

  onSubmit(){
    console.log(this.listingForm);
  }

  onAddTags() {
    const control = new FormControl(null, Validators.required);

    (<FormArray>this.listingForm.get('tags')).push(control);
  }
}
