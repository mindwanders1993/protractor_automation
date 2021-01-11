describe('lighthouse demo tests', function(){

    it('login test', function(){
       
        browser.get('http://lahi.lighthouse.net.in/');

        let ele_user = element(by.name('userId'));
        ele_user.sendKeys('biswajit.brahmma@lend-a-hand-india.org');

        let ele2 = element(by.name('password'));
        ele2.sendKeys('Pass$123');


        let ele_login = element(by.buttonText('LOGIN'));
        ele_login.click();

        let ele_menu = element(by.buttonText('menu'));
        ele_menu.click();


        

    //    let result = element(by.cssContainingText('.ng-binding', '5'));
       
    //    expect(result.getText()).toEqual('5');
       
       browser.sleep(20000)
       

    });
});