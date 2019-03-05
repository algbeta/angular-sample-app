import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  isActive: boolean;
  constructor(private loadingService: LoadingService) {
    this.loadingService.status.subscribe((value) => {
      this.isActive = value;
    });
  }

  ngOnInit() {}
}
