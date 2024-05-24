import Route from '@ember/routing/route';
import { service } from '@ember/service';

import { getRequestState, Request } from '@warp-drive/ember';

import { mock, MockServerHandler } from '@warp-drive/holodeck';
//import type { CacheHandler, Future, NextFn, RequestContext, StructuredDataDocument } from '@ember-data/request';
import RequestManager from '@ember-data/request';
import Fetch from '@ember-data/request/fetch';
//import type Store from '@ember-data/store';

export default class Application extends Route {
  @service store;

  async beforeModel() {
    const manager = new RequestManager();
    manager.use([new MockServerHandler(this), Fetch]);

    // We should get to a runtime error here, because hello isn't an URL, and nothing is bocking a response to return something
    return manager.request({ url: 'hello', method: 'GET' });
  }
}
