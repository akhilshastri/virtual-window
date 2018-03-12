/**
 *  load default container setings
 * */
$(()=>{

    $('#load-container').click(function(){
        var $div = $('#container');
        console.log($div);
        $div.show();
    });
    
    $('#close-container').click(function(){
        var $div = $('#container');
        $div.hide();
    });


    window.global = 'myApp';

    const angular14App = `(function(window,angular) {
                            window.global = 'angular14App';
                            console.log(angular.version);
                       })(window,angular);` ;

    const angular20App = `(function(window,angular) {
                            window.global = 'angular20App';
                            console.log(angular.version);
                            
                       })(window,angular);` ;

    const angular14Context = new Function('window','angular', angular14App);
    const angular20Context = new Function('window','angular', angular20App);

    angular14Context(Object.assign({},window,{version:1.4}));
    angular20Context(Object.assign({},window,{version:20}));


    console.log('angular version', angular.version);
    console.log('jQuery version',$.fn.jquery);

    $.getScript('/lib/1.4/angular.js',()=>{
            console.log('angular loaded');
    })

});