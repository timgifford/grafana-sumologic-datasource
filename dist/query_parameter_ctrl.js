'use strict';

System.register(['angular', 'lodash'], function (_export, _context) {
  "use strict";

  var angular, _;

  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }, function (_lodash) {
      _ = _lodash.default;
    }],
    execute: function () {

      angular.module('grafana.directives').directive('sumologicQueryParameter', function () {
        return {
          templateUrl: 'public/plugins/mtanda-sumologic-datasource/partials/query.parameter.html',
          controller: 'SumologicQueryParameterCtrl',
          restrict: 'E',
          scope: {
            target: "=",
            datasource: "=",
            panelType: "=",
            isLastQuery: "=",
            onChange: "&"
          }
        };
      });

      angular.module('grafana.controllers').controller('SumologicQueryParameterCtrl', function ($scope) {
        $scope.init = function () {
          var target = $scope.target;
          target.query = target.query || '';
          target.aliasFormat = target.aliasFormat || '';
          target.format = target.format || $scope.getDefaultFormat();

          this.formats = [{ text: 'Time series', value: 'time_series' }, { text: 'Records', value: 'records' }, { text: 'Messages', value: 'messages' }];

          if (!$scope.onChange) {
            $scope.onChange = function () {};
          }
        };

        $scope.getDefaultFormat = function () {
          if (this.panelType === 'table') {
            return 'records';
          }
          return 'time_series';
        };

        $scope.init();
      });
    }
  };
});
//# sourceMappingURL=query_parameter_ctrl.js.map
