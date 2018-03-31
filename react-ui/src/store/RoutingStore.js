import React from 'react'; // eslint-disable-line
import { extendObservable, action } from 'mobx';

import variable from './../global/Variable';

export const PAGE = {
  HOME: 'HOME',

  BLOG: 'BLOG',

  SERVICES: 'SERVICES',

  TESTIMONIALS: 'TESTIMONIALS',

  CONTACT: 'CONTACT'
};

class RoutingStore {
  constructor() {
    extendObservable(this, {
      currentPageKey: 'HOME',
      windowHeight: 0,
      windowWidth: 0,

      get isTablet() {
        return Boolean(this.windowWidth < variable.mediaBreakPoints.tablet);
      },
      get isMobileLarge() {
        return Boolean(this.windowWidth < variable.mediaBreakPoints.mobileLarge);
      },

      handleStateChange: action((property, value) => {
        this[property] = value;
      }),
      returnCurrentPageComponent: action((pageKey) => {
        if ((typeof pageKey === 'string') &&
            (Object.prototype.hasOwnProperty.call(PAGE, pageKey))) {
          // set observable currentPageKey to requested page
          this.currentPageKey = pageKey;
          return;
        }
        throw new Error(!(Object.prototype.hasOwnProperty.call(PAGE, pageKey)) ? 'pageKey not found in PAGE' : 'pageKey arg != currentPageKey');
      })
    });
  }
}

const routingStore = new RoutingStore();
export default routingStore;
