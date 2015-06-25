var lineN = 1;
var oldM;
function setTime(){
    var time = new Date();
    var gmtMS = time.getTime() + (time.getTimezoneOffset() * 60000);
    var gmtTime =   new Date(gmtMS);
    var hour = gmtTime.getHours();
    var day = time.getUTCDate();
    var month = time.getUTCMonth() + 1;
    var minute = gmtTime.getMinutes();
    oldM = minute;
    var temp = "" + ((hour < 10) ? "0" : "") + hour;
    temp += ((minute < 10) ? "<span id='doubledot' style='opacity:0;'>:</span>0" : "<span id='doubledot' style='opacity:0;'>:</span>") + minute;
    var temp2 = "" + ((day < 10) ? "0" : "") + day;
    var temp3;
    if(month == 1){
        temp3 = "JAN";
    }else if(month == 2){
        temp3 = "FEB";
    }else if(month == 3){
        temp3 = "MAR";
    }else if(month == 4){
        temp3 = "APR";
    }else if(month == 5){
        temp3 = "MAY";
    }else if(month == 6){
        temp3 = "JUN";
    }else if(month == 7){
        temp3 = "JUL";
    }else if(month == 8){
        temp3 = "AUG";
    }else if(month == 9){
        temp3 = "SEP";
    }else if(month == 10){
        temp3 = "OCT";
    }else if(month == 11){
        temp3 = "NOV";
    }else if(month == 12){
        temp3 = "DEC";
    }

    document.getElementById('updateStamp').innerHTML = temp2 + " " + temp3 + " " + time.getUTCFullYear() + " @ " + temp + " UTC // 15 Warnings in Effect.";
    oldM = minute;
}
function startup(){
    //ALL CLEAR
    //document.getElementById('warningsArea').style.background = "#299b5c url('http://members.iinet.net.au/~larrymudd/force13/news.png') no-repeat left center";
    //document.getElementById('warningsArea').style.color = "#ffffff";
    //CAUTION
    //document.getElementById('warningsArea').style.background = "#ffd500";
    //document.getElementById('warningsArea').style.color = "#000000";
    //CATASTROPHIC
    //document.getElementById('warningsArea').style.background = "#cf0000";
    //document.getElementById('warningsArea').style.color = "#ffffff";

    document.getElementById('key001').innerHTML = "(0) Catastrophic Damage Reports";
    document.getElementById('key002').innerHTML = "(0) Severe Cyclone Warnings";
    document.getElementById('key003').innerHTML = "(0) Severe Cyclone Watch";
    document.getElementById('key004').innerHTML = "(0) Cyclone Warning";
    document.getElementById('key005').innerHTML = "(0) Cyclone Watch";
    document.getElementById('key006').innerHTML = "(0) Tropical Storm Warning";
    document.getElementById('key007').innerHTML = "(0) Tropical Storm Watch";
    document.getElementById('key008').innerHTML = "(0) Flood Warning";
    document.getElementById('key009').innerHTML = "(0) Flood Watch";
    document.getElementById('key010').innerHTML = "(0) Rip Current Advisory";
    document.getElementById('key011').innerHTML = "(0) Tornado Warning";
    document.getElementById('key012').innerHTML = "(0) Tornado Watch";
    document.getElementById('key013').innerHTML = "(0) Severe Thunderstorm Warning";
    document.getElementById('key014').innerHTML = "(0) Severe Thunderstorm Watch";
    document.getElementById('key015').innerHTML = "(0) Heatwave Warning";
    document.getElementById('key016').innerHTML = "(0) Heatwave Advisory";
    document.getElementById('key017').innerHTML = "(0) Bushfire Warning";
    document.getElementById('key018').innerHTML = "(0) Bushfire Watch";
    document.getElementById('key019').innerHTML = "(0) Air Quality Alert";
    document.getElementById('key020').innerHTML = "(4) Dense Fog Advisory";
    document.getElementById('key021').innerHTML = "(0) Aircraft Advisory";
    document.getElementById('key022').innerHTML = "(0) High Wind Warning";
    document.getElementById('key023').innerHTML = "(0) Gale Warning (At Sea)";
    document.getElementById('key024').innerHTML = "(10) Frost Advisory";
    document.getElementById('key025').innerHTML = "(0) Freeze Warning";
    document.getElementById('key026').innerHTML = "(0) Freeze Watch";
    document.getElementById('key027').innerHTML = "(0) Blizzard Warning";
    document.getElementById('key028').innerHTML = "(0) Blizzard Watch";
    document.getElementById('key029').innerHTML = "(0) Tsunami Warning";
    document.getElementById('key030').innerHTML = "(0) Tsunami Watch";
    document.getElementById('key031').innerHTML = "(0) Volcanic Warning";
    document.getElementById('key032').innerHTML = "(1) Volcanic Watch";

    latestNews();
    setInterval(function(){ latestNews(); }, 8000);
    setTimeout(function(){ setTime(); }, 100);
    setInterval(function(){ doubledot(); }, 500);
    mapLocations();
}
function newWindow(x){
    var win = window.open("", "RSMCPearce", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=995, height=669, top=15, left=15");
    win.document.body.innerHTML = "This page for " + x + " is coming soon!";
}
function latestNews(){
    if(lineN == 1){
        document.getElementById('warningsArea').style.background = "#00ffff url('http://members.iinet.net.au/~larrymudd/force13/news.png') no-repeat left center";
        document.getElementById('warningsArea').style.color = "#000000";
        document.getElementById('warningsArea').innerHTML = "<span style='font-weight:bold;'>FROST ADVISORIES</span> - Parts of Woomera, Dorian, Banksia, Jack, Lukin, Alpine, and Penrith. This includes Peel Island, Long Island, and Shaw Island.";
        lineN = 2;
    }else if(lineN == 2){
        document.getElementById('warningsArea').style.background = "#708090 url('http://members.iinet.net.au/~larrymudd/force13/news.png') no-repeat left center";
        document.getElementById('warningsArea').style.color = "#ffffff";
        document.getElementById('warningsArea').innerHTML = "<span style='font-weight:bold;'>DENSE FOG ADVISORIES</span> - Parts of Lirra, Forster, Dubbo, and Bowen.";
        lineN = 3;

    }else if(lineN == 3){
        document.getElementById('warningsArea').style.background = "#424242 url('http://members.iinet.net.au/~larrymudd/force13/news.png') no-repeat left center";
        document.getElementById('warningsArea').style.color = "#ffffff";
        document.getElementById('warningsArea').innerHTML = "<span style='font-weight:bold;'>VOLCANO WATCH</span> - Adavale Caldera continues to show seismic activity.";
        lineN = 1;
    }
}
function doubledot(){
    if(document.getElementById('doubledot').style.opacity == "1"){
        document.getElementById('doubledot').style.opacity = "0";
    }else{
        document.getElementById('doubledot').style.opacity = "1";
    }
    var time = new Date();
    var gmtMS = time.getTime() + (time.getTimezoneOffset() * 60000);
    var gmtTime =   new Date(gmtMS);
    var minute = gmtTime.getMinutes();
    if(oldM != minute){
        setTime();
    }
}
function mapInfo(x,y){
    if(y == "show"){
        document.getElementById('CurrentLocation').innerHTML = x;
        document.getElementById('CurrentLocation').style.opacity = "1";
    }else if(y == "hide"){
        document.getElementById('CurrentLocation').innerHTML = "&nbsp;";
        document.getElementById('CurrentLocation').style.opacity = "0";
    }
}
function mapLocations(){
  var suburbsMap = document.getElementById('suburbsMap');
  suburbsMap.innerHTML += " <area shape=\"poly\" onmouseover=\"mapInfo('Woomera','show');" onmouseout="mapInfo('Woomera','hide');\" onclick=\"newWindow('Woomera');\" title=\"WOOMERA\" coords=\"451,546,456,551,479,551,474,564,457,568,443,567,437,578,434,574,439,568,434,564,434,550,439,545,439,539,447,547\">";
}
