import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mfeConfig } from 'src/app/external-mfes';
import { loadScript } from 'src/script-loader';

@Component({
  selector: 'app-pdp-mfe-container',
  templateUrl: './pdp-mfe-container.component.html',
  styleUrls: ['./pdp-mfe-container.component.scss'],
})
export class ExternalPdpMfeContainerComponent implements OnInit {
  public routePath: string = '';
  public mfeState: Record<string, unknown> = {};
  constructor(public activatedRoute: ActivatedRoute) {
    console.log('external pdp mfe init -- from shell');
    this.loadMfe();
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url) => {
      this.routePath = url[0].path;
      console.log(this.routePath);
    });
    this.activatedRoute.data.subscribe((data: Record<string, any>) => {
      this.mfeState = data['state'];
    });
  }

  loadMfe() {
    loadScript(mfeConfig['pdp-element'].url).subscribe();
  }

  updateState(e: any) {
    console.log(e.detail);
  }
}
