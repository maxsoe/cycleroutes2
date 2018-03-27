// Set specific icons for known groups
angular
  .module('organiserIconFtl', [])
  .filter('organiserIcon', function() {
    return function(input) {
      if (input == "altura" ||
        input == "brewin" ||
        input == "ctc" ||
        input == "noexcuses" ||
        input == "roo" ||
        input == "sigma" ||
        input == "ukce" ||
        input == "wiggle") {
        return input;
      } else {
        return "friends";
      }
    };

  });
