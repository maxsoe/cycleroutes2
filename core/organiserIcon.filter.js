// Set specific icons for known groups
angular
  .module('organiserIconFtl', [])
  .filter('organiserIcon', function() {
    return function(input) {
      switch (input) {
        case 'altura':
          return ("altura")
          break;
        case 'brewin':
          return ("brewin")
          break;
        case 'ctc':
          return ("ctc")
          break;
        case 'noexcuses':
          return ("noexcuses")
          break;
        case 'roo':
          return ("roo")
          break;
        case 'sigma':
          return ("sigma")
          break;
        case 'ukce':
          return ("ukce")
          break;
        case 'wiggle':
          return ("wiggle")
          break;
        default:
          return ("friends")
      }
    };
  });
