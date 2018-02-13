import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

@Injectable()
export class MovieResolver implements Resolve<Promise<string>> {
  constructor() {}

  resolve() {
    return;
  }
}
