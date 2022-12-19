# Snippets

### Single Page App Method

##### Requires the HttpGet function listed below

```javascript
adocument.getElementsByTagName("html")[0].innerHTML = httpGet(URL)
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
