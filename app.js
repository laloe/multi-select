function SelectCtrl() {
  var vm = this;
  initialData();

  function initialData(){
    vm.options = {
  	    searchPlaceHolder: 'Typing to filter.',
  	    labelAll: 'All Countries',
  	    labelSelected: 'Selected Countries',
  			labelShow:'name',
  	    orderProperty: 'name',
  	    items: [
  				{"name": "Afghanistan", "code": "AF"},
  				{"name": "Åland Islands", "code": "AX"},
  				{"name": "Albania", "code": "AL"},
  				{"name": "Algeria", "code": "DZ"},
  				{"name": "Martinique", "code": "MQ"},
  				{"name": "Mauritania", "code": "MR"},
  				{"name": "Mauritius", "code": "MU"},
  				{"name": "Mayotte", "code": "YT"},
  				{"name": "Uzbekistan", "code": "UZ"},
  				{"name": "Vanuatu", "code": "VU"},
  				{"name": "Venezuela", "code": "VE"},
  				{"name": "Viet Nam", "code": "VN"},
  				{"name": "Virgin Islands, British", "code": "VG"},
  				{"name": "Virgin Islands, U.S.", "code": "VI"},
  				{"name": "Wallis and Futuna", "code": "WF"},
  				{"name": "Western Sahara", "code": "EH"},
  				{"name": "Yemen", "code": "YE"},
  				{"name": "Zambia", "code": "ZM"},
  				{"name": "Zimbabwe", "code": "ZW"}
  			],
  	    selectedItems: []
  	};
    console.log(items);
  }
}

angular
  .module('app', [])
  .controller('SelectCtrl', SelectCtrl);
