define(function() {
    return {
        baseUrl: './',
        paths: {
            // configs
            'routes': 'config/routes.config',

            // some main framework files
            'rev-manifest': 'dist/js/rev-manifest',
            'angular': 'public/angular/angular.min',
            'angular-cookies': 'public/angular-cookies/angular-cookies.min',
            'angular-require': 'public/angular-require/angular-require.min',
            'angular-sanitize': 'public/angular-sanitize/angular-sanitize.min',
            'angular-translate': 'public/angular-translate/angular-translate.min',
            'angular-ui-router': 'public/angular-ui-router/release/angular-ui-router.min',

            'angular-ui-notification': 'public/angular-ui-notification/dist/angular-ui-notification',

            'css': 'public/require-css/css.min',

            // enter file
            'app': 'app',
            'header': 'views/header/header',
            'footer': 'views/footer/footer'
        },
        waitSeconds:0,
        shim: {
            'angular': {
                deps: ['rev-manifest'],
                exports: 'angular'
            },
            'angular-cookies': {
                deps: ['angular'],
                exports: 'angular-cookies'
            },
            'angular-require': {
                deps: ['angular'],
                exports: 'angular-require'
            },
            'angular-sanitize': {
                deps: ['angular'],
                exports: 'angular-sanitize'
            },
            'angular-translate': {
                deps: ['angular'],
                exports: 'angular-translate'
            },
            'angular-ui-router': {
                deps: ['angular'],
                exports: 'angular-ui-router'
            },
            'angular-ui-notification': {
                deps: ['angular', 'css!public/angular-ui-notification/dist/angular-ui-notification.min.css'],
                exports: 'angular-ui-notification'
            },
            'app': {
                deps: [
                    'angular',
                    'angular-ui-router','angular-cookies','angular-require','angular-translate','angular-sanitize', 'angular-ui-notification'
                ],
                exports: 'app'
            },
            'header': {
                deps: ['app'],
                exports: 'header'
            },
            'footer': {
                deps: ['app'],
                exports: 'footer'
            }
        }
    };
});