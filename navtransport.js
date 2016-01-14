var main = function() {

/* Slide out menu. Push the body and the nav over by 285px over */

  $('.menu-link').click(function(){
    
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);

  });


  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });

    $('#links').localScroll({
           target:'body'
        });

};

 $(document).ready(main);

var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http',  function($scope, $http) {

  // if($scope.newCity === undefined) {
  // $scope.newCity = "London"
  // };

  $scope.addCity = function ()  {
  $http.get("http://free.rome2rio.com/api/1.2/json/Search?key=isLifQOh&oName=" + $scope.newCity + "&dName=Colombo")
  .then(function (response) {$scope.names = response.data.airlines;})};

}]);

myApp.controller('firstController', function($scope, $http) {
  $http.get("http://free.rome2rio.com/api/1.2/json/Search?key=isLifQOh&oName=" + $scope.newCity + "&dName=Colombo")
  .then(function (response) {$scope.names = response.data.airlines;});
});

myApp.controller('secondController', function($scope, $http) {
  $http.get("http://free.rome2rio.com/api/1.2/json/Search?key=isLifQOh&oName=London&dName=Colombo")
  .then(function (response) {$scope.names = response.data.airports;});
});

myApp.controller('thirdController', function($scope, $http) {
  $http.get("http://free.rome2rio.com/api/1.2/json/Search?key=isLifQOh&oName=London&dName=Colombo")
  .then(function (response) {$scope.names = response.data.aircrafts;});
});

myApp.controller('fourthController', function($scope, $http) {
  $http.get("http://free.rome2rio.com/api/1.2/json/Search?key=isLifQOh&oName=London&dName=Colombo")
  .then(function (response) {$scope.names = response.data.aircrafts;});
});

myApp.controller('fifthController', function($scope, $http) {
  $http.get("http://free.rome2rio.com/api/1.2/json/Search?key=isLifQOh&oName=London&dName=Colombo")
  .then(function (response) {$scope.names = response.data.airlines;});
});


(function(angular) {
  'use strict';


myApp.controller('LangController', ['$scope', function($scope) {
   
    $scope.hello = 'AYUBOWAN',
    $scope.how = 'COHOMADA',
    $scope.food = 'KAMA',
    $scope.sleep = 'NEEDAGANDA',
    $scope.transportation = 'VAHANNA',
    $scope.money = 'SALLI',
    $scope.hospital = 'ROHALA',
    $scope.hotel = 'HOTALLAI',
    $scope.restaurant = 'APANA',
    $scope.airport = 'GUVAN TOTUPALA',
    $scope.name = 'Mage name...',
    $scope.bathroom = 'Nāna kāmaraya koheda',
    $scope.cost = 'Meka keyeda',
    $scope.taxi = 'Vahane cohade',
    $scope.distance = 'Kochara durada';
    

    $scope.sinhalaLang = function() {
    $scope.hello = 'AYUBOWAN',
    $scope.how = 'COHOMADA',
    $scope.food = 'KAMA',
    $scope.sleep = 'NEEDAGANDA',
    $scope.transportation = 'VAHANNA',
    $scope.money = 'SALLI',
    $scope.hospital = 'ROHALA',
    $scope.hotel = 'HOTALLAI',
    $scope.restaurant = 'APANA',
    $scope.airport = 'GUVAN TOTUPALA',
    $scope.name = 'Mage name...',
    $scope.bathroom = 'Nāna kāmaraya koheda',
    $scope.cost = 'Meka keyeda',
    $scope.taxi = 'Vahane cohade',
    $scope.distance = 'Kochara durada';
    };

    $scope.tamilLang = function() {
     $scope.hello = 'VENAKRAM',
     $scope.how = 'EPPATTI IRUKKIRIRKA',
     $scope.food = 'UNAVU',
     $scope.sleep = 'TUNKU',
     $scope.transportation = 'POKKUVARATTU',
     $scope.money = 'PANAM',
     $scope.hospital = 'MARATTUVAMANAIYIL',
     $scope.hotel = 'VITUTI',
     $scope.restaurant = 'UNAVAKAM',
     $scope.airport = 'VIMANA NALAIYA',
     $scope.name = 'En peyar...',
     $scope.bathroom = 'Ariku kuliyalarai ullatu',
     $scope.cost = 'Atu evvalavu celavu ceykiratu',
     $scope.taxi = 'Anku tākci ākiratu',
     $scope.distance = 'Atu evvalavu tūram';
    };

    $scope.arabicLang = function() {
     $scope.hello = 'MARHABAAN',
     $scope.how = 'KAYF HALIK',
     $scope.food = 'TAEAM',
     $scope.sleep = 'NAWM',
     $scope.transportation = 'WASAYIL ALNNAQL',
     $scope.money = 'MAL',
     $scope.hospital = 'MUSTASHFAA',
     $scope.hotel = 'ALFUNDUQ',
     $scope.restaurant = 'MATEAM',
     $scope.airport = 'MATAR',
     $scope.name = 'Asmi hu...',
     $scope.bathroom = 'Ayn alhamam',
     $scope.cost = 'Kam tukallif',
     $scope.taxi = 'Ayn hi sayarat ujra',
     $scope.distance = 'Iilaa ay madaa hu ealayh';
    };

}]);
})(window.angular);

//var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', function($scope) {
    $scope.count = 0;
    $scope.dcount = 0;
});

(function() {
// var app = angular.module('reviewSection', []);

  myApp.controller('StoreController', function() {
    this.products = gems;
  });

  myApp.controller("TabController", function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });

  

  myApp.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [{
      reviews: []
  }];
  
})();
