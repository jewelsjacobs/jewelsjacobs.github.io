http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port') + " in " + process.env.NODE_ENV + " mode.");

    var emitter,
        str,
        iter = [],
        startPath = "public/javascripts/poc",
        appName = "poc",
        filePath = "public/javascripts/poc/namespace.js";

    var log = fs.createWriteStream(filePath, {'flags': 'w'});
    var spacedStartPath = startPath.replace(/\//g, " ");
    str = "window." + appName + " = {} || " + appName + ";\r\n";
    emitter = walk.walk(startPath);

    function upperCaseMe (txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }

    emitter.on('file', function (path, stat, next) {
        if (stat.name[0] !== '.') {
            var filepath =  [path, '/', stat.name].join('');
            var noSlash =  filepath.replace(/\//g, " ");
            var stripStartPath =  noSlash.replace(spacedStartPath,"");
            var stripJs =  stripStartPath.replace ('.js',"");
            var uppercase = stripJs.replace(/\w\S*/g, upperCaseMe);
            if (uppercase.indexOf(" ") != -1) {
                uppercase = uppercase.replace(/ /g,".");
            };
            var pathArr = uppercase.split(".");
            var joined = [];
            var joinedStr = '';
            for (var i = 1; i &lt; pathArr.length; i++) {
                joined.push(pathArr[i]);
                joinedStr += appName + '.' + joined.join(".") + " = {};\r\n";
            }

            iter.push(joinedStr);
        }

        next();
    });

    emitter.on('end', function () {
        var uniquePaths = []
        , uniqueEntries = []
        , end = "\r\n"
        , finalJoinedString = "";

        for (var i = 0; i &lt; iter.length; i++) {
            if (uniquePaths.indexOf(iter[i]) == -1) {
                uniquePaths.push(iter[i]);
                str += iter[i];
            }
        }

        var strArray = str.split(end);
        for (var i = 0; i &lt; strArray.length; i++) {
            if (uniqueEntries.indexOf(strArray[i]) == -1) {
                uniqueEntries.push(strArray[i]);
                finalJoinedString += strArray[i] + end;
            }
        }

        log.write(finalJoinedString);
    });

});