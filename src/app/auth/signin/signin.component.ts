import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthService } from '../auth.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, ngAfterViewInit, ErrorStateMatcher {
 
  isBadCredentials: boolean = false;
  signupForm: FormGroup;
  signupFormErrors: any;  
  
  @ViewChild('userEmail') emailElement: ElementRef;
  @ViewChild('userPassword') passwordElement: ElementRef;

  constructor(
    private authService: AuthService,         
    private formBuilder: FormBuilder
) { }

  ngOnInit() {      
    this.signinForm = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required]]
    });
  }

  ngAfterViewInit(): void {
      setTimeout(()=> {
        this.emailElement.nativeElement.focus();
      }, 500);
  }

  onSubmit() {
    console.log(this.signinForm);
  }

}
