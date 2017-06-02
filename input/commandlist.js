var moduleDescriptions = {
	Gfx:"For drawing and manipulating shapes and images.",
	Col:"So many colors!",
	Text:"For displaying text on screen.",
	Music:"For all your music and sound needs.<br /><br />Like OpenFL, Haxegon uses .OGG files on all platforms except for flash. (This may change in future, and if it does, I'll update Haxegon to match.)",
	Key:"A list of all of the key names. For use with <b>Input</b> functions.",
	Input:"Responding to key presses!",
	Mouse:"Checking out mouse movement and clicks.",
	Convert:"Strings to ints to floats and back again.",
	Core:"Advanced functions to change how your program runs.",
	Scene:"Scene management and control!<br /><br />A Scene in Haxegon is a class with an update() function, and optionally with the following functions:<br />new() (called when you first change to this scene)<br />reset() (called every time your change to this scene)<br />render() (for optionally seperating your logic and drawing code)<br /><br />The default Scene when your program starts is <b>Main</b>, but you can change this with the Scene.change() function.",
	S:"Helpful string manipulation functions.",
	Random:"Pick things randomly.",
	Data:"Reading in textfiles and CSV files.",
	Save:"Simple loading and saving of data.",
	Math:"See <a href=\"http://api.haxe.org/Math.html\">Haxe's Math implemenation</a> here.",
	Geom:"Some useful helper geometry functions.",
};

var haxeLibraryArray = [
["Gfx",".","M"],
["Col",".","E"],
["Text",".","M"],
["Music",".","M"],
["Key",".","E"],
["Input",".","M"],
["Mouse",".","M"],
["Convert",".","M"],
["Random",".","M"],
["Game",".","M"],
["Math",".","M"],
["String",".","M"],
["trace","(message)","F"],
["function ",""],
["break",";"],
["case "],
["continue",";"],
["default",":"],
["new"],
["do"],
["else"],
["false"],
["true"],
["for ",""],
["if"],
["in"],
["null"],
["switch "],
["var "],
["while"],
["return "],
//putting a space after the brackets below stops autocomplete from inserting a semicolon
["update","() ","F","This function will be called every frame by the engine if you define it."]
];


var haxeMethodArray = [
];

