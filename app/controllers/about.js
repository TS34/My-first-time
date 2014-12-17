(function(){
    
    // get a reference to our angular module
    angular
        .module('calculator')
        .controller('About', About);
        
        
    function About(){
        var vm = this;
        
        //$scope.message = 'hi';  <-- don't use $scope when using 'controller as' syntax
        vm.message = 'Message from about controller';
    }
    
})();