currentStore = localStorage.getItem('fs')
function jsonPathToValue(jsonData, path) {
          if (!(jsonData instanceof Object) || typeof (path) === "undefined") {
            throw "InvalidArgumentException";
          }
          path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
          path = path.replace(/^\./, ''); // strip a leading dot
          var pathArray = path.split('.');
          for (var i = 0, n = pathArray.length; i < n; ++i) {
            var key = pathArray[i];
            if (key in jsonData) {
              if (jsonData[key] !== null) {
                  jsonData = jsonData[key];
              } else {
                  return null;
              }
            } else {
              return key;
            }
          }
          return jsonData;
        }
if(currentStore == null){
  localStorage.setItem('fs', '{"d_home":{"d_Documents":{"f_README․html":"data:text/html;base64,PGgxIGlkPSJ3ZWxjb21lLXRvLW9ueXhvcyI+V2VsY29tZSB0byBPbnl4T1M8L2gxPg0KPHA+VGhpcyBpcyBhIHRlc3Qgb2YgdGhlIEZTPC9wPg0KDQo="},"d_Downloads":{},"d_Pics":{}}}');
}
function save(path, content){
  currentStore = JSON.parse(localStorage.getItem('fs'))
  path2 = "['"+path.replaceAll(".","']['")+"']"
  console.log(path2)
  eval("currentStore"+path2+" = '"+encodeURIComponent(content)+"'")
  localStorage.fs = JSON.stringify(currentStore);
  currentStore =localStorage.fs
  }
function load(path) {
  console.log(jsonPathToValue(JSON.parse(localStorage.fs), path))
  console.log(path)
  return jsonPathToValue(JSON.parse(localStorage.fs), path);
}