// Created by iWeb 2.0.4 local-build-20080906

function createMediaStream_id2()
{return IWCreatePhotocast("http://virtualgs.larwe.com/Virtual_GS/Lim_Xin_Mei_files/rss.xml",false,true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://virtualgs.larwe.com/Virtual_GS',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://virtualgs.larwe.com/Virtual_GS',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(176,176),new IWSize(176,0),new IWSize(211,191),27,27,0,new IWSize(26,25)),new IWPhotoFrame([IWCreateImage('Lim_Xin_Mei_files/kid_frame-1_01.jpg'),IWCreateImage('Lim_Xin_Mei_files/kid_frame-1_02.jpg'),IWCreateImage('Lim_Xin_Mei_files/kid_frame-1_03.jpg'),IWCreateImage('Lim_Xin_Mei_files/kid_frame-1_06.jpg'),IWCreateImage('Lim_Xin_Mei_files/kid_frame-1_09.jpg'),IWCreateImage('Lim_Xin_Mei_files/kid_frame-1_08.jpg'),IWCreateImage('Lim_Xin_Mei_files/kid_frame-1_07.jpg'),IWCreateImage('Lim_Xin_Mei_files/kid_frame-1_04.jpg')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,13.000000,13.000000,13.000000,12.000000,121.000000,120.000000,121.000000,120.000000,null,null,null,0.500000),imageStream,range,new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:1,transitionIndex:2},'Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),stroke_0:new IWPhotoFrame([IWCreateImage('Lim_Xin_Mei_files/Playtime_waves_01.png'),IWCreateImage('Lim_Xin_Mei_files/Playtime_waves_02.png'),IWCreateImage('Lim_Xin_Mei_files/Playtime_waves_03.png'),IWCreateImage('Lim_Xin_Mei_files/Playtime_waves_06.jpg'),IWCreateImage('Lim_Xin_Mei_files/Playtime_waves_09.jpg'),IWCreateImage('Lim_Xin_Mei_files/Playtime_waves_08.jpg'),IWCreateImage('Lim_Xin_Mei_files/Playtime_waves_07.jpg'),IWCreateImage('Lim_Xin_Mei_files/Playtime_waves_04.jpg')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,1.000000,18.000000,1.000000,1.000000,43.000000,554.000000,43.000000,554.000000,null,null,null,0.500000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Lim_Xin_Mei_files/Lim_Xin_MeiMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
