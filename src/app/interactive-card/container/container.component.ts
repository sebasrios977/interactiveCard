import { Component, computed, inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  public isOk = computed(() => this.dataService.isOkComputed());
  private dataService = inject(DataService);
}
