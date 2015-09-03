'use strict';

angular.module('core').controller('DashboardSidebarController', ['$scope', 'Authentication',
    function($scope, Authentication) {
        // This provides Authentication context.
        $scope.authentication = Authentication;

        $scope.displayName = $scope.authentication.user.displayName;

        $scope.selectedTemplate = {
            'path':'modules/core/views/client.dashboard.view.html'
        };
    }
]);