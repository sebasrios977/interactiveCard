import { Component, computed, inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.css']
})
export class ContinueComponent {

  public isOk = computed(() => this.dataService.isOkComputed());
  private dataService = inject(DataService);

  continue() {
    this.dataService.onSubmit(false);
    this.dataService.myForm.setValue({
      name: 'jane appleseed',
      cardNumber: '0000000000000000',
      month: '00',
      year: '00',
      cvc: '000'
    })
  }

}
