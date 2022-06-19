import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
import { MfeStateService } from './services/mfe-state/mfe-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';
  constructor(public activatedRoute: ActivatedRoute, public mfeStateService: MfeStateService) {}

  ngOnInit() {
    console.log('shell init')
    this.setPdpState()
    fromEvent(window, 'pdpStateUpdate').subscribe((e) => this.onStateUpdate(e))
  }

  setPdpState() {
    this.mfeStateService.setState('pdp', {data: 'a message from shell to pdp'})
  }

  onStateUpdate(e: any) {
    console.log('state updated', e.detail)
    this.mfeStateService.setState('pdp', e.detail, true)
  } 
}
