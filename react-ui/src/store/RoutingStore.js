import React from 'react';
import { extendObservable, action } from 'mobx';

import variable from './../global/Variable';

import Home from './../page/Home';
import Blog from './../page/Blog';
import Services from './../page/Services';
import Testimonial from './../page/Testimonial';
import Contact from './../page/Contact';

export const PAGEMAP = {

  HOME: {
    key: 'HOME',
    component: <Home />
  },

  BLOG: {
    key: 'BLOG',
    component: <Blog />
  },

  SERVICES: {
    key: 'SERVICES',
    component: <Services />
  },

  TESTIMONIALS: {
    key: 'TESTIMONIAL',
    component: <Testimonial />
  },

  CONTACT: {
    key: 'CONTACT',
    component: <Contact />

  }
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
            (Object.prototype.hasOwnProperty.call(PAGEMAP, pageKey))) {
          // set observable currentPageKey to requested page
          this.currentPageKey = pageKey;
          return;
        }
        throw new Error(!(Object.prototype.hasOwnProperty.call(PAGEMAP, pageKey)) ? 'pageKey not found in PAGEMAP' : 'pageKey arg != currentPageKey');
      })
    });
  }
}

const routingStore = new RoutingStore();
export default routingStore;
