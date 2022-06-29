import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image/image.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  buttonLoading: boolean = false;

  constructor(private image: ImageService) {}

  ngOnInit(): void {}

  onClick() {
    this.image.search(['waterfall', 'people']).subscribe((data) => {
      console.log(data);
      this.buttonLoading = false;
    });
    this.buttonLoading = true;
  }
}
