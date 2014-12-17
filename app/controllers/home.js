(function(){
    
    // get a reference to our angular module
    angular
        .module('calculator')
        .controller('Home', Home);
        
        
    function Home(){
        var vm = this;
        
        //$scope.message = 'hi';  <-- don't use $scope when using 'controller as' syntax
        vm.message = 'Message from home controller';
        vm.firstNumber = 0;
        vm.secondNumber = 0;
        
        vm.result = 0;
        
        
        vm.addNumbers = function(){
            vm.result = vm.firstNumber - vm.secondNumber;
        };
        
        vm.clearAll = function(){
            vm.firstNumber = 0;
            vm.secondNumber = 0;
            vm.result = 0;
        };
    }
    
})();