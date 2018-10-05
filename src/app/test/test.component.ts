import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public title1 = 'Tour of Heroes1';
  public name1 = 'Sandra Alejo1';
  public isDisabled = false;
  public siteUrl = window.location.href;
  public hasError = true;
  public errorClass = "text-error"
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-error": this.hasError,
    "text-special": this.isSpecial
  }
  public clickMessage = '';

  constructor() { }

  onClickMe() {
    // alert("test");
    this.clickMessage = 'You are my hero!';
  }

  greetUser(){
    console.log("Hello " + this.name1);
    return "Hello " + this.name1;
  }

  ngOnInit() {
  }

}


