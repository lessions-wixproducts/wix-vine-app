angular.module('vineApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/fullPage.html',
    "<div class=\"full\">\n" +
    "    <div ng-click=\"back()\">Back</div>\n" +
    "    <vinevideo meta></vinevideo>\n" +
    "</div>"
  );


  $templateCache.put('app/views/metaVideo.html',
    "<div class=\"author\">\n" +
    "    <img ng-src=\"{{ video.avatarUrl }}\" class=\"avatar\">\n" +
    "</div>\n" +
    "<div class=\"post-content\">\n" +
    "    <p class=\"description\">\n" +
    "        <span class=\"username\">{{ video.username }}</span>\n" +
    "        {{ video.description }}\n" +
    "    </p>\n" +
    "</div>"
  );


  $templateCache.put('app/views/popular.html',
    "<h1>popular</h1>\n" +
    "\n" +
    "<div class=\"row content\">\n" +
    "    <div class=\"video\" ng-repeat=\"video in videos\">\n" +
    "        <vinevideo></vinevideo>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"footer\">\n" +
    "    <p><span class=\"glyphicon glyphicon-heart\"></span> from the Wix SDK team</p>\n" +
    "</div>\n"
  );


  $templateCache.put('app/views/search.html',
    "<div class=\"jumbotron\">\n" +
    "    <h2>Vine App</h2>\n" +
    "    <p class=\"lead\">Search for Vine videos, or see <span ng-click=\"search('popular')\">popular</span> videos.</p>\n" +
    "</div>\n" +
    "<form class=\"form-inline\" ng-submit=\"search(q || 'wix')\">\n" +
    "    <div>\n" +
    "        <input type=\"text\" class=\"form-control\" ng-model=\"q\" placeholder=\"Search vine.co\" tabindex=\"1\" focused=\"focused\">\n" +
    "        <button type=\"submit\" ng-click=\"search(q || 'wix')\" class=\"btn btn-primary\">Search</button>\n" +
    "    </div>\n" +
    "</form>\n" +
    "<div class=\"row content\">\n" +
    "    <h1>{{keyword}}</h1>\n" +
    "    <div class=\"video\" ng-repeat=\"video in videos\">\n" +
    "        <vinevideo></vinevideo>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"footer\">\n" +
    "    <p><span class=\"glyphicon glyphicon-heart\"></span> from the Wix SDK team</p>\n" +
    "</div>"
  );


  $templateCache.put('app/views/settings.html',
    "<div wix-scroll=\"{height:646}\">\n" +
    "    <!-- Settings box -->\n" +
    "    <div wix-ctrl=\"Accordion\">\n" +
    "\n" +
    "    <div class=\"acc-pane\">\n" +
    "        <h3>General Settings</h3>\n" +
    "        <div class=\"acc-content\">\n" +
    "            <p>Number of videos to display:</p>\n" +
    "            <ul class=\"list\">\n" +
    "                <li>\n" +
    "                    <div\n" +
    "                    wix-ctrl=\"Spinner\"\n" +
    "                    wix-param=\"numberOfVideos\"\n" +
    "                    wix-options=\"{ maxValue:500, value: 6, size: 'small' }\"></div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Color Pickers -->\n" +
    "    <div class=\"acc-pane\">\n" +
    "        <h3>Color Settings: </h3>\n" +
    "        <div class=\"acc-content\">\n" +
    "            <p>Set the widget colors</p>\n" +
    "            <ul class=\"list\">\n" +
    "                <li wix-label=\"Descripion container\">\n" +
    "                    <div wix-param=\"searchBoxColor\" wix-ctrl=\"ColorPickerWithOpacity\" wix-options=\"{startWithColor: 'color-1'}\"></div>\n" +
    "                </li>\n" +
    "                <li wix-label=\"Search button\">\n" +
    "                    <div wix-param=\"buttonColor \" wix-ctrl=\"ColorPickerWithOpacity\" wix-options=\"{startWithColor: 'color-1'}\"></div>\n" +
    "                </li>\n" +
    "                <li wix-label=\"Video Description\">\n" +
    "                    <div wix-param=\"descriptionColor\" wix-ctrl=\"ColorPicker\" wix-options=\"{startWithColor:'color-1'}\"></div>\n" +
    "                </li>\n" +
    "                <li wix-label=\"Video Username\">\n" +
    "                    <div wix-param=\"usernameColor\" wix-ctrl=\"ColorPicker\" wix-options=\"{startWithColor:'color-1'}\"></div>\n" +
    "                </li>\n" +
    "                <li wix-label=\"Video Background\">\n" +
    "                    <div wix-param=\"bgColor\" wix-ctrl=\"ColorPickerWithOpacity\" wix-options=\"{startWithColor: 'color-1'}\"></div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Font Pickers -->\n" +
    "    <div class=\"acc-pane\">\n" +
    "        <h3>Font Settings: </h3>\n" +
    "        <div class=\"acc-content\">\n" +
    "            <p>Set the widget fonts</p>\n" +
    "            <ul class=\"list\">\n" +
    "                <li wix-label=\"Description\">\n" +
    "                    <div wix-param=\"descriptionFont\" wix-ctrl=\"FontStylePicker\"></div>\n" +
    "                </li>\n" +
    "                <li wix-label=\"Username\">\n" +
    "                    <div wix-param=\"usernameFont\" wix-ctrl=\"FontStylePicker\"></div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/views/video.html',
    "<div id=\"video-container\" ng-click=\"fullPage(video)\">\n" +
    "    <div ng-show=\"showMetaTop\" class=\"meta\">\n" +
    "        <metavideo></metavideo>\n" +
    "    </div>\n" +
    "    <div id=\"container\">\n" +
    "        <video id=\"video\" autoplay=\"\" muted=\"\" preload=\"auto\" loop poster=\"\" ng-src=\"{{ video.videoUrl }}\"></video>\n" +
    "    </div>\n" +
    "    <div ng-hide=\"showMetaTop\" class=\"meta\">\n" +
    "        <metavideo></metavideo>\n" +
    "    </div>\n" +
    "</div>"
  );

}]);
