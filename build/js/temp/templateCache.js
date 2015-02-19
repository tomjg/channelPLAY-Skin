angular.module("templatescache", []).run(["$templateCache", function($templateCache) {$templateCache.put("add.html","<h2>Create a Skin </h2>\n<form>\n	<input type=\"text\" ng-model=\"skin.name\" placeholder=\"Name\">\n	<input type=\"text\" ng-model=\"skin.client\" placeholder=\"Client\">\n	<input type=\"text\" ng-model=\"skin.description\" placeholder=\"Description\">\n	<hr/>\n	<p>Section 1</p>\n	<input type=\"text\" ng-model=\"skin.section1.title\" placeholder=\"Title\">\n	<div ng-repeat=\"thumbnail in skin.section1.thumbnails\">\n	Thumbnail: {{$index}}\n	<input ng-model=\"thumbnail.category\" placeholder=\"Category\">\n	<input ng-model=\"thumbnail.title\" placeholder=\"Title\">\n	<input ng-model=\"thumbnail.imageUrl\" placeholder=\"Image Url\">\n	</div>\n\n</form>\n<br/>\n<input ng-click =\"addSkin()\" type=\"submit\" value=\"Create\" class=\"submitButton\">");
$templateCache.put("edit.html","<p><a href=\"#/\">Home</a> | <a ng-href=\"#/skin/{{skinID}}\">view</a></p>\n<hr/>\n\n<form>\n	<input type=\"text\" ng-model=\"skin.name\" placeholder=\"Name\">\n	<input type=\"text\" ng-model=\"skin.client\" placeholder=\"Client\">\n	<input type=\"text\" ng-model=\"skin.description\" placeholder=\"Description\">\n	<hr/>\n	<p>Section 1</p>\n	<input type=\"text\" ng-model=\"skin.section1.title\" placeholder=\"Title\">\n	<div ng-repeat=\"thumbnail in skin.section1.thumbnails\">\n	Thumbnail: {{$index}}\n	<input ng-model=\"thumbnail.category\" placeholder=\"Category\">\n	<input ng-model=\"thumbnail.title\" placeholder=\"Title\">\n	<input ng-model=\"thumbnail.imageUrl\" placeholder=\"Image Url\">\n	</div>\n\n</form>\n<br/>\n<input ng-click =\"addSkin()\" type=\"submit\" value=\"Create\" class=\"submitButton\">");
$templateCache.put("home.html","\n<h2>Select a Skin:</h2>\n<br/>\n<ul>\n<li ng-repeat=\"skin in skins\"><a ng-href=\"#/skin/{{skin._id}}\">{{skin.data.name}}</a></li>\n</ul>\n\n<p><a href=\"#/add\">+ Add new skin</a>");
$templateCache.put("skin.html","<h1>Skin Preview</h1>\n<p><a href=\"#/\">Home</a> <a ng-href=\"#/edit/{{skinID}}\">edit</a></p>\n<hr/>\n\n{{skin}}\n\n<p>{{skin.title}}</p>\n<p>{{skin.client}}</p>\n<p>{{skin.description}}</p>\n<hr/>\n<p>{{skin.section1.title}}</p>\n<div ng-repeat=\"thumbnail in skin.section1.thumbnails\">\n	<p>{{thumbnail.title}}</p>\n	<p>{{thumbnail.category}}</p>\n	<img ng-src=\"{{thumbnail.imageUrl}}\">\n	<br/>\n</div>");}]);