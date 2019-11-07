import { Component, OnInit } from '@angular/core';
import { Mock } from '../data/mock';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-mock',
  templateUrl: './create-mock.component.html',
  styleUrls: ['./create-mock.component.css']
})
export class CreateMockComponent implements OnInit {
  public mock = new Mock();
  constructor(private router: Router) { }

  ngOnInit() {
  }

submitMock(mock) {

}

cancel() {
  this.router.navigate(['/mocks']);
}

}