var haxeHintArray = [

["Gfx.clearscreen","(color:Int)","F", "Clears the screen to the given colour."],
["Gfx.clearcolor",":Int","P", "Set to the colour you want to clear the screen to at the start of each frame. If set to Col.TRANSPARENT, the the screen is not cleared at the start of each frame. Default value is Col.BLACK."],
["Gfx.drawbox","(x:Float, y:Float, width:Float, height:Float, color:Int, alpha:Float = 1.0)","F", "Draw a box at (x, y) with given width, height, colour and alpha."],
["Gfx.fillbox","(x, y, width, height, col)","F", "Fill a box at (x, y) with given width, height, colour and alpha."],
["Gfx.drawtri","(x1:Float, y1:Float, x2:Float, y2:Float, x3:Float, y3:Float, color:Int, alpha:Float = 1.0)","F", "Draw a triangle between the points (x1, y1), (x2, y2) and (x3, y3) with given colour and alpha."],
["Gfx.filltri","(x1:Float, y1:Float, x2:Float, y2:Float, x3:Float, y3:Float, col:Int, alpha:Float = 1.0)","F", "Fill a triangle between the points (x1, y1), (x2, y2) and (x3, y3) with given colour and alpha."],
["Gfx.drawcircle","(x:Float, y:Float, radius:Float, color:Int, alpha:Float = 1.0)","F", "Draw a cirle centered at (x, y), with given radius, colour and alpha."],
["Gfx.fillcircle","(x:Float, y:Float, radius:Float, color:Int, alpha:Float = 1.0)","F","Fill a cirle centered at (x, y), with given radius, colour and alpha."],
["Gfx.drawhexagon","(x:Float, y:Float, radius:Float, angle:Float, color:Int, alpha:Float = 1.0)","F", "Draw a hexagon centered at (x, y), with given radius, angle, colour and alpha."],
["Gfx.fillhexagon","(x:Float, y:Float, radius:Float, angle:Float, color:Int, alpha:Float = 1.0)","F","Draw a filled hexagon centered at (x, y), with given radius, angle, colour and alpha."],
["Gfx.drawline","(x1:Float, y1:Float, x2:Float, y2:Float, color:Int, alpha:Float = 1.0)","F", "Draw a line between (x1, y1) and (x2, y2) with a given colour and alpha."],
["Gfx.linethickness",":Float","P","Set the thickness of the line when drawing lines, boxes, triangles, etc. Default value of 1.0."],
["Gfx.setpixel","(x:Float, y:Float, color:Int):Int","F", "Sets the pixel at (x, y) to the given colour."],
["Gfx.getpixel","(x:Float, y:Float)","F", "Get the colour at the pixel (x, y). Very slow! Try to avoid using every frame if you can!"],
["Gfx.screenwidth",":Int","P", "Returns screen width."],
["Gfx.screenheight",":Int","P", "Returns screen height."],
["Gfx.screenwidthmid",":Int","P","Returns screen width divided by two."],
["Gfx.screenheightmid",":Int","P","Returns screen height divided by two."],
["Gfx.fullscreen",":Bool","P", "Set <b>true</b> or <b>false</b> to switch between window and fullscreen."],
["Gfx.resizescreen","(width, height)","F", "Sets the width and the height of the screen canvas. Automatically scales to fit in the current window, depending on your resize settings."],
["Gfx.loadimage","(imagename:String)","P", "Loads a .PNG or .JPG image from data/graphics/."],
["Gfx.drawimage","(x:Float, y:Float, imagename:String)","F", "Draw this image to the point (x, y)."],
["Gfx.drawsubimage","(x:Float, y:Float, x1:Float, y1:Float, w1:Float, h1:Float, imagename:String)","F", "Draw a subset of this image from the rectangle (x1, y1, w1, h1) to the point (x, y)."],
["Gfx.imagewidth","(imagename):Int","P", "Returns the width of an image."],
["Gfx.imageheight","(imagename):Int","P", "Returns the height of an image."],
["Gfx.createimage","(imagename:String, width:Int, height:Int) ","F", "Creates a blank image, with the name imagename, with given width and height."],
["Gfx.drawtoscreen","()","F", "Tell all future draw operations to draw to the screen. (rather than an image or tile.)"],
["Gfx.drawtoimage","(imagename:String)","F", "Tell all future draw operations to draw to this image. (rather than a tile or the screen). Warning: drawing to something other than the screen is currently very slow in Haxegon!"],
["Gfx.drawtotile","(tilesetname:String, tilenumber:Int)", "F", "Tell all future draw operations to draw to this tile on this tileset. (rather than an image or the screen). Warning: drawing to something other than the screen is currently very slow in Haxegon!"],
["Gfx.grabimagefromscreen","(imagename:String, screenx:Float, screeny:Float)","F","This function grabs a copy of the screen from position (screenx, screeny), and places it in the image."],
["Gfx.grabtilefromscreen","(tilesetname:String, tilenumber:Int, screenx:Float, screeny:Float)","F","This function grabs a tile from the screen at position (screenx, screeny), and places it in the tile."],
["Gfx.grabimagefromimage","(imagetocopyto:String, sourceimage:String, sourceimagex:Float, sourceimagey:Float)","F", "This function grabs an image from another image at position (sourceimagex, sourceimagey), and places it in the new image."],
["Gfx.copytile","(totileset:String, totilenumber:Int, fromtileset:String, fromtilenumber:Int)","F", "Copies a tile from one tileset to another. If the source tile is larger than the destination tile, the tile is cropped."],
["Gfx.rotation","(angle:Float, xpivot=Gfx.CENTER, ypivot=Gfx.CENTER)","F","Rotates image drawing functions. Optionally set rotation pivot point."],
["Gfx.scale","(xscale:Float, yscale:Float, xpivot=Gfx.CENTER, ypivot=Gfx.CENTER)","F","Scales image drawing functions like Gfx.drawimage and Gfx.drawtile. Optionally set scaling pivot point. Scales X and Y seperately - if you call with only one argument, it scales X and Y the same. If you call with no arguments, it resets the scale to 1.0."],
["Gfx.imagecolor","(c:Int = Col.WHITE)","F","Set a colour multipler in RGB for image drawing functions. Leave parameter blank to return to normal."],
["Gfx.imagealpha","(a:Float = 1.0)","F","Set an alpha multipler for image drawing functions. Leave parameter blank to return to normal."],
["Gfx.loadtiles","(tilesetname:String, tilewidth:Int, tileheight:Int)","P", "Loads a .PNG or .JPG image from data/graphics/, and splits it into tiles."],
["Gfx.createtiles","(tilesetname:String, tilewidth:Int, tileheight:Int, amount:Int)","P", "Creates a blank tileset, with the name 'tilesetname', with each tile a given width and height, containing 'amount' tiles."],
["Gfx.drawtile","(x:Float, y:Float, tilesetname:String, tilenum:Int)","F", "Draw this tile to the point (x, y)."],
["Gfx.drawsubtile","(x:Float, y:Float, tilesetname:String, tilenum:Int, x1:Float, y1:Float, w:Float, h:Float)","F", "Draw a subset of this tile from the rectangle (x1, y1, w1, h1) to the point (x, y)."],
["Gfx.addblanktiles","(tilesetname:String, num:Int):Int","P", "Add some blank tiles to the end of a tileset."],
["Gfx.numberoftiles","(tilesetname:String):Int","P", "Returns the number of tiles in a tileset."],
["Gfx.tilewidth","(tilesetname:String):Int","P", "Returns the width of a tile in this tileset."],
["Gfx.tileheight","(tilesetname:String):Int","P", "Returns the width of a tile in this tileset."],
["Gfx.CENTER","","P", "A constant passed to functions like Gfx.rotation() and Gfx.scale() to set the pivot point for either the x or y value to the center of the image."],
["Gfx.LEFT","","P", "A constant passed to functions like Gfx.rotation() and Gfx.scale() to set the pivot point for the x value to the left of the image."],
["Gfx.RIGHT","","P", "A constant passed to functions like Gfx.rotation() and Gfx.scale() to set the pivot point for the x value to the right of the image."],
["Gfx.TOP","","P", "A constant passed to functions like Gfx.rotation() and Gfx.scale() to set the pivot point for the y value to the top of the image."],
["Gfx.BOTTOM","","P", "A constant passed to functions like Gfx.rotation() and Gfx.scale() to set the pivot point for the y value to the bottom of the image."],

["Col.BLACK","","Col"],
["Col.GREY","","Col"],
["Col.WHITE","","Col"],
["Col.RED","","Col"],
["Col.PINK","","Col"],
["Col.DARKBROWN","","Col"],
["Col.BROWN","","Col"],
["Col.ORANGE","","Col"],
["Col.YELLOW","","Col"],
["Col.DARKGREEN","","Col"],
["Col.GREEN","","Col"],
["Col.LIGHTGREEN","","Col"],
["Col.NIGHTBLUE","","Col"],
["Col.DARKBLUE","","Col"],
["Col.BLUE","","Col"],
["Col.LIGHTBLUE","","Col"],
["Col.MAGENTA","","Col"],
["Col.TRANSPARENT","","Col"],
["extraCol.rgb","(red [0-255], green [0-255], blue [0-255]):Int","F","Converts a color with given red, green, and blue values (between 0-255 each) to a single hex number."],
["extraCol.hsl","(hue [0-360], saturation [0-1.0], lightness [0-1.0] ):Int","F","Converts a color with given hue (0-360), saturation [0-1], and lightness [0-1] values to a single hex number."],
["extraCol.getred","(col):Int","F","Returns the red component of a hex color (Between 0-255 inclusive)."],
["extraCol.getgreen","(col):Int","F","Returns the green component of a hex color (Between 0-255 inclusive)."],
["extraCol.getblue","(col):Int","F","Returns the blue component of a hex color (Between 0-255 inclusive)."],
["extraCol.gethue","(col):Int","F","Returns the hue (0-360) value of a color."],
["extraCol.getsaturation","(col):Float","F","Returns the saturation (0.0-1.0) value of a color."],
["extraCol.getlightness","(col):Int","F","Returns the lightness (0.0-1.0) value of a color."],
["extraCol.shiftred","(col, amount):Int","F","Returns a colour with the red component (0-255) adjusted."],
["extraCol.shiftgreen","(col, amount):Int","F","Returns a colour with the green component (0-255) adjusted."],
["extraCol.shiftblue","(col, amount):Int","F","Returns a colour with the blue component (0-255) adjusted."],
["extraCol.multiplysaturation","(col, amount):Int","F","Returns a colour with the saturation (0-1.0) multiplied."],
["extraCol.multiplylightness","(col, amount):Int","F","Returns a colour with the lightness (0-1.0) multiplied."],

["Text.font",":String","P","Set the font to a font from <b>data/graphics/fonts/</b>"],
["Text.size",":Float","P","Change the size of the font. For ttf fonts, sizes are given in point format - e.g. 16, 32, 48, etc. For bitmap fonts, sizes are given in multiple scales - 1 is normal, 2 is double size, 3 is triple, etc."],
["Text.display","(x:Float, y:Float, text:String, color:Int = 0xFFFFFF)","F","Draws text on the screen at a given point."],
["Text.input",'(x:Float, y:Float, prompt:String, questioncolor:Int = 0xFFFFFF, answercolor:Int  = 0xCCCCCC):Bool',"F", "Displays a prompt on screen where you can type a string. Returns true when the user presses Key.ENTER."],
["Text.getinput","():String","F", "Returns the most recent value of Text.input() after Key.ENTER has been pressed."],
["Text.inputmaxlength",":Int","P","Sets maximum response length of Text.input()."],
["Text.wordwrap",":Int","P", "Sets the word-wrap width for Text.display() commands."],
["Text.rotation","(angle:Float, pivotx:Int, pivoty:Int)","F","Sets the rotation of Text.display() commands. (pivotx, pivoty) can be a point, or it can use the constants Text.LEFT, Text.CENTER or Text.RIGHT."],
["Text.align","(position)","F","Sets the alignment for Text.display() commands. Pass either Text.LEFT, Text.CENTER or Text.RIGHT."],
["Text.width","(text:String):Float","F", "Returns the width in pixels of the given string."],
["Text.height","(text:String):Float","F", "Returns the height in pixels of the given string. If text is left blank, it returns the height in pixels of any line of text in the current font."],
["Text.CENTER","","P", "A constant passed to functions like Text.align() and Text.rotation()."],
["Text.LEFT","","P", "A constant passed to functions like Text.align() and Text.rotation()."],
["Text.RIGHT","","P", "A constant passed to functions like Text.align() and Text.rotation()."],
["Text.TOP","","P", "A constant passed to functions like Text.align() and Text.rotation()."],
["Text.BOTTOM","","P", "A constant passed to functions like Text.align() and Text.rotation()."],

["Data.loadtext","(textfile:String):Array<String>","F", "Loads in a </b>.txt</b> file from <b>data/text/</b> as an array of Strings, split by newlines. The files needs to have the extension .txt."],
["Data.loadcsv","(csvfile:String, delimiter = \",\"):Array<???>","F", "Loads in a </b>.csv</b> file from <b>data/text/</b> as an array of values."],
["Data.load2dcsv","(csvfile:String, delimiter = \",\"):Array<?>","F", "Loads in a two-dimensional </b>.csv</b> file from <b>data/text/</b> as a 2d array of values. Use <b>Data.width</b> and <b>Data.height</b> to read the width and height of the loaded 2d CSV."],
["Data.blank2darray","(width:Int, height:Int):Array<Array<?>>","F", "Helpful function to give you a blank 2D array of given width and height!"],

["Save.filename",":String","P", "Optional! Sets the name of the savefile to that <b>Save.load()</b> and <b>Save.savevalue()</b> will use. By default, the save filename is <i>\"haxegongame\"</i>."],
["Save.savevalue","(key:String, value:?)","F", "Saves a value. Can be loaded later with <b>Save.loadvalue()</b>."],
["Save.loadvalue","(key:String)","F", "Loads a value that you've previously saved with <b>Save.savevalue()</b>. If no saved value for that key exists, then it returns 0."],
["Save.exists","(key:String):Bool","F", "Returns true if a value has been saved for this key in the current file, false otherwise."],
["Save.fileexists","(savefile:String):Bool","F", "Returns true if a given save file exists, false otherwise."],
["Save.delete","([filename:String])","F", "Deletes all saved values in a given filename. If no filename is given, deletes all saved values in <i>\"haxegongame\"</i>."],
["Save.keys","","P", "An array of strings, containing all the keys in the current save file."],

["Music.loadsound","(soundname:String, volumelevel:Float = 1.0)","F", "Loads in a sound from <b>data/sounds/</b> - either MP3 or OGG/WAV, depending on platform. 'Sounds' are usually short sounds effects that are played without looping. Optionally set a volume level for the sound (0.5 loads it in at half volume, for example.)"],
["Music.playsound","(soundname:String, volume:Float = 1.0, offset:Float = 0.0)", "F", "Plays a sound effect. Optionally set a volume between 0.0-1.0, or an optional startpoint (where 1.0 is 1 second into the sound)."],
["Music.stopsound","()","F", "Stop any sound effect that's currently playing."],
["Music.loadsong","(songname:String, volumelevel:Float = 1.0)","F", "Loads in a song from <b>data/sounds/</b> - either MP3 or OGG/WAV, depending on platform. 'Songs' are usually long music files that are played with looping. Optionally set a volume level for the song (0.5 loads it in at half volume, for example.)"],
["Music.playsong","(songname:String, ?time:Float = 0.0, ?loop:Bool = true)","F", "Plays a song. Optionally set a startpoint (where 1.0 is 1 seconds into the song), and whether or not to loop."],
["Music.stopsong","()","F", "Stops the currently playing song."],
["Music.fadeout","()","F", "Fades out the currently playing song."],

["Key.A","","E"],
["Key.B","","E"],
["Key.C","","E"],
["Key.D","","E"],
["Key.E","","E"],
["Key.F","","E"],
["Key.G","","E"],
["Key.H","","E"],
["Key.I","","E"],
["Key.J","","E"],
["Key.K","","E"],
["Key.L","","E"],
["Key.M","","E"],
["Key.N","","E"],
["Key.O","","E"],
["Key.P","","E"],
["Key.Q","","E"],
["Key.R","","E"],
["Key.S","","E"],
["Key.T","","E"],
["Key.U","","E"],
["Key.V","","E"],
["Key.W","","E"],
["Key.X","","E"],
["Key.Y","","E"],
["Key.Z","","E"],
["Key.ZERO","","E"],
["Key.ONE","","E"],
["Key.TWO","","E"],
["Key.THREE","","E"],
["Key.FOUR","","E"],
["Key.FIVE","","E"],
["Key.SIX","","E"],
["Key.SEVEN","","E"],
["Key.EIGHT","","E"],
["Key.NINE","","E"],
["Key.F1","","E"],
["Key.F2","","E"],
["Key.F3","","E"],
["Key.F4","","E"],
["Key.F5","","E"],
["Key.F6","","E"],
["Key.F7","","E"],
["Key.F8","","E"],
["Key.F9","","E"],
["Key.F10","","E"],
["Key.F11","","E"],
["Key.F12","","E"],
["Key.MINUS","","E"], 
["Key.PLUS","","E"], 
["Key.DELETE","","E"], 
["Key.BACKSPACE","","E"], 
["Key.LBRACKET","","E"],
["Key.RBRACKET","","E"], 
["Key.BACKSLASH","","E"],
["Key.CAPSLOCK","","E"],
["Key.SEMICOLON","","E"],
["Key.QUOTE","","E"],
["Key.COMMA","","E"],
["Key.PERIOD","","E"],
["Key.SLASH","","E"],
["Key.ESCAPE","","E"],
["Key.ENTER","","E"],
["Key.SHIFT","","E"],
["Key.CONTROL","","E"],
["Key.ALT","","E"],
["Key.SPACE","","E"],
["Key.UP","","E"],
["Key.DOWN","","E"],
["Key.LEFT","","E"],
["Key.RIGHT","","E"],

["Input.justpressed","(Key.ENTER):Bool","F","True if the key has been pressed this frame."],
["Input.pressed","(Key.LEFT):Bool","F","True if this key is currently held down."],
["Input.justreleased","(Key.SPACE):Bool","F","True if the key has been released this frame"],
["Input.forcerelease","(Key.SPACE)","F","If the player is holding down this key, 'force' release it. Future calls to Input.pressed() will return false until the player lifts their finger and presses it again. If you call Input.forcerelease() without any parameters, it releases all keypresses."],
["Input.delaypressed","(Key.Z, 5):Bool","F","True once every N frames, if the key is pressed."],
["Input.pressheldtime","(Key.Z):Int","F","Tells you how many frames a key has been pressed down for."],
["Input.getchar","():String","F","Returns the last letter pressed."],
["Input.keyname","(Key.SEMICOLON):String", "F", "Returns a string with the name of the given key. For example, Key.SEMICOLON returns <b>;</b>, Key.SPACE returns <b>Space</b>, Key.PAGEDOWN returns <b>Page Down</b>."],

["Mouse.x",":Int","P","Returns the Mouse's x coordinate on screen."],
["Mouse.y",":Int","P","Returns the Mouse's y coordinate on screen."],
["Mouse.deltax",":Int","P", "Returns the Mouse's change in x coordinate on screen from the <b>last frame</b>. Can be useful for tracking movement."],
["Mouse.deltay",":Int","P", "Returns the Mouse's change in y coordinate on screen from the <b>last frame</b>. Can be useful for tracking movement."],
["Mouse.mousewheel",":Int","P", "Returns 1 if the mouse has scrolled up, or -1 if the mouse has scrolled down."],
["Mouse.offscreen","():Bool","F", "Is true when the mouse cursor is offscreen, false otherwise."],
["Mouse.cursormoved","():Bool","F", "Is true if the mouse cursor has moved this frame, false otherwise."],
["Mouse.leftclick","():Bool","F","True if the button has been clicked this frame."],
["Mouse.leftheld","():Bool","F","True if the button is held down this frame."],
["Mouse.leftreleased","():Bool","F","True if the mouse has been released this frame."],
["Mouse.leftdelaypressed","(delay:Int):Bool","F","Mouse version of Input.delaypressed(). True once every N frames, if the left button is being held."],
["Mouse.leftforcerelease","()","F","If the player is holding down the left mouse button, 'force' release it. Future calls to Mouse.leftheld() will return false until the player lifts their finger and clicks again."],
["Mouse.middleclick","():Bool","F","True if the button has been clicked this frame."],
["Mouse.middleheld","():Bool","F","True if the button is held down this frame."],
["Mouse.middlereleased","():Bool","F","True if the mouse has been released this frame."],
["Mouse.middledelaypressed","(delay:Int):Bool","F","Mouse version of Input.delaypressed(). True once every N frames, if the middle button is being held."],
["Mouse.middleforcerelease","()","F","If the player is holding down the middle mouse button, 'force' release it. Future calls to Mouse.middleheld() will return false until the player lifts their finger and clicks again."],
["Mouse.rightclick","():Bool","F","True if the button has been clicked this frame."],
["Mouse.rightheld","():Bool","F","True if the button is held down this frame."],
["Mouse.rightreleased","():Bool","F","True if the mouse has been released this frame."],
["Mouse.rightdelaypressed","(delay:Int):Bool","F","Mouse version of Input.delaypressed(). True once every N frames, if the right button is being held."],
["Mouse.rightforcerelease","()","F","If the player is holding down the right mouse button, 'force' release it. Future calls to Mouse.rightheld() will return false until the player lifts their finger and clicks again."],
["Mouse.leftheldpresstime",":Int","F","Tells you how many frames the left mouse button has been pressed down for."],
["Mouse.rightheldpresstime",":Int","F","Tells you how many frames the right mouse button has been pressed down for."],
["Mouse.middleheldpresstime",":Int","F","Tells you how many frames the middle mouse button has been pressed down for."],
["Mouse.show","()","F","Show the mouse cursor."],
["Mouse.hide","()","F","Hide the mouse cursor."],

["S.uppercase","(currentstring:String):String","F","Returns an uppercase version of currentstring."],
["S.lowercase","(currentstring:String):String","F","Returns an lowercase version of the string."],
["S.split","(currentstring:String, delimiter:String):String","F","Splits a string into an array, divided by a given delimiter character (e.g. \",\")"],
["S.removefromstring","(fullstring:String, substring:String):String","F","Removes substring from the fullstring."],
["S.isinstring","(fullstring:String, stringtocheck:String):Bool","F","Returns true if the given stringtocheck is in the given fullstring."],
["S.positioninstring","(fullstring:String, substring:String, start:Int = 0):String","F","Return the position of a substring in a given string. -1 if not found."],
["S.letterat","(currentstring:String, position:Int = 0):String","F","Return character at given position"],
["S.mid","(currentstring:String, start:Int = 0, length:Int = 1):String","F","Return characters from the middle of a string."],
["S.left","(currentstring:String, length:Int = 1):String","F","Return some characters from the left side of a string. (To remove characters from the start of a string instead, see S.removefromleft().)"],
["S.right","(currentstring:String, length:Int = 1):String","F","Return some characters from the right side of a string. (To remove characters from the end of a string instead, see S.removefromright().)"],
["S.removefromleft","(currentstring:String, length:Int = 1):String","F","Take N characters from the left of a string and return the original string without those characters. (To get the leftmost characters of a string, use S.left() instead.)."],
["S.removefromright","(currentstring:String, length:Int = 1):String","F","Take N characters from the right of a string and return the original string without those characters. (To get the rightmost characters of a string, use S.right() instead.)."],
["S.reversetext","(currentstring:String):String","F","Reverse a string."],
["S.replacechar","(currentstring:String, ch:String = \"|\", ch2:String = \"\"):String","F","Given a string currentstring, replace all occurances of string ch with ch2. Useful to remove characters."],
["S.getroot","(currentstring:String, ch:String):String","F","Given a string currentstring, return everything before the first occurance of the \"ch\" character"],
["S.getbranch","(currentstring:String, ch:String):String","F","Given a string currentstring, return everything after the FIRST occurance of the \"ch\" character"],
["S.getlastbranch","(currentstring:String, ch:String):String","F","Given a string currentstring, return everything after the LAST occurance of the \"ch\" character"],
["S.getbetweenbrackets","(currentstring:String):String","F","Given a string currentstring, return everything between the first and the last bracket ()."],
["S.trimspaces","(currentstring:String):String","F","Given a string currentstring, return a string without spaces around it."],
["S.isnumber","(currentstring:String):String","F","True if string currentstring is some kind of number; false if it's something else."],

["Scene.change","(newscene:Class)","F", "Change the game's current scene."],
["Scene.name","(requiredscene:Class):Class","F", "Returns the name of a scene as a String."],
["Scene.get","(requiredscene:Class):Class","F", "Advanced! Returns an instance of the required scene. Can be used to access that Scene's member variables, though alternatively you could just make that scene's functions static."],

["Convert.tostring","(1234):String","F"],
["Convert.toint",'("15"):Int',"F","Convert a string or a floating-point number to an integer."],
["Convert.tofloat",'("3.1417826"):Float',"F","Convert a string or an integer to a floating-point number."],

["Random.int","(from:Int, to_inclusive:Int):Int","F", "Returns an Integer between 'from' and 'to_inclusive'."],
["Random.float","(from:Int, to_inclusive:Int):Float","F", "Returns a Float between 'from' and 'to_inclusive'."],
["Random.string","(length:Int, ?characters:String):String","F", "Returns a random String of a given length. You can optionally specify which characters to use, otherwise the default is (a-zA-Z0-9)."],
["Random.bool","():Bool","F","50:50 chance of being true/false"],
["Random.chance","(n:int):Bool","F","n% chance of being true."],
["Random.pick","(list:Array<T>):T","F","Picks a random element from an array."],

["Math.PI",":Float","C"],
["Math.abs","(v:Float):Float","F"],
["Math.acos","(v:Float):Float","F"],
["Math.asin","(v:Float):Float","F"],
["Math.atan","(v:Float):Float","F"],
["Math.atan2","(y:Float,x:Float):Float","F"],
["Math.ceil","(v:Float):Int","F"],
["Math.cos","(v:Float):Float","F"],
["Math.exp","(v:Float):Float","F"],
["Math.floor","(v:Float):Int","F"],
["Math.fround","(v:Float):Float","F"],
["Math.log","(v:Float):Float","F"],
["Math.max","(a:Float,b:Float):Float","F"],
["Math.min","(a:Float,b:Float):Float","F"],
["Math.pow","(v:Float,exp:Float):Float","F"],
["Math.round","(v:Float):Int","F"],
["Math.sin","(v:Float):Float","F"],
["Math.sqrt","(v:Float):Float","F"],
["Math.tan","(v:Float):Float","F"],

["Core.time",":Float","C", "is equal to the number of seconds passed since the game started."],
["Core.showstats",":Bool","C", "Set to true to show stats like framerate."],
["Core.fps",":Int","C", "Change the game's framerate."],
["Core.quit","()","P", "Native targets only. Closes the application."],
["Core.window",":Window","C", "Native targets only. Gives you access to the native window object. See <a href=\"http://api.openfl.org/lime/ui/Window.html\">OpenFL documentation</a> for more information."],
["Core.delaycall","(f:Function, t:Float)","P", "Tells Haxegon to call this function after \"t\" seconds have passed."],
["Core.callfunctionafterupdate","(f:Function)","P", "Advanced! Tells Haxegon to call this function after each scene's update() function."],
["Core.callfunctionafterrender","(f:Function)","P", "Advanced! Tells Haxegon to call this function after each scene's render() function."],

["Geom.inbox","(x, y, rectx, recty, rectwidth, rectheight):Bool","F", "Returns true if the point (x, y) is in the rectangle (rectx, recty)x(rectwidth, rectheight)."],
["Geom.overlap","(x1, y1, w1, h1, x2, y2, w2, h2):Bool","F", "Returns true if the rectangle (x1, y1)x(w1, h1) overlaps with the rectangle (x2, y2)x(w2, h2)."],
["Geom.distance","(x1, y1, x2, y2):Float","F", "Returns the distance between the points (x1, y1) and (x2, y2)."],
["Geom.getangle","(x1, y1, x2, y2):Float","F", "Returns the angle (in radians) between the points (x1, y1) and (x2, y2)."],
["Geom.anglebetween","(angle1, angle2):Float","F", "Returns the smallest difference between two angles, so that if you add the result to angle1, you get angle2. (All haxegon Geom and Math functions use radians.)"],
["Geom.clamp","(value, min, max):Float","F", "Clamps a value between a min and max. If the value is less than min, return min, if it's more than max, return max, otherwise just return the value."],
["Geom.todegrees","(radians):Float","F", "Converts degrees to radians."],
["Geom.toradians","(degrees):Float","F", "Converts radians to degrees."]
];
