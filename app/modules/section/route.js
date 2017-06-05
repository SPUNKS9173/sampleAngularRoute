'use strict';

angular
    .module('testApp').config( function($routeProvider) {
        $routeProvider
            .when('/section', {
                templateUrl: 'modules/section/section.html',
                controller: 'SectionController',
                controllerAs: 'sectionCtrl',
            });
    } );