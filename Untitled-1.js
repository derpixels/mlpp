// ==UserScript==
// @name         nafapafonobf
// @namespace    http://tampermonkey.net/
// @description  VP Minimap Zone
// @match        https://pixelzone.io/*
// @match        http://pixelzone.io/*
// @grant        none
// ==/UserScript==

var _0x95c7=["between","prototype","apply","min","max","baseTepmlateUrl","https://raw.githubusercontent.com/Autumn-Blaze/ponehs/master/","load","canvas","getElementById","div","createElement","class","post block bc2","setAttribute","innerHTML","<div id=\"minimapbg\" style=\"position: absolute; right: 1em; bottom: 1em;\">","<div class=\"posy\" id=\"posyt\" style=\"background-color: rgba(0, 0, 0, 0.75); color: rgb(250, 250, 250); text-align: center; line-height: 42px; vertical-align: middle; width: auto; height: auto; border-radius: 21px; padding: 6px;\">","<div id=\"minimap-text\" style=\"display: none;\"></div>","<div id=\"minimap-box\" style=\"position: relative;width:420px;height:300px\">","<canvas id=\"minimap\" style=\"width: 100%; height: 100%;z-index:1;position:absolute;top:0;left:0;\"></canvas>","<canvas id=\"minimap-board\" style=\"width: 100%; height: 100%;z-index:2;position:absolute;top:0;left:0;\"></canvas>","<canvas id=\"minimap-cursor\" style=\"width: 100%; height: 100%;z-index:3;position:absolute;top:0;left:0;\"></canvas>","</div><div id=\"minimap-config\" style=\"line-height:20px;\">","<span id=\"hide-map\" style=\"cursor:pointer;\"> Minimizar","</span> | <span id=\"follow-mouse\" style=\"cursor:pointer;\"Seguir o mouse","</span> | Zoom: <span id=\"zoom-plus\" style=\"cursor:pointer;font-weight:bold;\">+</span>  /  ","<span id=\"zoom-minus\" style=\"cursor:pointer;font-weight:bold;\">-</span>","</div>","appendChild","body","minimap","minimap-board","minimap-cursor","width","offsetWidth","height","offsetHeight","2d","getContext","mozImageSmoothingEnabled","webkitImageSmoothingEnabled","msImageSmoothingEnabled","imageSmoothingEnabled","onclick","hide-map","This should do something, but it doesn't","log","display","style","minimap-box","none","minimap-config","minimap-text","block","Mostrar Minimapa","cursor","pointer","default","mousedown","preventDefault","addEventListener","zoom-plus","zoom-minus","mouseup","mousemove","coords","split","substring","Updating Template List","templates/data.json?","getTime","onreadystatechange","readyState","status","responseText","parse","GET","open","send","Refresh got forced.","minimapbg","Mostrar Minimap","push","length","x","y","N\u0413\u0408o tem nada aqui.","","    Load image ","src","images/","name","onload","clearRect","drawImage","beginPath","moveTo","lineTo","strokeStyle","black","stroke","lineWidth","red","rect","href","location","$2","replace","$3","*[style]","querySelectorAll","createOscillator","type","sine","value","frequency","destination","connect","start","stop","random","round","cloneNode",".paletteRow","childNodes","append","firstChild","backgroundColor","match","abs","X0_abs","Y0_abs","selector","left","top","border","innerHeight","innerWidth","img","?","crossOrigin","data","getImageData"," OriginalImg_Canvans.X0_abs="," OriginalImg_Canvans.Y0_abs=","MouseEvents","createEvent","initMouseEvent","dispatchEvent","#canvas","querySelector","iframe","getElementsByTagName","opacity","parentElement","id","fadeOut","getElementsByClassName","message","\u0420\u0457\u0421\u0402\u0420\u0455\u0420\u0457\u0421\u0453\u0421\u0403\u0421\u201a\u0420\u0451\u0421\u201a\u0421\u040a \u0420\u0451\u0420\u0405\u0421\u201a\u0420\xB5\u0421\u0402\u0420\xB0\u0421\u2020\u0420\u0451\u0421\u040b \u0420\u0451\u0420\xB7-\u0420\xB7\u0420\xB0 fadeIn: ","textContent","fadeIn","\u0420\u045f\u0421\u0402\u0420\u0455\u0420\u0457\u0421\u0453\u0421\u0403\u0421\u201a\u0420\u0451\u0421\u201a\u0421\u040a \u0420\u0451\u0420\u0405\u0421\u201a\u0420\xB5\u0421\u0402\u0420\xB0\u0421\u2020\u0420\u0451\u0421\u040b \u0420\u0451\u0420\xB7-\u0420\xB7\u0420\xB0 OriginalImg_Canvans","floor","\u0420\u2014\u0420\xB0\u0420\u0454\u0421\u0402\u0420\xB0\u0421\u0403\u0420\u0451\u0421\u201a\u0421\u040a \u0420\u0406\u0421\u2039\u0420\xB1\u0421\u0402\u0420\xB0\u0420\u0405\u0420\u0405\u0421\u2039\u0420\u0458 \u0421\u2020\u0420\u0406\u0420\xB5\u0421\u201a\u0420\u0455\u0420\u0458 pix canv="," X_e= "," Y_e= ","\u0420\xA6\u0420\u0406\u0420\xB5\u0421\u201a \u0420\u0455\u0421\u0402\u0420\u0451\u0420\u0456-\u0420\u0456\u0420\u0455 \u0420\u0451\u0420\xB7\u0420\u0455\u0420\xB1\u0421\u0402-\u0421\u040f="," ","x2="," y2=","\u0420\u045b\u0421\u20ac\u0420\u0451\u0420\xB1\u0420\u0454\u0420\xB0 \u0420\u2014\u0420\xB0\u0421\u2020\u0420\u0451\u0420\u0454\u0420\xBB\u0420\u0451\u0420\u0406\u0420\xB0\u0420\u0405\u0420\u0451\u0421\u040f (\u0420\u2019\u0420\u0455\u0420\xB7\u0420\u0458\u0420\u0455\u0420\xB6\u0420\u0405\u0420\u0455 \u0420\u0455\u0421\u0402\u0420\u0451\u0420\u0456\u0420\u0451\u0420\u0405-\u0420\xB5 \u0420\u0451\u0420\xB7\u0420\u0455\u0420\xB1\u0421\u0402-\u0420\xB5 \u0420\xB5\u0421\u2030\u0421\u2018 \u0420\u0405\u0420\xB5 \u0420\xB7\u0420\xB0\u0420\u0456\u0421\u0402\u0421\u0453\u0420\xB6\u0420\xB5\u0420\u0405\u0420\u0455)"];Number[_0x95c7[1]][_0x95c7[0]]= function(_0xdd3ex1,_0xdd3ex2){var _0xdd3ex3=Math[_0x95c7[3]][_0x95c7[2]](Math,[_0xdd3ex1,_0xdd3ex2]),_0xdd3ex4=Math[_0x95c7[4]][_0x95c7[2]](Math,[_0xdd3ex1,_0xdd3ex2]);return this> _0xdd3ex3&& this< _0xdd3ex4};var range=1;window[_0x95c7[5]]= _0x95c7[6];window[_0x95c7[61]](_0x95c7[7],function(){re= /(.*)\/\?p=(\-?(?:\d*)),(\-?(?:\d*))/g;rec= /x\:(\d*) y\:(\d*)/g;gameWindow= document[_0x95c7[9]](_0x95c7[8]);coorDOM= null;findCoor();x_window= 0;y_window= 0;x= 0;y= 0;template_list= null;zoomlevel= 9;toggle_show= true;toggle_follow= true;zooming_in= false;zooming_out= false;zoom_time= 100;image_list= [];counter= 0;needed_templates= null;cachebreaker= null;var _0xdd3ex6=document[_0x95c7[11]](_0x95c7[10]);_0xdd3ex6[_0x95c7[14]](_0x95c7[12],_0x95c7[13]);_0xdd3ex6[_0x95c7[15]]= _0x95c7[16]+ _0x95c7[17]+ _0x95c7[18]+ _0x95c7[19]+ _0x95c7[20]+ _0x95c7[21]+ _0x95c7[22]+ _0x95c7[23]+ _0x95c7[24]+ _0x95c7[25]+ _0x95c7[26]+ _0x95c7[27]+ _0x95c7[28]+ _0x95c7[28];document[_0x95c7[30]][_0x95c7[29]](_0xdd3ex6);minimap= document[_0x95c7[9]](_0x95c7[31]);minimap_board= document[_0x95c7[9]](_0x95c7[32]);minimap_cursor= document[_0x95c7[9]](_0x95c7[33]);minimap[_0x95c7[34]]= minimap[_0x95c7[35]];minimap_board[_0x95c7[34]]= minimap_board[_0x95c7[35]];minimap_cursor[_0x95c7[34]]= minimap_cursor[_0x95c7[35]];minimap[_0x95c7[36]]= minimap[_0x95c7[37]];minimap_board[_0x95c7[36]]= minimap_board[_0x95c7[37]];minimap_cursor[_0x95c7[36]]= minimap_cursor[_0x95c7[37]];ctx_minimap= minimap[_0x95c7[39]](_0x95c7[38]);ctx_minimap_board= minimap_board[_0x95c7[39]](_0x95c7[38]);ctx_minimap_cursor= minimap_cursor[_0x95c7[39]](_0x95c7[38]);ctx_minimap[_0x95c7[40]]= false;ctx_minimap[_0x95c7[41]]= false;ctx_minimap[_0x95c7[42]]= false;ctx_minimap[_0x95c7[43]]= false;drawBoard();drawCursor();document[_0x95c7[9]](_0x95c7[45])[_0x95c7[44]]= function(){console[_0x95c7[47]](_0x95c7[46]);toggle_show= false;document[_0x95c7[9]](_0x95c7[50])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[51];document[_0x95c7[9]](_0x95c7[52])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[51];document[_0x95c7[9]](_0x95c7[53])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[54];document[_0x95c7[9]](_0x95c7[53])[_0x95c7[15]]= _0x95c7[55];document[_0x95c7[9]](_0x95c7[53])[_0x95c7[49]][_0x95c7[56]]= _0x95c7[57]};document[_0x95c7[9]](_0x95c7[53])[_0x95c7[44]]= function(){toggle_show= true;document[_0x95c7[9]](_0x95c7[50])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[54];document[_0x95c7[9]](_0x95c7[52])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[54];document[_0x95c7[9]](_0x95c7[53])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[51];document[_0x95c7[9]](_0x95c7[53])[_0x95c7[49]][_0x95c7[56]]= _0x95c7[58];loadTemplates()};document[_0x95c7[9]](_0x95c7[62])[_0x95c7[61]](_0x95c7[59],function(_0xdd3ex7){_0xdd3ex7[_0x95c7[60]]();zooming_in= true;zooming_out= false;zoomIn()},false);document[_0x95c7[9]](_0x95c7[63])[_0x95c7[61]](_0x95c7[59],function(_0xdd3ex7){_0xdd3ex7[_0x95c7[60]]();zooming_out= true;zooming_in= false;zoomOut()},false);document[_0x95c7[9]](_0x95c7[62])[_0x95c7[61]](_0x95c7[64],function(_0xdd3ex7){zooming_in= false},false);document[_0x95c7[9]](_0x95c7[63])[_0x95c7[61]](_0x95c7[64],function(_0xdd3ex7){zooming_out= false},false);gameWindow= document[_0x95c7[9]](_0x95c7[8]);gameWindow[_0x95c7[61]](_0x95c7[64],function(_0xdd3ex8){if(!toggle_show){return};if(!toggle_follow){setTimeout(getCenter,100)}},false);gameWindow[_0x95c7[61]](_0x95c7[65],function(_0xdd3ex8){if(!toggle_show){return};coorDOM= document[_0x95c7[9]](_0x95c7[66]);coordsXY= coorDOM[_0x95c7[15]][_0x95c7[67]](/(\d+)/);x_new= (coordsXY[0][_0x95c7[68]](2)+ coordsXY[1])* 1;y_new= (coordsXY[2][_0x95c7[68]](3)+ coordsXY[3])* 1;if(x!= x_new|| y!= y_new){x= parseInt(x_new);y= parseInt(y_new);if(toggle_follow){x_window= x;y_window= y}else {drawCursor()};loadTemplates()}},false);updateloop()},false);var json_upl=false;function updateloop(){if(!json_upl){console[_0x95c7[47]](_0x95c7[69]);var _0xdd3exb= new XMLHttpRequest();var _0xdd3exc=window[_0x95c7[5]]+ _0x95c7[70]+  new Date()[_0x95c7[71]]();_0xdd3exb[_0x95c7[72]]= function(){if(this[_0x95c7[73]]== 4&& this[_0x95c7[74]]== 200){json_upl= true;template_list= JSON[_0x95c7[76]](this[_0x95c7[75]]);if(!toggle_follow){getCenter()}}};_0xdd3exb[_0x95c7[78]](_0x95c7[77],_0xdd3exc,true);_0xdd3exb[_0x95c7[79]]()};console[_0x95c7[47]](_0x95c7[80]);image_list= [];loadTemplates();setTimeout(updateloop,60000)}function toggleShow(){toggle_show=  !toggle_show;if(toggle_show){document[_0x95c7[9]](_0x95c7[50])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[54];document[_0x95c7[9]](_0x95c7[52])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[54];document[_0x95c7[9]](_0x95c7[53])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[51];document[_0x95c7[9]](_0x95c7[81])[_0x95c7[44]]= function(){};loadTemplates()}else {document[_0x95c7[9]](_0x95c7[50])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[51];document[_0x95c7[9]](_0x95c7[52])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[51];document[_0x95c7[9]](_0x95c7[53])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[54];document[_0x95c7[9]](_0x95c7[53])[_0x95c7[15]]= _0x95c7[82];document[_0x95c7[9]](_0x95c7[81])[_0x95c7[44]]= function(){toggleShow()}}}function zoomIn(){if(!zooming_in){return};zoomlevel= zoomlevel* 1.1;if(zoomlevel> 45){zoomlevel= 45;return};drawBoard();drawCursor();loadTemplates();setTimeout(zoomIn,zoom_time)}function zoomOut(){if(!zooming_out){return};zoomlevel= zoomlevel/ 1.1;if(zoomlevel< 1){zoomlevel= 1;return};drawBoard();drawCursor();loadTemplates();setTimeout(zoomOut,zoom_time)}function loadTemplates(){if(!toggle_show){return};if(template_list== null){return};var _0xdd3ex11=x_window* 1- minimap[_0x95c7[34]]/ zoomlevel/ 2;var _0xdd3ex12=x_window* 1+ minimap[_0x95c7[34]]/ zoomlevel/ 2;var _0xdd3ex13=y_window* 1- minimap[_0x95c7[36]]/ zoomlevel/ 2;var _0xdd3ex14=y_window* 1+ minimap[_0x95c7[36]]/ zoomlevel/ 2;var _0xdd3ex15=[];for(var _0xdd3ex16 in template_list){_0xdd3ex15[_0x95c7[83]](_0xdd3ex16)};needed_templates= [];var _0xdd3ex17;for(_0xdd3ex17= 0;_0xdd3ex17< _0xdd3ex15[_0x95c7[84]];_0xdd3ex17++){template= _0xdd3ex15[_0xdd3ex17];var _0xdd3ex18=parseInt(template_list[template][_0x95c7[85]])* 1;var _0xdd3ex19=parseInt(template_list[template][_0x95c7[86]])* 1;var _0xdd3ex1a=parseInt(template_list[template][_0x95c7[85]])+ parseInt(template_list[template][_0x95c7[34]]);var _0xdd3ex1b=parseInt(template_list[template][_0x95c7[86]])+ parseInt(template_list[template][_0x95c7[36]]);if(!x_window[_0x95c7[0]](_0xdd3ex18- range* 1,_0xdd3ex1a+ range* 1)){continue};if(!y_window[_0x95c7[0]](_0xdd3ex19- range* 1,_0xdd3ex1b+ range* 1)){continue};needed_templates[_0x95c7[83]](template)};if(needed_templates[_0x95c7[84]]== 0){if(zooming_in== false&& zooming_out== false){document[_0x95c7[9]](_0x95c7[50])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[51];document[_0x95c7[9]](_0x95c7[53])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[54];document[_0x95c7[9]](_0x95c7[53])[_0x95c7[15]]= _0x95c7[87]}}else {document[_0x95c7[9]](_0x95c7[50])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[54];document[_0x95c7[9]](_0x95c7[53])[_0x95c7[49]][_0x95c7[48]]= _0x95c7[51];counter= 0;for(_0xdd3ex17= 0;_0xdd3ex17< needed_templates[_0x95c7[84]];_0xdd3ex17++){if(image_list[needed_templates[_0xdd3ex17]]== null){loadImage(needed_templates[_0xdd3ex17])}else {counter+= 1;if(counter== needed_templates[_0x95c7[84]]){drawTemplates()}}}}}var My_imagename=_0x95c7[88];function loadImage(_0xdd3ex1e,_0xdd3ex1f){console[_0x95c7[47]](_0x95c7[89]+ _0xdd3ex1e);image_list[_0xdd3ex1e]=  new Image();if(cachebreaker!= null){image_list[_0xdd3ex1e][_0x95c7[90]]= window[_0x95c7[5]]+ _0x95c7[91]+ template_list[_0xdd3ex1e][_0x95c7[92]]}else {image_list[_0xdd3ex1e][_0x95c7[90]]= window[_0x95c7[5]]+ _0x95c7[91]+ template_list[_0xdd3ex1e][_0x95c7[92]]};image_list[_0xdd3ex1e][_0x95c7[93]]= function(){counter+= 1;My_imagename= _0xdd3ex1e;if(counter== needed_templates[_0x95c7[84]]){drawTemplates()}}}function drawTemplates(){ctx_minimap[_0x95c7[94]](0,0,minimap[_0x95c7[34]],minimap[_0x95c7[36]]);var _0xdd3ex11=x_window* 1- minimap[_0x95c7[34]]/ zoomlevel/ 2;var _0xdd3ex13=y_window* 1- minimap[_0x95c7[36]]/ zoomlevel/ 2;var _0xdd3ex17;for(_0xdd3ex17= 0;_0xdd3ex17< needed_templates[_0x95c7[84]];_0xdd3ex17++){var _0xdd3ex21=needed_templates[_0xdd3ex17];var _0xdd3ex22=(template_list[_0xdd3ex21][_0x95c7[85]]* 1- _0xdd3ex11* 1)* zoomlevel;var _0xdd3ex23=(template_list[_0xdd3ex21][_0x95c7[86]]* 1- _0xdd3ex13* 1)* zoomlevel;var _0xdd3ex24=zoomlevel* image_list[_0xdd3ex21][_0x95c7[34]];var _0xdd3ex25=zoomlevel* image_list[_0xdd3ex21][_0x95c7[36]];var _0xdd3ex26=image_list[_0xdd3ex21];ctx_minimap[_0x95c7[95]](_0xdd3ex26,_0xdd3ex22,_0xdd3ex23,_0xdd3ex24,_0xdd3ex25);My_Canvans(_0xdd3ex26,template_list[_0xdd3ex21][_0x95c7[85]],template_list[_0xdd3ex21][_0x95c7[86]])}}function drawBoard(){ctx_minimap_board[_0x95c7[94]](0,0,minimap_board[_0x95c7[34]],minimap_board[_0x95c7[36]]);if(zoomlevel<= 4.6){return};ctx_minimap_board[_0x95c7[96]]();var _0xdd3ex28=minimap_board[_0x95c7[34]]+ zoomlevel;var _0xdd3ex29=minimap_board[_0x95c7[36]]+ zoomlevel;var _0xdd3ex2a=(minimap[_0x95c7[34]]/ 2)% zoomlevel- zoomlevel;var _0xdd3ex2b=(minimap[_0x95c7[36]]/ 2)% zoomlevel- zoomlevel;var _0xdd3ex2c=1* zoomlevel;for(var _0xdd3ex2d=0;_0xdd3ex2d<= _0xdd3ex28;_0xdd3ex2d+= _0xdd3ex2c){ctx_minimap_board[_0x95c7[97]](_0xdd3ex2d+ _0xdd3ex2a,_0xdd3ex2b);ctx_minimap_board[_0x95c7[98]](_0xdd3ex2d+ _0xdd3ex2a,_0xdd3ex29+ _0xdd3ex2b)};for(var _0xdd3ex2d=0;_0xdd3ex2d<= _0xdd3ex29;_0xdd3ex2d+= _0xdd3ex2c){ctx_minimap_board[_0x95c7[97]](_0xdd3ex2a,_0xdd3ex2d+ _0xdd3ex2b);ctx_minimap_board[_0x95c7[98]](_0xdd3ex28+ _0xdd3ex2a,_0xdd3ex2d+ _0xdd3ex2b)};ctx_minimap_board[_0x95c7[99]]= _0x95c7[100];ctx_minimap_board[_0x95c7[101]]()}function drawCursor(){var _0xdd3ex11=x_window* 1- minimap[_0x95c7[34]]/ zoomlevel/ 2;var _0xdd3ex12=x_window* 1+ minimap[_0x95c7[34]]/ zoomlevel/ 2;var _0xdd3ex13=y_window* 1- minimap[_0x95c7[36]]/ zoomlevel/ 2;var _0xdd3ex14=y_window* 1+ minimap[_0x95c7[36]]/ zoomlevel/ 2;ctx_minimap_cursor[_0x95c7[94]](0,0,minimap_cursor[_0x95c7[34]],minimap_cursor[_0x95c7[36]]);if(x< _0xdd3ex11|| x> _0xdd3ex12|| y< _0xdd3ex13|| y> _0xdd3ex14){return};xoff_c= x- _0xdd3ex11;yoff_c= y- _0xdd3ex13;ctx_minimap_cursor[_0x95c7[96]]();ctx_minimap_cursor[_0x95c7[102]]= zoomlevel/ 3;ctx_minimap_cursor[_0x95c7[99]]= _0x95c7[103];ctx_minimap_cursor[_0x95c7[104]](zoomlevel* xoff_c,zoomlevel* yoff_c,zoomlevel,zoomlevel);ctx_minimap_cursor[_0x95c7[101]]()}function getCenter(){var _0xdd3exc=window[_0x95c7[106]][_0x95c7[105]];x_window= _0xdd3exc[_0x95c7[108]](re,_0x95c7[107]);y_window= _0xdd3exc[_0x95c7[108]](re,_0x95c7[109]);if(x_window== _0xdd3exc|| y_window== _0xdd3exc){x_window= 0;y_window= 0};loadTemplates()}function findCoor(){var _0xdd3ex31=document[_0x95c7[111]](_0x95c7[110]);coorDOM= document[_0x95c7[9]](_0x95c7[66])}function Beep(_0xdd3ex33){var _0xdd3ex34= new AudioContext();var _0xdd3ex35=_0xdd3ex34[_0x95c7[112]]();_0xdd3ex35[_0x95c7[113]]= _0x95c7[114];_0xdd3ex35[_0x95c7[116]][_0x95c7[115]]= _0xdd3ex33;_0xdd3ex35[_0x95c7[118]](_0xdd3ex34[_0x95c7[117]]);_0xdd3ex35[_0x95c7[119]]();setTimeout(function(){_0xdd3ex35[_0x95c7[120]]()},1000)}function randomInteger(_0xdd3ex3,_0xdd3ex4){var _0xdd3ex37=_0xdd3ex3- 0.5+ Math[_0x95c7[121]]()* (_0xdd3ex4- _0xdd3ex3+ 1);_0xdd3ex37= Math[_0x95c7[122]](_0xdd3ex37);return _0xdd3ex37}function Get_Select_Color(){var _0xdd3ex39=[-1,-1,-1];var _0xdd3ex6=document[_0x95c7[11]](_0x95c7[10]);var _0xdd3ex3a=document[_0x95c7[111]](_0x95c7[124])[0][_0x95c7[123]](true);_0xdd3ex6[_0x95c7[29]](_0xdd3ex3a);var _0xdd3ex3b=[];if(!document[_0x95c7[111]](_0x95c7[124])[1]=== false){var _0xdd3ex3c=document[_0x95c7[111]](_0x95c7[124])[1][_0x95c7[123]](true);_0xdd3ex3b[0]= _0xdd3ex3c[_0x95c7[125]][0];_0xdd3ex3b[1]= _0xdd3ex3c[_0x95c7[125]][1];_0xdd3ex3b[2]= _0xdd3ex3c[_0x95c7[125]][2];_0xdd3ex3b[3]= _0xdd3ex3c[_0x95c7[125]][3];_0xdd3ex3b[4]= _0xdd3ex3c[_0x95c7[125]][4];_0xdd3ex3b[5]= _0xdd3ex3c[_0x95c7[125]][5];_0xdd3ex3b[6]= _0xdd3ex3c[_0x95c7[125]][6];_0xdd3ex3b[7]= _0xdd3ex3c[_0x95c7[125]][7];_0xdd3ex6[_0x95c7[125]][0][_0x95c7[126]](_0xdd3ex3b[0],_0xdd3ex3b[1],_0xdd3ex3b[2],_0xdd3ex3b[3],_0xdd3ex3b[4],_0xdd3ex3b[5],_0xdd3ex3b[6],_0xdd3ex3b[7])};for(var _0xdd3ex17=0;_0xdd3ex17<= 15;_0xdd3ex17++){if(_0xdd3ex3a[_0x95c7[125]][_0xdd3ex17][_0x95c7[127]]!== null){var _0xdd3ex3d=_0xdd3ex3a[_0x95c7[125]][_0xdd3ex17][_0x95c7[49]][_0x95c7[128]];_0xdd3ex3d= _0xdd3ex3d[_0x95c7[129]](/\d+/g);_0xdd3ex39[0]= Number(_0xdd3ex3d[0]);_0xdd3ex39[1]= Number(_0xdd3ex3d[1]);_0xdd3ex39[2]= Number(_0xdd3ex3d[2]);break}};return _0xdd3ex39}function Condition_Select_Color(_0xdd3ex3f,_0xdd3ex40){var _0xdd3ex41=-1,_0xdd3ex42=-1;_0xdd3ex41= Math[_0x95c7[130]](_0xdd3ex40[0]- _0xdd3ex3f[0])+ Math[_0x95c7[130]](_0xdd3ex40[1]- _0xdd3ex3f[1])+ Math[_0x95c7[130]](_0xdd3ex40[2]- _0xdd3ex3f[2]);_0xdd3ex41= 100* _0xdd3ex41/ (3* 255);_0xdd3ex42= Math[_0x95c7[130]](_0xdd3ex40[0]- pix_ogigin_d[I])+ Math[_0x95c7[130]](_0xdd3ex40[1]- pix_ogigin_d[I+ 1])+ Math[_0x95c7[130]](_0xdd3ex40[2]- pix_ogigin_d[I+ 2]);_0xdd3ex42= 100* _0xdd3ex42/ (3* 255);if((_0xdd3ex41< 5)|| (_0xdd3ex42> 5)|| (pix_ogigin_d[I+ 3]!== 255)){return true};return false}var pix_ogigin_d;var I=0;function Condition_Original_pix(_0xdd3ex46,_0xdd3ex47,_0xdd3ex48){var _0xdd3ex49=-OriginalImg_Canvans[_0x95c7[131]]+ _0xdd3ex46;var _0xdd3ex4a=-OriginalImg_Canvans[_0x95c7[132]]+ _0xdd3ex47;var _0xdd3ex4b=((OriginalImg_Canvans[_0x95c7[131]]+ OriginalImg_Canvans[_0x95c7[34]])> _0xdd3ex46)&& (_0xdd3ex46>= OriginalImg_Canvans[_0x95c7[131]]);var _0xdd3ex4c=((OriginalImg_Canvans[_0x95c7[132]]+ OriginalImg_Canvans[_0x95c7[36]])> _0xdd3ex47)&& (_0xdd3ex47>= OriginalImg_Canvans[_0x95c7[132]]);var _0xdd3ex4d=-1;_0xdd3ex46= Math[_0x95c7[130]](OriginalImg_Canvans[_0x95c7[131]]- _0xdd3ex46);_0xdd3ex47= Math[_0x95c7[130]](OriginalImg_Canvans[_0x95c7[132]]- _0xdd3ex47);I= (_0xdd3ex47* 4)* OriginalImg_Canvans[_0x95c7[34]]+ _0xdd3ex46* 4;_0xdd3ex4d= Math[_0x95c7[130]](_0xdd3ex48[0]- pix_ogigin_d[I])+ Math[_0x95c7[130]](_0xdd3ex48[1]- pix_ogigin_d[I+ 1])+ Math[_0x95c7[130]](_0xdd3ex48[2]- pix_ogigin_d[I+ 2]);_0xdd3ex4d= 100* _0xdd3ex4d/ (3* 255);if((_0xdd3ex4d< 5)|| (_0xdd3ex4b=== false)|| (_0xdd3ex4c=== false)){return true}else {return false}}var Selector_width,Selector_height,Selector_border;var Left_selector,Top_selector;var x_a,y_a;var X_LT,Y_LT,Y_LB,X_RT;var x0_LT,y0_LT;function Get_Coordinats(){var _0xdd3ex5c=document[_0x95c7[9]](_0x95c7[133]);Left_selector= parseFloat(_0xdd3ex5c[_0x95c7[49]][_0x95c7[134]]);Top_selector= parseFloat(_0xdd3ex5c[_0x95c7[49]][_0x95c7[135]]);Selector_width= parseFloat(_0xdd3ex5c[_0x95c7[49]][_0x95c7[34]]);Selector_height= parseFloat(_0xdd3ex5c[_0x95c7[49]][_0x95c7[36]]);Selector_border= parseFloat(_0xdd3ex5c[_0x95c7[49]][_0x95c7[136]]);var _0xdd3ex5d=document[_0x95c7[9]](_0x95c7[66]);var _0xdd3ex5e=_0xdd3ex5d[_0x95c7[15]][_0x95c7[67]](/(\d+)/);var _0xdd3ex5f=(_0xdd3ex5e[0][_0x95c7[68]](2)+ _0xdd3ex5e[1])* 1;var _0xdd3ex60=(_0xdd3ex5e[2][_0x95c7[68]](3)+ _0xdd3ex5e[3])* 1;if(x_a!= _0xdd3ex5f|| y_a!= _0xdd3ex60){x_a= parseInt(_0xdd3ex5f);y_a= parseInt(_0xdd3ex60)};X_LT= x_a- (~~(Left_selector/ (Selector_width+ Selector_border)))+ 1;Y_LT= y_a- (~~(Top_selector/ (Selector_height+ Selector_border)))+ 1;Y_LB= Y_LT+ (~~(window[_0x95c7[137]]/ (Selector_height+ Selector_border)))- 2;X_RT= X_LT+ (~~(window[_0x95c7[138]]/ (Selector_width+ Selector_border)))- 2;x0_LT= Left_selector- Math[_0x95c7[130]](X_LT- x_a)* (Selector_width+ Selector_border);if(x0_LT< 0){x0_LT= Left_selector+ Math[_0x95c7[130]](X_LT- x_a)* (Selector_width+ Selector_border)};y0_LT= Top_selector- Math[_0x95c7[130]](Y_LT- y_a)* (Selector_height+ Selector_border);if(y0_LT< 0){y0_LT= Top_selector+ Math[_0x95c7[130]](Y_LT- y_a)* (Selector_height+ Selector_border)};X_LT= X_LT;Y_LT= Y_LT}var OriginalImg_Canvans=document[_0x95c7[11]](_0x95c7[8]);OriginalImg_Canvans[_0x95c7[139]]= _0x95c7[88];OriginalImg_Canvans[_0x95c7[34]]= 0;OriginalImg_Canvans[_0x95c7[36]]= 0;OriginalImg_Canvans[_0x95c7[131]]= 9999;OriginalImg_Canvans[_0x95c7[132]]= 9999;var imgObj_onload=false;function My_Canvans(_0xdd3ex26,_0xdd3ex64,_0xdd3ex65){if(_0xdd3ex26[_0x95c7[90]]=== OriginalImg_Canvans[_0x95c7[139]][_0x95c7[90]]&&  !!OriginalImg_Canvans[_0x95c7[139]]){return};var _0xdd3ex66=X_LT+ (X_RT- X_LT)/ 2;var _0xdd3ex67=Y_LT+ (Y_LB- Y_LT)/ 2;var _0xdd3ex4b=((_0xdd3ex64+ _0xdd3ex26[_0x95c7[34]])> _0xdd3ex66)&& (_0xdd3ex66>= _0xdd3ex64);var _0xdd3ex4c=((_0xdd3ex65+ _0xdd3ex26[_0x95c7[36]])> _0xdd3ex67)&& (_0xdd3ex67>= _0xdd3ex65);var _0xdd3ex68=_0xdd3ex4b&& _0xdd3ex4c;_0xdd3ex4b= ((OriginalImg_Canvans[_0x95c7[131]]+ OriginalImg_Canvans[_0x95c7[34]])> _0xdd3ex66)&& (_0xdd3ex66>= OriginalImg_Canvans[_0x95c7[131]]);_0xdd3ex4c= ((OriginalImg_Canvans[_0x95c7[132]]+ OriginalImg_Canvans[_0x95c7[36]])> _0xdd3ex67)&& (_0xdd3ex67>= OriginalImg_Canvans[_0x95c7[132]]);var _0xdd3ex69=_0xdd3ex4b&& _0xdd3ex4c;if(_0xdd3ex68=== false|| _0xdd3ex69=== true){return};if(imgObj_onload=== true){return};imgObj_onload= true;OriginalImg_Canvans[_0x95c7[34]]= _0xdd3ex26[_0x95c7[34]];OriginalImg_Canvans[_0x95c7[36]]= _0xdd3ex26[_0x95c7[36]];OriginalImg_Canvans[_0x95c7[131]]= _0xdd3ex64;OriginalImg_Canvans[_0x95c7[132]]= _0xdd3ex65;OriginalImg_Canvans[_0x95c7[139]]= _0xdd3ex26;var _0xdd3ex6a= new Image();_0xdd3ex6a[_0x95c7[90]]= _0xdd3ex26[_0x95c7[90]]+ _0x95c7[140]+  new Date()[_0x95c7[71]]();_0xdd3ex6a[_0x95c7[14]](_0x95c7[141],_0x95c7[88]);_0xdd3ex6a[_0x95c7[93]]= function(){OriginalImg_Canvans[_0x95c7[39]](_0x95c7[38])[_0x95c7[95]](_0xdd3ex6a,0,0,_0xdd3ex6a[_0x95c7[34]],_0xdd3ex6a[_0x95c7[36]]);pix_ogigin_d= OriginalImg_Canvans[_0x95c7[39]](_0x95c7[38])[_0x95c7[143]](0,0,_0xdd3ex6a[_0x95c7[34]],_0xdd3ex6a[_0x95c7[36]])[_0x95c7[142]];console[_0x95c7[47]](_0xdd3ex6a[_0x95c7[90]]+ _0x95c7[144]+ OriginalImg_Canvans[_0x95c7[131]]+ _0x95c7[145]+ OriginalImg_Canvans[_0x95c7[132]]);console[_0x95c7[47]](OriginalImg_Canvans[_0x95c7[39]](_0x95c7[38])[_0x95c7[143]](0,0,1,1)[_0x95c7[142]]);imgObj_onload= false}}function triggerMouseEvent(_0xdd3ex6c,_0xdd3ex6d,_0xdd3ex6e,_0xdd3ex6f){var _0xdd3ex70=document[_0x95c7[147]](_0x95c7[146]);if(_0xdd3ex6e>= 1&& _0xdd3ex6f>= 1){_0xdd3ex70[_0x95c7[148]](_0xdd3ex6d,true,true,window,null,0,0,_0xdd3ex6e,_0xdd3ex6f,false,false,false,false,0,null);_0xdd3ex6c[_0x95c7[149]](_0xdd3ex70)}}var Capcha_src=_0x95c7[88];var mai_i_alert=false;var Cap_Confirm=false;var Cap_en=false;var targetNode=document[_0x95c7[151]](_0x95c7[150]);var intervalID=setInterval(function(){F_Interval()},5000);function F_Interval(){var _0xdd3ex78=document[_0x95c7[153]](_0x95c7[152])[1];if(!_0xdd3ex78=== false){if(Capcha_src!== _0xdd3ex78[_0x95c7[90]]&& Capcha_src!== _0x95c7[88]){Capcha_src= document[_0x95c7[153]](_0x95c7[152])[1][_0x95c7[90]];return}};var _0xdd3ex79=0;if(!_0xdd3ex78=== false){Capcha_src= _0xdd3ex78[_0x95c7[90]];_0xdd3ex79= _0xdd3ex78[_0x95c7[155]][_0x95c7[155]][_0x95c7[49]][_0x95c7[154]]};if((Number(_0xdd3ex79)=== 0)&& (Capcha_src!== _0x95c7[88])){if(Cap_en){Cap_en= false;return};Cap_Confirm= false;if(document[_0x95c7[158]](_0x95c7[157])[0][_0x95c7[127]][_0x95c7[156]]=== _0x95c7[159]){console[_0x95c7[47]](_0x95c7[160]+ document[_0x95c7[158]](_0x95c7[162])[0][_0x95c7[127]][_0x95c7[161]]);return};Get_Coordinats();var _0xdd3ex6e,_0xdd3ex6f;var _0xdd3ex7a=randomInteger(X_LT,X_RT);var _0xdd3ex7b=randomInteger(Y_LT,Y_LB);var _0xdd3ex7c=_0xdd3ex7a+ 1,_0xdd3ex7d=_0xdd3ex7b;var _0xdd3ex7e=(Math[_0x95c7[130]](X_LT- X_RT)+ 1)* (Math[_0x95c7[130]](Y_LT- Y_LB)+ 1);var _0xdd3ex16=0;var _0xdd3ex40=Get_Select_Color();if(_0xdd3ex7e> 865000){if(mai_i_alert=== false){mai_i_alert= true};return};mai_i_alert= false;if(OriginalImg_Canvans[_0x95c7[39]](_0x95c7[38])[_0x95c7[143]](0,0,1,1)[_0x95c7[142]][3]=== 0){console[_0x95c7[47]](_0x95c7[163]);OriginalImg_Canvans[_0x95c7[139]]= _0x95c7[88];counter-= 1;loadImage(My_imagename);return};var _0xdd3ex7f=gameWindow[_0x95c7[39]](_0x95c7[38])[_0x95c7[143]](0,0,gameWindow[_0x95c7[34]],gameWindow[_0x95c7[36]]);while((_0xdd3ex7a!== _0xdd3ex7c)|| (_0xdd3ex7b!== _0xdd3ex7d)){if(_0xdd3ex7c> X_RT){_0xdd3ex7d= _0xdd3ex7d+ 1;_0xdd3ex7c= X_LT;_0xdd3ex16--};if(_0xdd3ex7d> Y_LB){_0xdd3ex7c= X_LT;_0xdd3ex7d= Y_LT};_0xdd3ex6e= x0_LT+ Math[_0x95c7[130]](X_LT- _0xdd3ex7c)* (Selector_width+ Selector_border);_0xdd3ex6f= y0_LT+ Math[_0x95c7[130]](Y_LT- _0xdd3ex7d)* (Selector_height+ Selector_border);var _0xdd3ex17=(Math[_0x95c7[164]](_0xdd3ex6f)* 4)* gameWindow[_0x95c7[34]]+ Math[_0x95c7[164]](_0xdd3ex6e)* 4;var _0xdd3ex3f=[_0xdd3ex7f[_0x95c7[142]][_0xdd3ex17],_0xdd3ex7f[_0x95c7[142]][_0xdd3ex17+ 1],_0xdd3ex7f[_0x95c7[142]][_0xdd3ex17+ 2],_0xdd3ex7f[_0x95c7[142]][_0xdd3ex17+ 3]];if(Condition_Original_pix(_0xdd3ex7c,_0xdd3ex7d,_0xdd3ex3f)=== false){if(Condition_Select_Color(_0xdd3ex3f,_0xdd3ex40)=== false){console[_0x95c7[47]](_0x95c7[165]+ _0xdd3ex3f+ _0x95c7[166]+ (_0xdd3ex7c)+ _0x95c7[167]+ (_0xdd3ex7d));console[_0x95c7[47]](_0x95c7[168]+ pix_ogigin_d[I]+ _0x95c7[169]+ pix_ogigin_d[I+ 1]+ _0x95c7[169]+ pix_ogigin_d[I+ 2]+ _0x95c7[169]+ pix_ogigin_d[I+ 3]);console[_0x95c7[47]](_0x95c7[170]+ _0xdd3ex6e+ _0x95c7[171]+ _0xdd3ex6f);break}};_0xdd3ex7c++;_0xdd3ex16++;if(_0xdd3ex16> _0xdd3ex7e+ 1){console[_0x95c7[47]](_0x95c7[172]);return}};if((_0xdd3ex7a=== _0xdd3ex7c)&& (_0xdd3ex7b=== _0xdd3ex7d)){return};triggerMouseEvent(targetNode,_0x95c7[65],_0xdd3ex6e,_0xdd3ex6f);triggerMouseEvent(targetNode,_0x95c7[59],_0xdd3ex6e,_0xdd3ex6f);setTimeout(function(){triggerMouseEvent(targetNode,_0x95c7[64],_0xdd3ex6e,_0xdd3ex6f)},(50+ randomInteger(0,100)));clearInterval(intervalID);intervalID= setInterval(function(){F_Interval()},(3500+ randomInteger(0,400)))}else {if(Cap_Confirm=== false&& Capcha_src!== _0x95c7[88]){Cap_Confirm= true;Cap_en= true;Beep(400)}else {Cap_en= true}}}