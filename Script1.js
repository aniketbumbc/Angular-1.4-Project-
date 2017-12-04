/// <reference path="angular.min.js" />
var app = angular.module("App1", ['ngRoute'])
   .config(function ($routeProvider, $locationProvider) {

       $routeProvider
    .when("/Home",
    {
        templateUrl: "Pages/Home.html",
        controller: "homecontroller"
    })

        .when("/Search",
        {
            templateUrl: "Pages/Search.html",
            controller: "searchcontroller"
        })


            .when("/Inquiry",
            {

                templateUrl: "Pages/Inquiry.html",
                controller: "inqcontroller"
            })

    .when("/Contact",
    {

        templateUrl: "Pages/Contact.html",
        controller: "concontroller"

    })

           .when("/Novels",
        {
            templateUrl: "Pages/Book.html",
            controller: "datacontroller"
        })


       .when("/Feedback",
    {
        templateUrl: "Pages/Feedback.html",
        controller: "feedbackcontroller"
    })




       .otherwise(
       {
           redirectTo: "/Home"


       })








       $locationProvider.html5Mode(true);
   })






    .controller("homecontroller", function ($scope) {

        $scope.message = "Welcome to Library";

    })









     .controller("searchcontroller", function ($scope) {
         $scope.image1 = false;
         $scope.searchinfo = "Upcoming Books";
         $scope.book = ["Visual C#", "Java Gaming", ".NET Programming", "Angular JS"]
         $scope.image = "Image/Final pic.png"
         $scope.abc = "Details and Comments"
         $scope.csharp = " 1) Microsoft Visual C# 2005 step by step:-By John Sharp Expand your expertise and Teach yourself the fundamentals of Microsoft Visual C# 2013."
         $scope.javagame = "2) Advanced Java Game Programming David Wallace Croft April 1, 2004 Advanced Java Game Programming teaches you how to create desktop."
         $scope.dotnet = "3)Alex Mackey is an experienced ASP.NET/SQL Server consultant who has been working with .NET."
         $scope.angularjs1 = "4) Beginning AngularJS Andrew Grant Beginning AngularJS is your step-by-step guide to learning the powerful AngularJS JavaScript framework. "

         $scope.image1 = false;
         $scope.myfunction = function () {
             $scope.image1 = true;
         };


     })








 .controller("inqcontroller", function ($scope) {

     var booksinfo = [

         { name: "java development", DateOFPublish: new Date("November 23,1990"), editon: "frist", price: 200 },
        { name: "java development", DateOFPublish: new Date("November 23,1990"), editon: "frist", price: 200 },
     { name: "java development", DateOFPublish: new Date("November 23,1990"), editon: "frist", price: 200 },


 { name: "development", DateOFPublish: new Date("November 23,1990"), editon: "frist", price: 200 },
 { name: "java development", DateOFPublish: new Date("November 23,1990"), editon: "frist", price: 200 },
 { name: "java development", DateOFPublish: new Date("November 23,1990"), editon: "frist", price: 200 },
{ name: " development", DateOFPublish: new Date("November 23,1990"), editon: "frist", price: 200 },
{ name: "va development", DateOFPublish: new Date("November 23,1990"), editon: "frist", price: 200 },
{ name: "Zerox", DateOFPublish: new Date("November 23,1990"), editon: "frist", price: 200 }
     ];

     $scope.inquiryinfo = "Books Table";
     $scope.booksinfo = booksinfo;
 })







 .controller("concontroller", function ($scope) {

     $scope.conatctinfo = "Contact Us";

 })







  .controller("feedbackcontroller", function ($scope) {

      $scope.Fbinfo = "Please Feedback";

      var feedback =
                  {
                      mychanell: "",
                      firstname: "",
                      lastname: "",
                      email: ""
                  };
      $scope.sendFeedback = function () {

          console.log($scope.feedback);
          console.log($scope.feedback);
          if ($scope.feedback.agree && ($scope.feedback.mychannel == "") && !$scope.feedback.mychannel) {
              $scope.invalidChannelSelection = true;
              console.log('incorrect');
          }
          else {
              $scope.invalidChannelSelection = false;

              $scope.feedback = {
                  mychannel: "", firstName: "", lastName: "",
                  agree: false, email: ""
              };
              $scope.feedback.mychannel = "";

              $scope.feedbackForm.$setPristine();
              console.log($scope.feedback);
          }
      };

  })


 .controller("datacontroller", function ($scope, $http) {

     $scope.message = "Welcome to Database Page";
     $http.get("BookService/getbook")
     .then(function (respones)
     
     {
         $scope.book = respones.Data;
     }
     
     ) 

 });