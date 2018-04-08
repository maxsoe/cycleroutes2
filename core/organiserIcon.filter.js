// Set specific icons for known groups
angular
  .module('organiserIconFtl', [])
  .filter('organiserIcon', function() {
    return function(input) {
      if (input == "altura" ||
        input == "bigfoot" ||
        input == "brewin" ||
        input == "ctc" ||
        input == "dulux" ||
        input == "noexcuses" ||
        input == "oth" ||
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
