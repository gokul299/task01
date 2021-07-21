//XMLHttprequest -> are used are to interct with servers via API
//1.creating an XHR object
//new keboard
var reuest=new XMLHttpRequest();
//2.opening a connection (spcifiy the URL)
reuest.open('GET','https://restcountries.eu/rest/v2/all',true);
reuest.send();
reuest.onload=function(){
    var data = JSON.parse(this.response);
    console.log(data);
    for(var i=0;i<10;i++){
        console.log(data[i].name)
    }
}