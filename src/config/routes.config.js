define(function() {
    return function ($stateProvider, $urlRouterProvider, $requireProvider){
        $urlRouterProvider.otherwise("/");

        $stateProvider
            //首页
            .state('index', {
                url: '/',
                cache:'false',
                templateUrl: 'views/index/index.html',
                controller: 'indexController',
                resolve:{
                    deps:$requireProvider.requireJS(['views/index/index'])
                }
            })

            //notification插件demo链接
            .state('notification', {
                url: '/notification',
                cache:'false',
                templateUrl: 'views/notification/notification.html',
                controller: 'notificationController',
                resolve:{
                    deps:$requireProvider.requireJS(['views/notification/notification'])
                }
            })

            //form表单
            .state('form', {
                url: '/form',
                cache:'false',
                templateUrl: 'views/forms/forms.html',
                controller: 'formCtrl',
                resolve:{
                    deps:$requireProvider.requireJS(['views/forms/forms'])
                }
            })
    };
});