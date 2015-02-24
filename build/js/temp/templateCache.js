angular.module("templatescache", []).run(["$templateCache", function($templateCache) {$templateCache.put("add.html","<h2>Create a Skin </h2>\n<form>\n	<input type=\"text\" ng-model=\"skin.name\" placeholder=\"Name\">\n	<input type=\"text\" ng-model=\"skin.client\" placeholder=\"Client\">\n	<input type=\"text\" ng-model=\"skin.description\" placeholder=\"Description\">\n	<hr/>\n	<p>Section 1</p>\n	<input type=\"text\" ng-model=\"skin.section1.title\" placeholder=\"Title\">\n	<div ng-repeat=\"thumbnail in skin.section1.thumbnails\">\n	Thumbnail: {{$index}}\n	<input ng-model=\"thumbnail.category\" placeholder=\"Category\">\n	<input ng-model=\"thumbnail.title\" placeholder=\"Title\">\n	<input ng-model=\"thumbnail.imageUrl\" placeholder=\"Image Url\">\n	</div>\n\n</form>\n<br/>\n<input ng-click =\"addSkin()\" type=\"submit\" value=\"Create\" class=\"submitButton\">");
$templateCache.put("edit-template.html","<div class=\"content-container\">\n	<br/><br/>\n	<div>\n	<form class=\"edit-template-form\">\n		<h2>Edit Template</h2>\n		<p>NOTE: All changes apply live, there\'s no need to save and there\'s no undo. Currently under development, some fields may not work or be visible.</p>\n		<br/><hr/><br/>\n\n		<fieldset>\n		<h3>Global Properties</h3>\n		<br/>\n		<label>Name</label>\n		<input type=\"text\" ng-model=\"template.name\" placeholder=\"imageUrl\">\n		\n		<label>Client</label>\n		<input type=\"text\" ng-model=\"template.client\" placeholder=\"imageUrl\">\n\n		<label>Description</label>\n		<textarea type=\"text\" ng-model=\"template.description\" placeholder=\"description\"></textarea>\n\n		<label>Hero Image</label>\n		<input type=\"text\" ng-model=\"template.hero.imageUrl\" placeholder=\"imageUrl\">\n		</fieldset>\n\n		<a href=\"templates\"><button>Finished</button></a>\n	</form>\n	</div>\n</div>");
$templateCache.put("edit.html","<div class=\"content-container\">\n\n<hr/>\n<div class=\"save\">\n<button ng-click=\"cancelUpdate()\">Cancel </button> <button ng-click =\"updateSkin()\">Save </button>\n</div>\n\n<form id=\"edit-form\">\n	<h3>Skin Information</h3>\n	<br/>\n	<div class=\"fieldset\">\n	<label for=\"name\">Skin Name</label>\n	<input id=\"name\" type=\"text\" ng-model=\"skin.name\" placeholder=\"Name\">\n\n	<label for=\"client\">Client</label>\n	<input id=\"client\" type=\"text\" ng-model=\"skin.client\" placeholder=\"Client\">\n\n	<label for=\"skin-description\">Skin Description</label>\n	<textarea id=\"skin-description\"type=\"text\" ng-model=\"skin.description\" placeholder=\"Description\"></textarea><br/>\n</div>\n<div class=\"fieldset\">\n	<label for=\"bg-image\">Background Image</label>\n	<input id=\"bg-image\" type=\"text\" ng-model=\"skin.backgroundImage\" placeholder=\"background image URL\">\n\n\n</div>\n\n<hr/>\n	<h3>Fonts</h3>\n	<br/>\n<div class=\"fieldset\">\n	<label for=\"bg-image\">Import google fonts</label>\n	<input id=\"bg-image\" type=\"text\" ng-model=\"skin.style.fontImport\" placeholder=\"@import(//googlefonturl)\">\n</div>\n\n<div class=\"fieldset\">\n	<div class=\"font-picker\">\n	<label for=\"search\">Find a Google font</label><br/>\n	<input id=\"search\" type=\"search\" ng-model=\"searchText\">\n	<ul ng-if=\"searchText\">\n		<li ng-repeat=\"font in googleFonts.items | filter: searchText | limitTo: 5\">\n		<p webfont-loader=\"{{font.family}}\" ng-style=\"{\'font-family\': \'&quot;\'+font.family+\'&quot;\'}\">\n		{{font.family}}</p></li>\n	</ul>\n	</div>\n\n</div>\n\n<div class=\"fieldset\">\n<p>The add fonts feature is under development. Please use the @import url generated by Google.<br/> <a href=\"http://google.com/fonts\" target=\"_blank\">Open Google Fonts</a></p>\n\n</div>\n\n\n<hr/>\n	\n	<h3>Hero Module</h3>\n	<br/>\n\n<div class=\"fieldset copy\">\n	<label>Video Title</label>\n	<input type=\"text\" ng-model=\"skin.hero.title\" placeholder=\"Title\">\n\n	<label>Video Description</label>\n	<textarea type=\"text\" ng-model=\"skin.hero.description\" placeholder=\"Description\"></textarea>\n	<br/>\n\n	<label>Video Thumbnail Image</label>\n	<input type=\"text\" ng-model=\"skin.hero.imageUrl\" placeholder=\"ImageUrl\">\n	\n\n\n	</div>\n\n<div class=\"fieldset\">\n	<label>Title Font Family</label>\n	<input type=\"text\" ng-model=\"skin.hero.style.title.fontFamily\" placeholder=\"font-Family\">\n\n	<label>Title Font Size</label>\n	<input type=\"text\" ng-model=\"skin.hero.style.title.fontSize\" placeholder=\"font-size\">\n\n	<label>Title Font Weight</label>\n	<input type=\"text\" ng-model=\"skin.hero.style.title.fontWeight\" placeholder=\"font-weight\">\n\n	<label>Title Font Color</label>\n	<input type=\"text\" ng-model=\"skin.hero.style.title.color\" placeholder=\"#444444\">\n	<div class=\"colorStrip\" ng-style=\"{\'background-color\': skin.hero.style.title.color}\"></div>\n\n	<label>Title Letter Spacing</label>\n	<input type=\"text\" ng-model=\"skin.hero.style.title.letterSpacing\" placeholder=\"letter-spacing\">\n\n	<label>Title Line Height</label>\n	<input type=\"text\" ng-model=\"skin.hero.style.title.lineHeight\" placeholder=\"line-height\">\n</div>\n\n<div class=\"fieldset\">\n	<label>Description Font Family</label>\n	<input type=\"text\" ng-model=\"skin.hero.style.description.fontFamily\" placeholder=\"font-Family\">\n\n	<label>Description Font Size</label>\n	<input type=\"text\" ng-model=\"skin.hero.style.description.fontSize\" placeholder=\"font-size\">\n	\n\n	<label>Description Font Weight</label>\n	<input type=\"text\" ng-model=\"skin.hero.style.description.fontWeight\" placeholder=\"font-weight\">\n\n	<label>Description Font Color</label>\n	<input type=\"text\" ng-model=\"skin.hero.style.description.color\" placeholder=\"#999999\">\n	<div class=\"colorStrip\" ng-style=\"{\'background-color\': skin.hero.style.description.color}\"></div>\n\n	<label>Description Letter Spacing</label>\n	<input type=\"text\" ng-model=\"skin.hero.style.Description.letterSpacing\" placeholder=\"letter-spacing\">\n\n	<label>Description Line Height</label>\n	<input type=\"text\" ng-model=\"skin.hero.style.Description.lineHeight\" placeholder=\"line-height\">\n</div>\n<hr/>\n<div class=\"save\">\n	<button ng-click=\"cancelUpdate()\">Cancel </button> <button ng-click =\"updateSkin()\">Save </button></div>\n	\n	<h3>Buttons</h3>\n	<br/>\n\n<div class=\"fieldset\">\n	<label>Share Button Text Transform</label><br/>\n	<select ng-model=\"skin.hero.style.buttonTextTransform\">\n		<option value=\"none\">None</option>\n		<option value=\"lowercase\">lowercase</option>\n		<option value=\"uppercase\">UPPERCASE</option>\n		<option value=\"Capitalize\">Capitalise</option>\n	</select>\n	<br/><br/>\n\n\n	<label>Share Button Background Color</label>\n	<input type=\"text\" ng-model=\"skin.hero.style.buttonBackground.color\" placeholder=\"#444444\">\n	<div class=\"colorStrip\" ng-style=\"{\'background-color\': skin.hero.style.buttonBackground.color}\"></div>\n\n	<label>Share Button Text Color</label>\n	<input type=\"text\" ng-model=\"skin.hero.style.button.color\" placeholder=\"#444444\">\n	<div class=\"colorStrip\" ng-style=\"{\'background-color\': skin.hero.style.button.color}\"></div>\n</div>\n	<hr/>\n	<h3>Section 1</h3>\n<div class=\"fieldset\">\n	<input type=\"text\" ng-model=\"skin.section1.title\" placeholder=\"Title\">\n</div>\n	<hr/>\n	<h3>Section 1 Thumbs</h3>\n\n<div ng-repeat=\"thumbnail in skin.section1.thumbnails\">\n	<div class=\"fieldset\">\n	<p>Thumbnail: {{$index}}</p>\n	<input ng-model=\"thumbnail.category\" placeholder=\"Category\">\n	<input ng-model=\"thumbnail.title\" placeholder=\"Title\">\n	<input ng-model=\"thumbnail.imageUrl\" placeholder=\"Image Url\">\n	</div>\n</div>\n\n\n\n</form>\n<br/>\n\n\n<br/>\n<br/>\n<hr/>\n<br/>\n\n<p>To delete the template enter &quot;<strong>{{skin.name}}</strong>&quot; into the field:</p>\n<input type=\"text\" ng-model=\"deleteTest\">\n<br/><br/>\n<button ng-if=\"deleteTest == skin.name\" class=\"delete\" ng-click=\"deleteSkin()\">Delete</button>\n\n\n\n\n<br/><br/><br/><br/><br/>\n</div>");
$templateCache.put("fonts.html","<div class=\"content-container\">\n\n<!-- 	<div class=\"font-picker\">\n	<label for=\"search\">Find a Google font</label><br/>\n	<input id=\"search\" type=\"search\" ng-model=\"searchText\">\n	<br/>\n	<ul ng-if=\"searchText\">\n		<li ng-repeat=\"font in googleFonts.items | filter: searchText | limitTo: 5\">\n		<p webfont-loader=\"{{font.family}}\" ng-style=\"{\'font-family\': \'&quot;\'+font.family+\'&quot;\'}\">{{font.family}}<hr/></p></li>\n		\n	</ul>\n	</div> -->\n\n<div class=\"tab-nav\">\n	<button ng-Click=\"selectedTab = \'systemFonts\'\">System Fonts </button> \n	<button ng-Click=\"selectedTab = \'googleFonts\'\">Google Fonts</button> \n	<button ng-Click=\"selectedTab = \'customFonts\'\">Custom Fonts</button></div>\n<br/>\n<br/>\n\n<div class=\"tab\" ng-if=\"selectedTab == \'systemFonts\' \">\n<h3>System Fonts</h3>\n<p>Use common web safe fonts pre-installed on user systems such as Arial, Verdana, and Georgia.</p>\n</div>\n\n<div class=\"tab\" ng-if=\"selectedTab == \'googleFonts\' \">\n<h3>Google Fonts</h3>\n<p>Find and import fonts from Google\'s font library.</p>\n\n</div>	\n\n\n<div class=\"tab\" ng-if=\"selectedTab == \'customFonts\' \">\n<h3>Custom Fonts</h3>\n<p>Specify a custom font by defining a font-family.</p>\n\n</div>	\n\n\n\n\n<!-- 			<br/>\n	<div class=\"fontPreview\" webfont-loader=\"{{loadedFontFamily}}\" >\n	<h1 ng-style=\"{\'font-family\': loadedFontFamily, \'font-weight\': loadedFontVariant}\">The quick brown fox jumped over the lazy dogs in {{loadedFontFamily}}.</h1>\n	<h2 ng-style=\"{\'font-family\': loadedFontFamily}\">The quick brown fox jumped over the lazy dogs in {{loadedFontFamily}}.</h2>\n	<h3 ng-style=\"{\'font-family\': loadedFontFamily}\">The quick brown fox jumped over the lazy dogs in {{loadedFontFamily}}.</h3>\n	<h4 ng-style=\"{\'font-family\': loadedFontFamily}\">The quick brown fox jumped over the lazy dogs in {{loadedFontFamily}}.</h4>\n	<h5 ng-style=\"{\'font-family\': loadedFontFamily}\">The quick brown fox jumped over the lazy dogs in {{loadedFontFamily}}.</h5>\n	<br/>\n	<p ng-style=\"{\'font-family\': loadedFontFamily}\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n	consequat. Duis aute irure dolor in <a href=\"\">reprehenderit in voluptate</a> velit esse\n	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n	</div>\n	<br/>\n	<hr/>\n	<br/> -->\n\n</div>");
$templateCache.put("home.html","<div class=\"content-container\">\n<h1>channelPLAY - Skin Creator </h1>\n<hr/>\n\n<h4>Skins:</h4>\n<br/>\n<ul>\n<li ng-repeat=\"skin in skins\"><a ng-href=\"#/skin/{{skin._id}}\">{{skin.data.name}} - {{skin.data.client}}</a></li>\n</ul>\n\n<br/>\n<br/>\n<button ng-click=\"addSkin()\">+ Add new skin</button>\n<!-- <p><a ng-click=\"addSkin()\">+ Add new skin</a> -->\n<!-- need to make this create a new skin and load it into the editor -->\n\n</p></div>");
$templateCache.put("login.html","<div class=\"login-background\">\n\n<div   ng-if=\"!authData\" class=\"login-container\" id=\"loginContainer\" ng-style=\"loading\">\n	<div class=\"header\"><h1>channelPLAY</h1>\n	<p>TEMPLATE CREATOR</p>\n	</div>\n\n	<div>\n		<form ng-style=\"authStyle\" class=\"login-form\">\n		<div ng-if=\"loginError\" class=\"error\"><p>{{loginError}}</p></div>\n		<input type=\"email\" ng-model=\"loginFormEmail\" placeholder=\"Email Address\">\n		<input type=\"password\" ng-model=\"loginFormPassword\" placeholder=\"Password\">\n		\n		<button  ng-if=\"!createNewUser\" ng-click=\"login(loginFormEmail, loginFormPassword)\">\n		<span ng-if=\"!authenticating\">LOGIN</span>\n		<span ng-if=\"authenticating\">Logging In...</span>\n		</button>\n		<button ng-if=\"createNewUser\" ng-click=\"createUser(loginFormEmail, loginFormPassword)\">\n		<span ng-if=\"!authenticating\">CREATE NEW ACCOUNT</span>\n		<span ng-if=\"authenticating\">Logging In...</span>\n		</button>\n		<p ng-hide=\"createNewUser\" style=\"text-align:center\"><a ng-click=\"createNewUser = true\">or create a new account</a></p>\n		<p ng-show=\"createNewUser\" style=\"text-align:center\"><a ng-click=\"createNewUser = false\">or log in with existing account</a></p>\n		</form>\n	</div>\n</div>\n\n<div ng-if=\"authData\" class=\"login-container\">\n	<div class=\"welcome-message\">\n	<h1>WELCOME</h1>\n	<p>Loading your templates...</p></div>\n</div>\n\n</div>");
$templateCache.put("skin.html","<style type=\"text/css\">\n	{{skin.style.fontImport}}\n</style>\n\n<div class=\"tools\" ng-include=\" \'tools.html\' \" ng-hide=\"previewMode\"></div>\n\n<div class=\"hero-background\" ng-style=\"{\'background-image\': \'url(\' + skin.backgroundImage + \')\'}\" >\n\n<div class=\"skin-navigation\">\n<div class=\"nav-wrapper\">\n	Skin Navigation</div></div>\n\n<br/><br/><br/><br/>\n	<div class=\"hero-module\">\n		<div class=\"hero-image\" ng-style=\"{\'background-image\': \'url(\' + skin.hero.imageUrl + \')\'}\"></div>\n		<div class=\"hero-copy\">\n			<h1 ng-style=\"{\n			\'color\':skin.hero.style.title.color, \n			\'font-family\': skin.hero.style.title.fontFamily,\n			\'font-size\' : skin.hero.style.title.fontSize,\n			\'font-weight\': skin.hero.style.title.fontWeight,\n			\'letter-spacing\': skin.hero.style.title.letterSpacing,\n			\'line-height\': skin.hero.style.title.lineHeight}\">{{skin.hero.title}}</h1>\n			<div class=\"hero-share\" >\n				<!-- <img src=\"/src/assets/hero-share.png\"> -->\n				<div class=\"share-button\" ng-style=\"{\n				\'background-color\': skin.hero.style.buttonBackground.color,\n				\'color\': skin.hero.style.button.color,\n				\'text-transform\': skin.hero.style.buttonTextTransform}\">\n				<p><i class=\"fa fa-paper-plane\"></i> Share</p></div>\n				<div class=\"share-button\" ng-style=\"{\n				\'background-color\': skin.hero.style.buttonBackground.color,\n				\'color\': skin.hero.style.button.color,\n				\'text-transform\': skin.hero.style.buttonTextTransform}\">\n				<p><i class=\"fa fa-code\"></i> Embed</p></div>\n			</div>\n			<p id=\"hero-description\" ng-style=\"{\n			\'color\':skin.hero.style.description.color, \n			\'font-family\': skin.hero.style.description.fontFamily,\n			\'font-size\' : skin.hero.style.description.fontSize,\n			\'font-weight\': skin.hero.style.description.fontWeight,\n			\'letter-spacing\': skin.hero.style.description.letterSpacing,\n			\'line-height\': skin.hero.style.description.lineHeight}\">{{skin.hero.description}}</p>\n		</div>\n		</div>\n		<br/><br/><br/><br/>\n</div>\n<br/><br/>\n<div class=\"section1\">\n<br/><br/>\n<h1>{{skin.section1.title}}</h1>\n\n	<div class=\"largeThumbnail\" ng-repeat=\"thumbnail in skin.section1.thumbnails | limitTo: 6\">\n		<div class=\"largeThumbnailImage\" ng-style=\"{\'background-image\': \'url(\' + thumbnail.imageUrl + \')\'}\">\n		</div>\n		<div class=\"clock\"><p>2:41</p></div>\n		<div class=\"largeThumbnailText\">\n			<h4>{{thumbnail.category}}</h4>\n			<p>{{thumbnail.title}}</p>\n		</div>\n	</div>\n\n</div>\n\n\n<br/><br/><br/><br/>\n<br/><br/><br/><br/><br/><br/>\n<br/><br/><br/><br/><br/><br/>\n\n<!-- <p>{{skin.section1.title}}</p>\n\n<div class=\"images\" ng-repeat=\"thumbnail in skin.section1.thumbnails\">\n	<img ng-src=\"{{thumbnail.imageUrl}}\">\n	<p>{{thumbnail.title}}</p>\n	<p>{{thumbnail.category}}</p>\n	<br/>\n</div> -->");
$templateCache.put("template.html","<div class=\"content-container\">\n<br/>\n<h1>Template Viewer</h1><br/>\n<p>All the data uses three-way binding, so as you edit the template it will update live on any other machine!<br/>\nThis could be used in a workshop to make live adjustments to the content and branding from a tablet while the skin is presented on a TV.</p>\n<br/><p>Try it out by opening the edit panel on another device and watch the changes apply in real time. </p>\n<br/>\n<hr/>\n<br/>\n<h2>{{template.name}}</h2>\n<h4>{{template.client}}</h4>\n<p>{{template.description}}</p>\n<br/>\n<img ng-src=\"{{template.hero.imageUrl}}\" width=\"500\" height=\"auto\">\n\n</div>");
$templateCache.put("templates.html","<nav class=\"templateNav\">\n<div class=\"content-container\">\n<ul>\n	<li><a ng-click=\"logout()\">Logout</a></li>\n	<li> | </li>\n	<li>{{authData.password.email}}</li>\n	</ul>\n</div>\n</nav>\n\n\n<div class=\"content-container\">\n	<div class=\"addNew\">\n		<button ng-click=\"createNewTemplate()\">\n		<span ng-if=\"!creatingTemplate\">+ Create a new template</span>\n		<span ng-if=\"creatingTemplate\">Creating new template...</span>\n		</button>\n	</div>\n	<h1>YOUR TEMPLATES</h1> \n	<hr/>\n	<div class=\"list-container\">\n		<p ng-if=\"noTemplates\">Looks like you don\'t have any templates yet! Click \'Create a new template\' to get started.</p>\n		<div class=\"template-tile\" ng-repeat=\"template in templates\">\n			<div class=\"template-image\" ng-style=\"{\'background-image\':\'url({{template.hero.imageUrl}})\'}\"></div>\n			<div class=\"template-info\">\n				<h3>{{template.name}}</h3>\n				<p class=\"template-client\">{{template.client}}</p>\n				<br/>\n				<p class=\"template-client\">{{template.description}}</p>\n				<br/>\n				<p><a ng-href=\"template/{{authData.uid}}/{{template.$id}}\" target=\"_blank\">View</a> / \n				<a ng-href=\"edit/{{template.$id}}\">Edit</a> / \n				<a ng-click=\"deleteTemplate($index)\">Delete</a></p>\n			</div>\n		</div>\n	</div>\n</div>\n\n<div ng-if=\"helperMode\" class=\"helper-tools\">\n	<hr/>\n	<p>HELPER TOOLS - not for production</p>\n	<form>\n	<input type=\"text\" ng-model=\"template.name\" placeholder=\"name\"> \n	<input type=\"text\" ng-model=\"template.client\" placeholder=\"client\"> \n	<button ng-click=\"addNew()\">Add</button>\n	</form>\n</div>\n\n");
$templateCache.put("tools.html","<a ng-href=\"#/\">back to all skins</a>\n<hr/>\n<h4>{{skin.name}}</h4>\n<p>{{skin.client}}</p>\n<br/>\n<p>{{skin.description}}</p>\n<br/>\n<button ng-click=\"previewMode = true\">Hide Tools</button> <button ng-click=\"editThis()\">Edit Skin</button>\n<button ng-if=\"authData\" ng-click=\"logout()\">Logout</button>");}]);