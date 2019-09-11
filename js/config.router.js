'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {
          
          $urlRouterProvider
              .otherwise('/app/table/home');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'tpl/app.html'
              })
              
              // table
              .state('app.table', {
                  url: '/table',
                  template: '<div ui-view></div>'
              })
              .state('app.table.home', {
                  url: '/home',
                  templateUrl: 'tpl/home.html'
                 
              })
              .state('app.table.static', {
                  url: '/static',
                  templateUrl: 'tpl/table_static.html'
              })
              .state('app.table.datatable', {
                  url: '/datatable',
                  templateUrl: 'tpl/table_datatable.html'
              })
              .state('app.table.footable', {
                  url: '/footable',
                  templateUrl: 'tpl/table_footable.html'
              })
              .state('app.table.canshu', {
                  url: '/canshu',
                  templateUrl: 'tpl/table_canshu.html'
              })
              .state('app.table.sys', {
                  url: '/sys',
                  templateUrl: 'tpl/table_sys.html'
              })


              .state('app.table.data', {
                  url: '/data',
                  templateUrl: 'tpl/table_data.html'
              })
               .state('app.table.role', {
                  url: '/role',
                  templateUrl: 'tpl/table_role.html',
                  
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/roleController.js']);
                    }]
                  }
              })
                .state('app.table.tree', {
                  url: '/tree',
                  templateUrl: 'tpl/table_tree.html'
              })
                .state('app.table.user', {
                  url: '/user',
                  templateUrl: 'tpl/table_user.html'
              })
              //     .state('app.table_tab', {
              //     url: '/tab',
              //     templateUrl: 'tpl/table_tab.html'
              // })

                .state('app.new_plan', {
                  url: '/newplan',
                  templateUrl: 'tpl/new_plan.html'
              })
              //   .state('app.fault', {
              //     url: '/fault',
              //     templateUrl: 'tpl/fault.html'
              // })
                .state('app.table_23g', {
                  url: '/table_23g',
                  templateUrl: 'tpl/table_23g.html'
              })
                .state('app.table_4g', {
                  url: '/table_4g',
                  templateUrl: 'tpl/table_4g.html'
              })
                .state('app.4gdata', {
                  url: '/4gdata',
                  templateUrl: 'tpl/4gdata.html'
              })
                .state('app.4gdata2', {
                  url: '/4gdata2',
                  templateUrl: 'tpl/4gdata2.html'
              })
                 .state('app.zhandian_shuliang', {
                  url: '/zhandian_shuliang',
                  templateUrl: 'tpl/zhandian_shuliang.html'
              })
                 .state('app.zhandian_qijian', {
                  url: '/zhandian_qijian',
                  templateUrl: 'tpl/zhandian_qijian.html'
                  
              })
                 .state('app.zhandian_cailiao', {
                  url: '/zhandian_cailiao',
                  templateUrl: 'tpl/zhandian_cailiao.html'
                  
              })
                 .state('app.table_zb', {
                  url: '/table_zb',
                  templateUrl: 'tpl/table_zb.html'
                  
              })

              
              .state('signin', {
                  url: '/signin',
                  templateUrl: 'tpl/page_signin.html'
              })
              //    .state('app.weiguan_sb', {
              //     url: '/weiguan_sb',
              //     templateUrl: 'tpl/weiguansb.html'
                  
              // })
                
               /* .state('app.heat_map', {
                  url: '/heat',
                  templateUrl: 'tpl/heat_map.html',
                  resolve: {
                  deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/heatctrl.js']);
                    }]
                    }
              })*/
                .state('app.heat_map', {
                  url: '/heat',
                  templateUrl: 'tpl/heat_map.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/heatctrl.js']);
                    }]
                  }
              })

                .state('app.fault', {
                  url: '/fault',
                  templateUrl: 'tpl/fault.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/fault.js']);
                    }]
                  }
              })

                .state('app.cover_map', {
                  url: '/cover',
                  templateUrl: 'tpl/cover_map.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/coverctrl.js']);
                    }]
                  }
              })
                .state('app.data_manage', {
                  url: '/dataman',
                  templateUrl: 'tpl/data_manage.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/dataman.js']);
                    }]
                  }
              })

                .state('app.table_tab', {
                  url: '/tab',
                  templateUrl: 'tpl/table_tab.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/bootstrap.js']);
                    }]
                  }
              })
              //   .state('app.qswlzl', {
              //     url: '/qswlzl',
              //     templateUrl: 'tpl/qswlzl.html',
              //     resolve: {
              //       deps: ['$ocLazyLoad',
              //         function( $ocLazyLoad ){
              //           return $ocLazyLoad.load(['js/controllers/grid.js']);
              //       }]
              //     }
              // })
                .state('app.guihua_design', {
                  url: '/guihua',
                  templateUrl: 'tpl/guihua_design.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/guihuactrl.js']);
                    }]
                  }
              })

                .state('app.qswlzl', {
                  url: '/qswlzl',
                  templateUrl: 'tpl/qswlzl.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('ngGrid').then(
                              function(){
                                  return $ocLazyLoad.load('js/controllers/grid.js');
                              }
                          );
                      }]
                  }
              })

                .state('app.hongguan_ping', {
                  url: '/hongguan_ping',
                  templateUrl: 'tpl/hongguan.html'
                  
              })
                .state('app.weiguan_sb', {
                  url: '/weiguan_sb',
                  templateUrl: 'tpl/weiguansb.html'
                  
              })

      }
    ]
  );