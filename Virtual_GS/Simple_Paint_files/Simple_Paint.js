// Created by iWeb 2.0.4 local-build-20090125

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_3:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),stroke_1:new IWEmptyStroke(),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,98),url:'Simple_Paint_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Simple_Paint_files/stroke_1.png'},{rect:new IWRect(1,-1,158,2),url:'Simple_Paint_files/stroke_2.png'},{rect:new IWRect(159,-1,2,2),url:'Simple_Paint_files/stroke_3.png'},{rect:new IWRect(159,1,2,98),url:'Simple_Paint_files/stroke_4.png'},{rect:new IWRect(159,99,2,3),url:'Simple_Paint_files/stroke_5.png'},{rect:new IWRect(1,99,158,3),url:'Simple_Paint_files/stroke_6.png'},{rect:new IWRect(-1,99,2,3),url:'Simple_Paint_files/stroke_7.png'}],new IWSize(160,100)),shadow_2:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Simple_Paint_files/Simple_PaintMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
