// Register `allRoutes` component, along with its associated controller and template
angular
  .module('allRoutes', [])
  .component('allRoutes', {
    // template: 'test template'
    templateUrl: 'all-routes/all-routes.template.html',
    css: 'all-routes/all-routes.css',
    controller: AllRoutesController,
    controllerAs: 'allRoutesCtrl'
  });

function AllRoutesController() {
  // allRoutesSvc.getPosts().then(response => {
  //   this.routes = response.data;
  // });

  this.oldRoutes = [{
      "athlete": {
        "id": 9149200,
        "username": "maxsoe",
        "resource_state": 2,
        "firstname": "Max",
        "lastname": "Soe",
        "city": "London",
        "state": "England",
        "country": "United Kingdom",
        "sex": null,
        "premium": true,
        "created_at": "2015-05-10T20:11:39Z",
        "updated_at": "2018-01-13T14:32:37Z",
        "badge_type_id": 1,
        "profile_medium": "https://dgalywyr863hv.cloudfront.net/pictures/athletes/9149200/3408429/4/medium.jpg",
        "profile": "https://dgalywyr863hv.cloudfront.net/pictures/athletes/9149200/3408429/4/large.jpg",
        "friend": null,
        "follower": null,
        "email": "maxsoe@gmail.com"
      },
      "description": "Revised from 100km down to 80km.\r\n\r\nOriginal ride is - Selling seashells on the seashore - 100km",
      "distance": 80583.2956344017,
      "elevation_gain": 642.8938747155211,
      "id": 11125007,
      "map": {
        "id": "r11125007",
        "summary_polyline": "uswzHqvzA`G}OtLiLjD]dE}JhAbB[_BrDcAfFkPfHuIjEm{@Ku`@dB}QzGyRdP{PpFcKcAym@uEuUxDk|@uAml@rJ{{@eEsu@j@aPdE_SlAcf@qCkZvIoZs@gKlFiUE{r@qAmV~Ai[]w^nCkV`Ko\\nA_M|GcLrD}B`HoQfDiOO_LbCeKjAcSfJuRzS_VgPkd@}H}KwIkW_GoAsb@lKuHoWkB{Tn@u_@kI{TtGs[_@q]~BsU}AwGqGcIuQ^sv@rS_CwIyB?gDmI{TkN_Q_V_FuBjDuUoEoRcJ{D_PoPuAqEJ_KzCuSuAaYcU_PsHuKcLkFkD_Qf@sQ_QyCb@wUcFgc@mKiF_AeTqMyOa@_RqJnC_B}T}Lwb@{Lmv@~Fk\\]qMsGu`@wDsf@jFqFsEei@TiSwAeLrB{YuJuI_AqIgHaCyEaLwM}CmDyY{GuYiFim@}Q~B_VsC{f@aOkNiJuOuh@lDkt@hCaNrBmZYca@iBsO}Lo\\wB_YqRwc@wGeZyW_b@gNug@sKsKcCwKsFsHsDqBmIn@_No`@qQay@mW_f@aEaEu]ZcLgJcAbV}HdMoLbKiJ|g@}Rtk@m@tHuF|LaBrZd@dR_AbGfAtj@hFxTeB`dBzAdNwBtLmEjJeAdLd]~^dIn@hEbOpK|ItHnU~DrAr@hl@rQsEpCtDhHvU|D|[iH|L}FnRxB~JzDlz@rFj@|Gx[zFfKbTtFcFvd@b^t^tIhDnKpUnO|t@fB~TvPh`@lClnA|NbXlBjKn`@d_ApY`b@vHhSrRdQ`DvJrAnNbU`IfEtIgCxJiA`c@xSh|BnT~u@tDlYl@pYdFbALrNzEzL~Dfd@jDjHhAjIVhQiCfK{KlKeElb@`JxAnDhkAoAjZvTtKwEjh@}J|WsGnJ`Hv]`BzTsLdHlN`vAdTp`BjcA|iElO|i@qBhHUtSdc@rz@bP`UbEmA_AxG`@jHfKnL|]t`Ad^nv@oHbPq@lHa@n`@tAjGlC~CYzA",
        "resource_state": 2
      },
      "name": "Selling seashells on the seashore (80km version)",
      "private": false,
      "resource_state": 2,
      "starred": false,
      "sub_type": 1,
      "timestamp": 1510092058,
      "created_at": "2017-11-07T22:00:58Z",
      "updated_at": "2017-11-08T11:51:59Z",
      "type": 1,
      "estimated_moving_time": 13815
    },
    {
      "athlete": {
        "id": 9149200,
        "username": "maxsoe",
        "resource_state": 2,
        "firstname": "Max",
        "lastname": "Soe",
        "city": "London",
        "state": "England",
        "country": "United Kingdom",
        "sex": null,
        "premium": true,
        "created_at": "2015-05-10T20:11:39Z",
        "updated_at": "2018-01-13T14:32:37Z",
        "badge_type_id": 1,
        "profile_medium": "https://dgalywyr863hv.cloudfront.net/pictures/athletes/9149200/3408429/4/medium.jpg",
        "profile": "https://dgalywyr863hv.cloudfront.net/pictures/athletes/9149200/3408429/4/large.jpg",
        "friend": null,
        "follower": null,
        "email": "maxsoe@gmail.com"
      },
      "description": "A longer ride through Kent to lunch at Rye Harbour\r\n\r\n#CTC",
      "distance": 79479.78901932108,
      "elevation_gain": 622.672495385436,
      "id": 11124942,
      "map": {
        "id": "r11124942",
        "summary_polyline": "_bb|H`nr@m@lI~GtLrPfj@kC`QvExD}BbJhExC`CpHpGdp@q@hs@wGlt@wKnWcHjCcb@ne@qeAvrAaOj_@qDjOaIbJSzKmJxK{CjIaLll@uAzT}FdUiDxH{JlH_DpHkIdJmOoBmYwe@oXaM{AoLcKJ}L~GqM}MqMud@_FiDcMmAyOuOuAtGaEwC}MyPq_@ur@{JyKqNoEiTxHa{@uLiDnQoOjDeFbXaPtj@}SjJoy@kN_PnMmJ[_L|LeIbL~Ila@j@~NzD~JgRrJuX|AibAjb@wOeE}HfV}E~]_\\zf@oG|PmcAtrAkPjZ}Lx]iLyB}O|^{JvJuKeRaSql@yJms@{CoKYyb@{QbBgQ}GkJh@yIg_AuUnQ}EaUm@uLgHbCoDar@iAq@mC_QzBu@_MefBoReO}KqCmKwO~FmErF{Y~AcUe@ic@rAqdA{EwB_Rn@mGsIuOo]uD}Om@yVcJQq@cKub@wAeAip@^kJdQe]~Fab@dJvBpAwAbE{VdVqt@hKsr@zLmd@dD}UhHaLZoG|CcEa@wEdKwc@|CcK~JkLrRce@lMsRhIe\\rIcq@zJuURsFrDyFFsyB`@ki@bBq[]s|@b[rBr^kIdPB^uHlOuCjD|@pGvJfDlAhR_El_@ik@dg@aZbNmOmAoObBcGn_@}UtHun@zObClRxMjINvQ}Itx@pVzpA`DlRjMlIxNdWdU~KsS~Id]d@~K~Fz^vBhGbEbArKzYnK|e@bg@bw@j[hWlLbWb@~FuAdCgNzJgNbSkQnh@n`@z`ArJf^dElFn]|HzH~OtH`JXqA{Fhf@bApL]`]jJzDlNvQtEvBlAxA_AbCTkDpBJb\\xKpBnCftAnKjW`Lzi@fb@tpBoVvBvCpKz^rMzSzCp]~DhHj@oI",
        "resource_state": 2
      },
      "name": "Longer and stronger with The Men of Kent",
      "private": false,
      "resource_state": 2,
      "starred": false,
      "sub_type": 1,
      "timestamp": 1510091468,
      "created_at": "2017-11-07T21:51:08Z",
      "updated_at": "2017-11-07T21:51:48Z",
      "type": 1,
      "estimated_moving_time": 13626
    }
  ];
};
