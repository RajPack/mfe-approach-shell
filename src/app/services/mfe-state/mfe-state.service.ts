import { Injectable } from '@angular/core';

/**
 * @description: a simple service that holds all  necessary state to boot up a micro front end
 */
@Injectable({
  providedIn: 'root',
})
export class MfeStateService {
  public mfeState: Record<string,  Record<string, unknown>> = {};
  constructor() {}

  setState(mfe: string, state: Record<string, unknown>, merge = false) {
    const currentMFEState = this.mfeState[mfe] ?? {}
    const newMFEState = merge ? {...currentMFEState, ...state} : state
    this.mfeState[mfe] = newMFEState
  }

  getState(mfe: string) {
    return this.mfeState[mfe]
  }
}
