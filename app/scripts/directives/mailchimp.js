'use strict';

/**
 * @ngdoc function
 * @name templateApp.directive:swbMailchimp
 * @description
 * # MainCtrl
 * Directive of Mailchimp signup
 */

var app = angular.module('templateApp');

app.directive('swbMailchimp', ['$log', '$resource', function ($log, $resource) {
  return {
    scope: { swbData: '='},
    restrict: 'EA',
    templateUrl: 'views/templates/mailchimp.html',
    link: function ($scope, attrs, elem) {
      // Handle clicks on the form submission.

      $scope.log = function(m){ console.log(m) };
      $scope.swbData = {
        username : 'Koreaburn',
        dc : 'us10',
        u : '157485ecc5b1202668ec9ed40',
        id : '3cc1028527'
        };


      $scope.addSubscription = function (mailchimp) {
        var actions,
          MailChimpSubscription,
          params = {},
          url;

        // Create a resource for interacting with the MailChimp API
        url = '//' + mailchimp.username + '.' + mailchimp.dc +
        '.list-manage.com/subscribe/post-json';

        var fields = Object.keys(mailchimp);

        for (var i = 0; i < fields.length; i++) {
          console.log(fields);
          console.log(fields[i]);
          params[fields[i]] = mailchimp[fields[i]];
        }

        params.c = 'JSON_CALLBACK';

        actions = {
          'save': {
            method: 'jsonp'
          }
        };
        MailChimpSubscription = $resource(url, params, actions);

        // Send subscriber data to MailChimp
        MailChimpSubscription.save(
          // Successfully sent data to MailChimp.
          function (response) {
            // Define message containers.
            mailchimp.errorMessage = '';
            mailchimp.successMessage = '';

            // Store the result from MailChimp
            mailchimp.result = response.result;

            // Mailchimp returned an error.
            if (response.result === 'error') {
              if (response.msg) {
                // Remove error numbers, if any.
                var errorMessageParts = response.msg.split(' - ');
                if (errorMessageParts.length > 1)
                  errorMessageParts.shift(); // Remove the error number
                mailchimp.errorMessage = errorMessageParts.join(' ');
              } else {
                mailchimp.errorMessage = 'Sorry! An unknown error occured.';
              }
            }
            // MailChimp returns a success.
            else if (response.result === 'success') {
              mailchimp.successMessage = response.msg;
            }
          },

          // Error sending data to MailChimp
          function (error) {
            $log.error('MailChimp Error: %o', error);
          }
        );

      };
    }
  }
}]);