
!function(){return function e(t,n,i){function o(a,s){if(!n[a]){if(!t[a]){var p="function"==typeof require&&require;if(!s&&p)return p(a,!0);if(r)return r(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){return o(t[a][1][e]||e)},u,u.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}}()({1:[function(e,t,n){"use strict";Vue.component("google-maps-widget",{template:'<div :class="aspectRatio" class="maps-component" ref="googleMapsContainer"></div>',props:{googleApiKey:{type:String,required:!0},address:{type:String,required:!1},lat:{type:Number},lng:{type:Number},zoom:{type:Number,default:16},aspectRatio:{type:String,default:"map-3-1",validator:function(e){return-1!==["map-3-1","map-2-1","map-1-1",""].indexOf(e)}}},computed:{coordinates:function(){var e=!isNaN(this.lat)&&this.lat>-90&&this.lat<90,t=!isNaN(this.lng)&&this.lng>-180&&this.lng<180;return e&&t?{lat:this.lat,lng:this.lng}:null}},mounted:function(){var e=this;this.$nextTick(function(){document.querySelector("#google-maps-api")?e.listenToExistingScript():e.createScript().then(function(){return e.initializeMap()})})},methods:{createScript:function(){var e=this;return new Promise(function(t,n){var i=document.createElement("script"),o="https://maps.googleapis.com/maps/api/js?key="+e.googleApiKey;i.type="text/javascript",i.id="google-maps-api",i.src=o,i.addEventListener("load",function(){return t(i)},!1),i.addEventListener("error",function(){return n(i)},!1),document.body.appendChild(i)})},listenToExistingScript:function(){var e=this,t=document.querySelector("script#google-maps-api");"undefined"==typeof google?t.addEventListener("load",function(){return e.initializeMap()},!1):this.initializeMap()},initializeMap:function(){var e=this;this.coordinates?this.renderMap(this.coordinates):this.geocodeAddress().then(function(t){e.renderMap(t)})},geocodeAddress:function(){var e=this;return new Promise(function(t,n){(new google.maps.Geocoder).geocode({address:e.address},function(e,i){i===google.maps.GeocoderStatus.OK?t({lat:e[0].geometry.location.lat(),lng:e[0].geometry.location.lng()}):n()})})},renderMap:function(e){var t=new google.maps.Map(this.$refs.googleMapsContainer,{center:e,zoom:this.zoom});new google.maps.Marker({map:t,position:e})}}})},{}]},{},[1]);

$(".test" ).hover(
    function() {
      console.log("print");
    }
  );

  $( document ).ready(function() {
    console.log( "ready!" );
});


$( ".test" ).click(function() {
    alert( "Handler for .click() called." );
  });
  