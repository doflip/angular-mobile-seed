'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my mobile app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


//  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
//    expect(browser().location().url()).toBe("/view1");
//  });

  it('should show / since there is router and content', function(){
    expect(browser().location().url()).toBe("/");
  }); 


  describe('view1', function() {

    beforeEach(function() {
      browser().navigateTo('#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element('[ng-view] h1:.title').text()).
        toMatch(/View1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser().navigateTo('#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element('[ng-view] h1:.title').text()).
        toMatch(/View2/);
    });

  });
});
