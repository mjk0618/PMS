(function() {
    'use strict';

    angular
        .module('pms')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();
