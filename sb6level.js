// ==UserScript==
// @name         pilipiliSBLv6
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Become a fake Lv6
// @author       Aynakeya
// @match        https://*.bilibili.com/*
// @grant        none
// @require     https://static.hdslb.com/js/jquery.js
// ==/UserScript==

var target = "10003632";
var targetLv = 6;
var targetExp = 28800;

function fakeCommetsLv(){
    // change level in commets
    $(".user").each(function(index,ele){
        //uid = $(ele).find(".name").attr("data-usercard-mid");
        if ($(ele).find(".name").attr("data-usercard-mid") == target){
            $(ele).find(".level").attr("class","level l"+targetLv);
        }
    })
}

function fakeSpaceLv(){
    // change level in the space
    var rs = window.location.href.match(new RegExp("com/[0-9]+"));
    if (rs){
        var uid = rs[0].substring(4);
        if (uid == target){
            $(".h-level.m-level").attr("lvl",""+targetLv);
        }
    }
}

function fakeOldNavBarLv(){
    // change level in old navigation bar
    $(".bar").find(".rate").attr("style","width: "+100*(targetExp/28800)+"%;");
    $(".bar").find(".lt").attr("class","lt lv"+targetLv);
    $(".bar").find(".num").find("div").html(targetExp+"<span>/28800</span>");
}

function fakeNewNavBarLv(){
    // change level in new navigation bar
    $(".level-info").find(".progress").text(targetExp+ " / 28800");
    $(".level-info").find(".grade").text("等级 6");
    $(".level-bar").find(".level-progress").attr("style","width: "+100*(targetExp/28800)+"%;");
}

function fakeCardBarLv(){
    // change level in the user card
    if ($("p.user").length == 0){
    	return;
    }
    var childrens = $("p.user").children();
    var rs = childrens.eq(0).attr("href").match(new RegExp("com/[0-9]+"));
    if (rs && rs[0].substring(4) == target){
        childrens.eq(childrens.length-1).find("i").attr("class","level l"+targetLv);
    }
}

function fakeAccountCenter(){
	$(".home-top-level-head.home-top-level-head-active").text("LV"+targetLv);
	$(".home-top-level-upgo").attr("style","width: "+100*(targetExp/28800)+"%;");
	$(".home-top-level-number").find('.now-num').text(targetExp)
}

function fakelv(){
    fakeCardBarLv();
    fakeCommetsLv();
    fakeSpaceLv();
    fakeOldNavBarLv();
    fakeNewNavBarLv();
    fakeAccountCenter();
}

(function() {
    'use strict';
    //console.log(!window.location.href.match(new RegExp("com/[0-9]+")));
    fakelv();
    setInterval(fakelv, 10);
    // var observer = new MutationObserver(function(mutationsList){
    //     fakelv();
    // });
    // observer.observe(document.body, { attributes: true, childList: true, subtree: false });
    // observer.observe(document.head, { attributes: true, childList: true, subtree: false });
})();