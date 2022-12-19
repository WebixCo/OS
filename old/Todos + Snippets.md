# To Do

(put x to check)

* [ ] ***Change all window.open / window.location.href to custom function***
* [ ] turn into single page app using snippet in [the snippets section](#snippets)

### Revamp File Browser

* [ ] ***Address bar***
* [ ] ***fluent theme***
* [ ] ***actual icons***
* [ ] ***properties***
* [ ] ***deleting files***
* [ ] ***making new files***

### Apps To Add

* [ ] ***Game Center***
* [ ] ***Mail Client***
* [ ] Writer
* [ ] Slideshow
* [ ] Spreadsheets
* [ ] Native Shortcuts
* [ ] ***Plain text editor***
* [ ] Music App (cloud music via yt, etc)
* [ ] ***App Store***
* [ ] Scratch Client ([link1 - gh](https://github.com/LLK/scratch-gui)) ([link2 - web](https://LLK.github.io/scratch-gui/master/))
* [ ] CustomVSCode Client ([link - gh](https://github.com/cdr/code-server))
* [ ] ***Calculator***
* [ ] Media player (for local files)
* [ ] themes
* [ ] ***Settings***
* [ ] app builder
* [ ] RSS Reader
* [ ] Create offline chrome extention app
* [ ] Complete Start Menu Design in powerpoint

# Snippets

### Single Page App Method

##### Requires the HttpGet function listed below

```javascript
document.getElementsByTagName("html")[0].innerHTML = httpGet(URL)
```

### HttpGet function

```javascript
function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
```
