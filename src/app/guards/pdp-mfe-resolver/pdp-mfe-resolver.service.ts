import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { MfeStateService } from 'src/app/services/mfe-state/mfe-state.service';

@Injectable({
  providedIn: 'root',
})
export class PdpMfeResolverService implements Resolve<Record<string, unknown>> {
  constructor(private mfeStateService: MfeStateService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Record<string, unknown> {
    return this.mfeStateService.getState('pdp');
  }
}
