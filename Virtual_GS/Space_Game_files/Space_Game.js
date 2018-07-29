// Created by iWeb 2.0.4 local-build-20080906

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="320" height="216" style="height: 200px; left: 0px; position: absolute; top: 32px; width: 320px; z-index: 1; "><param name="src" value="Media/Space.mp4" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="320" height="216" style="height: 200px; left: 0px; position: absolute; top: 32px; width: 320px; z-index: 1; "><param name="src" value="Space_Game_files/Space.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/Space.mp4"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="320" height="216" data="Media/Space.mp4" style="height: 200px; left: 0px; position: absolute; top: 32px; width: 320px; z-index: 1; "><param name="src" value="Media/Space.mp4"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Space_Game_files/Space_GameMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
