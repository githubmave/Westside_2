'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
//angular.module('myApp.services', []).
  //value('version', '0.1');
  
  

var module = angular.module('myApp.services', []);


// module.service('getAnswService', function () {
module.service('getSingerService', function () {
    
  
      var selectedVideoList=[{}];

      var selectedSingerList=[{}];

      var selectedVideo4SingerList=[{}];



      var girlSongList=[{}];
      var boySongList=[{}];

     
   //********save singers
   
   this.save=function(video){
   	
   	  
   	selectedVideoList.push(video);
   	
   	
   };
   
   
   this.clear=function(){
   	
   	  selectedVideoList=[{}];
   	  return selectedVideoList;
   	
   };
   
   this.list=function(){
   	
   	return selectedVideoList;
   	
   };

// save

// save selectedVideo4SingerList
this.saveVideo4Singer=function(video){
      
        
      selectedVideo4SingerList.push(video);
      
      
   };
   
   
   this.clearVideo4Singer=function(){
      
        selectedVideo4SingerList=[{}];
        return selectedVideo4SingerList;
      
   };

   
   
   this.listVideo4Singer=function(){
      
      return selectedVideo4SingerList;
      
   };

//  end--saveVideo4SingerList

// saveGirlSong
this.saveGirlSong=function(song){
      
        
      girlSongList.push(song);
      
      
   };
   
   
   this.clearGirlSong=function(){
      
        girlSongList=[{}];
        return girlSongList;
      
   };
   
   this.listGirlSong=function(){
      
      return girlSongList;
      
   };

//  end--saveGirlBand

// saveBoyBand
this.saveBoySong=function(song){
      
        
      boySongList.push(song);
      
      
   };
   
   
   this.clearBoySong=function(){
      
        boySongList=[{}];
        return boySongList;
      
   };
   
   this.listBoySong=function(){
      
      return boySongList;
      
   };

//  end--saveBoyBand

// saveJustinSongList
  this.saveJustinSong=function(song){
      
        
      JustinSongList.push(song);
      
      
   };
   
   
   this.clearJustinSong=function(){
      
        JustinSongList=[{}];
        return JustinSongList;
      
   };
   
   this.listJustinSong=function(){
      
      return JustinSongList;
      
   };

//  endJustinSongList

// saveOneDSongList
  this.saveOneDSong=function(song){
      
        
      OneDSongList.push(song);
      
      
   };
   
   
   this.clearOneDSong=function(){
      
        OneDSongList=[{}];
        return OneDSongList;
      
   };
   
   this.listOneDSong=function(){
      
      return OneDSongList;
      
   };

//  endOneDSongList

// saveWestSongList
  this.saveWestSong=function(song){
      
        
      WestSongList.push(song);
      
      
   };
   
   
   this.clearWestSong=function(){
      
        WestSongList=[{}];
        return WestSongList;
      
   };
   
   this.listWestSong=function(){
      
      return WestSongList;
      
   };

//  endOneDSongList


});