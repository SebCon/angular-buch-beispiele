import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-binding-listener',
  templateUrl: './host-binding-listener.component.html',
  styleUrls: ['./host-binding-listener.component.css']
})
export class HostBindingListenerComponent implements OnInit {
  public imageSrc: string;

  constructor() { }

  ngOnInit() {
  }

}
