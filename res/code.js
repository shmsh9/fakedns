function refresh(){
    window.location.reload(false);
}
function getInformations(){
    var listInfos = [navigator.appCodeName,navigator.appName,navigator.appVersion]
    var infos
    for(i=0;i < listInfos.length;i++){
        infos += listInfos[i];
    }
    alert(infos);
    return infos;
}
function fillDiv(divtosearch,object){
    alert(object);
    document.getElementById(divtosearch).innerHTML=object;
    return 0;
}
