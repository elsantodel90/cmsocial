'use strict';

/* Tasks page */

angular.module('cmsocial')
    .controller('TaskUserSubmissionsCtrl', function($scope, $http, $stateParams, notificationHub, l10n, API_PREFIX) {
    
        $scope.taskName = $stateParams.taskName;
        $scope.userId = $stateParams.userId;
        
        var extendSub = function(sub) {
            sub.cl = 'empty';
            var date = new Date(sub.timestamp * 1000);
            sub.time = date.toLocaleString();
            if (sub.compilation_outcome == null) {
              sub.status = l10n.get('Compiling...');
            } else if (sub.compilation_outcome == 'fail') {
              sub.cl = 'wrong';
              sub.status = l10n.get('Compilation failed');
            } else if (sub.evaluation_outcome == null) {
              sub.status = l10n.get('Evaluating...');
            } else if (sub.evaluation_outcome == 'fail') { // ???
              sub.cl = 'wrong';
              sub.status = l10n.get('Evaluation failed');
            } else if (sub.score == null) {
              sub.status = l10n.get('Scoring...');
            } else {
              var score = sub.score;
              if (100 - score < 0.01)
                sub.cl = 'correct';
              else if (score < 0.01)
                sub.cl = 'wrong';
              else
                sub.cl = 'partial';
              sub.status = score + ' / 100';
            }
            return sub;
        };
        
        $http.post(API_PREFIX + 'submission', {
           'action': 'list',
           'task_name': $scope.taskName,
           'username' : $scope.userId
        })
        .success(function(data, status, headers, config) {
           $scope.userSubmissions = [];
           for (var i = data['submissions'].length; i > 0; i--)
              $scope.userSubmissions.unshift(extendSub(data['submissions'][i - 1]));
        })
        .error(function(data, status, headers, config) {
              notificationHub.serverError(status);
        });
        
        // Cambiar! Nada de usar las de rootscope, tenemos que pedir nuestra propia data
        $scope.areThereSubs = function(name) {
          return $scope.userSubmissions !== undefined && $scope.userSubmissions.length > 0;
        };
        
    
    
    });
