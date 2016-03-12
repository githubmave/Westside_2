'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('boyCtrl',  function($scope,$http,$routeParams,$sce,getSingerService) {

                 // $scope.selectedCat={};
                 $scope.songList=[{}];
                 $scope.singerList=[{}];
                 $scope.videoList=[{}];

                 $scope.justinVideoList=[{}];
                 $scope.oneDVideoList=[{}];
                 $scope.westVideoList=[{}];

                 $scope.selectedSinger="";


                 $scope.selectedSong={};

                  $scope.girlSongList=getSingerService.listGirlSong();

                  $scope.boySongList=getSingerService.listBoySong();

                  $scope.selectedVideoList=getSingerService.clear();
                  $scope.selectedVideo4SingerList=getSingerService.clearVideo4Singer();
               
                
     //*****get json data************************************
       // $http.get('js/applicants.json').success(function(data){
       $http.get('js/singers.json').success(function(data){
        
          // $scope.projcatList=data.applicants;
 
             $scope.singerList=data.singers;

             // $scope.selectedCat=$scope.applicantList[0];

       });

        $http.get('js/songs.json').success(function(data){
        
 
             $scope.songList=data.songs;

             //***********list girl songs**********************

              getSingerService.clearGirlSong();

             angular.forEach($scope.songList,function(s){


                    if(s.DELETED=="Yes"){

                        $scope.girlSongList=getSingerService.saveGirlSong(s);


                    }


             });

             $scope.girlSongList=getSingerService.listGirlSong();


             //****************list boy songs**************************

             getSingerService.clearBoySong();

             angular.forEach($scope.songList,function(s){


                    if(s.DELETED!="Yes"){

                        $scope.boySongList=getSingerService.saveBoySong(s);


                    }


             });

             $scope.boySongList=getSingerService.listBoySong();

     
       });
 
 
 //**********get json data
        
         

         $http.get('js/videos.json').success(function(data){
        
          $scope.videoList=data.videos;

         
       });
 
        
        //***************************************
      
   $scope.getSingerName=function(song){

            $scope.emptyObject={};
//*************************knew the song, get singers sang this song*********
            //************if no any videos were selected

              if (song.ID!=""){

                                    getSingerService.clear();


                           }
                      

                           angular.forEach($scope.videoList,function(s){
                                    
                                           if(s.SONGID==song.ID){
                                              getSingerService.save(s);


                                           }  
                                 
                           })

                          $scope.selectedVideoList=getSingerService.list();
                          $scope.selectedSong=song;
                         
           
        //*******************knew the singer, get video for this singer
            if($scope.selectedVideo4SingerList[1]!=null){

                       getSingerService.clearVideo4Singer();

                       angular.forEach($scope.selectedVideoList,function(s){


                                if(s.SINGERID==$scope.selectedVideo4SingerList[1].SINGERID){

                                          getSingerService.saveVideo4Singer(s);

                                }
                                
                       })

            }else{

                    getSingerService.saveVideo4Singer($scope.emptyObject)

            }


            $scope.selectedVideo4SingerList=getSingerService.listVideo4Singer();

      };


     //************************************
          
      $scope.getVideo4singer=function(video){

              // $scope.video4singer=video.CONTACTNAME;
              // $scope.selectedSinger=video.SINGERNAME;

              $scope.selectedVideo4SingerList=getSingerService.clearVideo4Singer();

              angular.forEach($scope.selectedVideoList,function(s){

                     if(video.SINGERID!=""){

                          if(s.SINGERID==video.SINGERID){

                                  getSingerService.saveVideo4Singer(s);
                                  // $scope.selectedVideo4SingerList.listVideo4Singer();

                         };

                     };


              });

              $scope.selectedVideo4SingerList=getSingerService.listVideo4Singer();
        };
     
      //**********************************

       $scope.getVideoUrl=function(){

         

          return $sce.trustAsResourceUrl("media/"+$scope.selectedVideo4SingerList[1].CONTACTNAME+".mp4");

       };
       
  });

