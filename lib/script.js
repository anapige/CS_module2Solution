import angular from 'angular';

(function () {
  'use strict';

  angular
    .module('checkoff', [])
    .controller('tobuyController', tobuyController)
    .controller('alreadyboughtController', alreadyboughtController)
    .service('checkService', checkService);

  tobuyController.$inject = ['checkService'];
  function tobuyController(checkService) {
    
    var tobuyList = this;

    tobuyList.items = checkService.getItemstobuy();

    tobuyList.buyItem = function (itemIndex) {
      checkService.moveItem(itemIndex);
    };
  }

  alreadyboughtController.$inject = ['checkService'];
  function alreadyboughtController(checkService) {
    var boughtlist = this;

    boughtlist.items = checkService.getItemsbought();
  }

  function checkService() {
    var service = this;

    var itemstobuy = [
      {
        name: 'itemName1',
        quantity: 'quantity1'
      },
      {
        name: 'itemName2',
        quantity: 'quantity2'
      },
      {
        name: 'itemName3',
        quantity: 'quantity3'
      },
      {
        name: 'itemName4',
        quantity: 'quantity4'
      }
    ];

    var itemsbought = [];

    service.moveItem = function (itemIndex) {
      itemsbought.push(itemstobuy[itemIndex]);
      itemstobuy.splice(itemIndex, 1);
    };

    service.getItemstobuy = function () {
      return itemstobuy;
    };

    service.getItemsbought = function () {
      return itemsbought;
    };
  }
})();
