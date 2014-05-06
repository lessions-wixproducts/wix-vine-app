'use strict';

describe('Controller: PopularCtrl', function () {

  // load the controller's module
  beforeEach(module('vineApp'));

  var PopularCtrl,
    scope,
    popular,
    dataService,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, Popular, DataService) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    dataService = DataService;
    PopularCtrl = $controller('PopularCtrl', {
      $scope: scope,
      popular: Popular,
      dataService: DataService
    });
  }));

  it('should get popular videos', function () {
    var videos = [{"videoUrl":"http://mtc.cdn.vine.co/r/videos/FA9B2D6BD81075522829040353280_165d9937a74.3.2.mp4?versionId=6hVXPzr2.ALi7Tfr1MqEHCjPYlWPo72Z","shareUrl":"https://vine.co/v/M66K7QviQMK/embed/postcard","id":"M66K7QviQMK","avatarUrl":"http://v.cdn.vine.co/r/avatars/0048B17DD51073903815440445440_26775f98722.0.2.jpg?versionId=ifFY05SbHAb7YO240g2_pyCHZ.sjBZlx","username":"Ƴʋиɢιи","description":""},
      {"videoUrl":"http://v.cdn.vine.co/r/videos/4B85A75F9D1075521613841256448_21d71b6dea7.0.3.12818837318744001983.mp4?versionId=qUOVVQnDM9SQ5gwSc.f6TMA87VJCQlfC","shareUrl":"https://vine.co/v/M66ZjZQnHU5/embed/postcard","id":"M66ZjZQnHU5","avatarUrl":"http://v.cdn.vine.co/v/avatars/D636E912-E56C-4864-AEF7-8B0A729272ED-26918-00001612EB2AF52C.jpg?versionId=tWZrMoJnPtiltLobyZsFYOjymZjpxXmz","username":"connor mckenna","description":"The struggle #vinefamous #relatable #notits #cantsing #canttwerk #ohwell #popular"},
      {"videoUrl":"http://v.cdn.vine.co/r/videos/D546B38A541075519491397566464_2daa1c42ea0.0.3.12032730694489546650.mp4?versionId=rQzLTvLvmYS6RVlOL3WdCkX_SjHs0MVN","shareUrl":"https://vine.co/v/M66aMUatB76/embed/postcard","id":"M66aMUatB76","avatarUrl":"http://v.cdn.vine.co/r/avatars/CDC7CA2AFD1072671656927186944_223460680c9.0.2.jpg?versionId=lal8lBG3HvfDcZoRHxxuh5iyzoR2JxSh","username":"John Marx","description":"Am I good at it?? 🔮"},
      {"videoUrl":"http://mtc.cdn.vine.co/r/videos/812771CC8D1075517047431372800_21aff957687.0.3.2611616361473187410.mp4?versionId=Z6GndQ9C8huF8wlmx.Oi6z_7e9dmQD9m","shareUrl":"https://vine.co/v/M6rll3xvglv/embed/postcard","id":"M6rll3xvglv","avatarUrl":"http://v.cdn.vine.co/r/avatars/DE60D36D461057088572513312768_17f5844079c.4.8.jpg?versionId=hkpJky3m31lODs6E0v4MNQVkMhQrpyu1","username":"Candace Whitaker","description":"#wigglewigglewiggle #jasonderulo #fatlegs #nothighgap #ThighClap #VineUnderdogs #ratchet #ranked #funny #comedy #popular #like #revine #lol"},
      {"videoUrl":"http://mtc.cdn.vine.co/r/videos/4514B5F7471075515004641497088_1df2f6785a8.3.2.mp4?versionId=KNg_2dYMUoN1LMhXMnWmJ1xvM2OZ5Z1a","shareUrl":"https://vine.co/v/M6rYwl2J6Qx/embed/postcard","id":"M6rYwl2J6Qx","avatarUrl":"http://v.cdn.vine.co/r/avatars/8F2D7C16EB1065058787955965952_2b2fa4c786e.0.0.jpg?versionId=htStbwcPX6n0wm49xcxQPQZxFpVPwmjL","username":"Luke Pratti","description":"#shovel #shovelfight #fight #fightclub #comedy #madebyme #comedy #6seconds #damn #wigglewigglewiggle#"},
      {"videoUrl":"http://mtc.cdn.vine.co/r/videos/C35CCD44C51075513325116342272_261e65c4bcd.0.1.5228582718539805739.mp4?versionId=c2nj3bjBtIqVOBxgwOKx8rEm71J.92PT","shareUrl":"https://vine.co/v/M6rV7KULqnd/embed/postcard","id":"M6rV7KULqnd","avatarUrl":"http://v.cdn.vine.co/r/avatars/9B36A82B921064539059847888896_166381455cb.4.8.jpg?versionId=60V9H.3PCa9tQ1WaSiF5OEVq9s8a4Iia","username":"Seb Mahon","description":"Listening to music ❌📣#music #Mynigga #parents #hashtagnoswag #funny #new #popular #like #follow"}];
    $httpBackend.when('GET', '/vine/popular/4').respond(videos);
    $httpBackend.flush();
    scope.$apply();
    expect(scope.videos.length).toBe(6);
    expect(scope.videos[0].videoUrl.$$unwrapTrustedValue()).toBe('http://mtc.cdn.vine.co/r/videos/FA9B2D6BD81075522829040353280_165d9937a74.3.2.mp4?versionId=6hVXPzr2.ALi7Tfr1MqEHCjPYlWPo72Z');
    expect(scope.videos[0].shareUrl).toBe('https://vine.co/v/M66K7QviQMK/embed/postcard');
    expect(scope.videos[0].id).toBe('M66K7QviQMK');
    expect(scope.videos[0].avatarUrl.$$unwrapTrustedValue()).toBe('http://v.cdn.vine.co/r/avatars/0048B17DD51073903815440445440_26775f98722.0.2.jpg?versionId=ifFY05SbHAb7YO240g2_pyCHZ.sjBZlx');
    expect(scope.videos[0].username).toBe('Ƴʋиɢιи');
    expect(scope.videos[0].description).toBe('');
    expect(dataService.videos).toBe(scope.videos);
  });
});
