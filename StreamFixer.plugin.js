/**
 * @name StreamFixer
 * @version 1.0.3
 * @website https://github.com/Nerve-Damage-sys/BetterDiscordAddons
 * @source https://raw.githubusercontent.com/Nerve-Damage-sys/BetterDiscordAddons/main/StreamFixer.plugin.js
 * @updateUrl https://raw.githubusercontent.com/Nerve-Damage-sys/BetterDiscordAddons/main/StreamFixer.plugin.js
 */
/*@cc_on
@if (@_jscript)
@else@*/	

module.exports = (() => {
    const config = {info:{name:"Stream Fixer",authors:[{name:"Connor",discord_id:"",github_username:"Nerve-Damage-sys",twitter_username:"Nerve-Damage-sys"}],version:"1.0.3",description:"Fixes Streams",github:"https://github.com/Nerve-Damage-sys/BetterDiscordAddons",github_raw:"https://raw.githubusercontent.com/Nerve-Damage-sys/BetterDiscordAddons/main/StreamFixer.plugin.js"},changelog:[{title:"Changes",items:["Better settings memory."]}],defaultConfig:[{},{}],main:"index.js"};

    return !global.ZeresPluginLibrary ? class {
        constructor() {this._config = config;}
        getName() {return config.info.name;}
        getAuthor() {return config.info.authors.map(a => a.name).join(", ");}
        getDescription() {return config.info.description;}
        getVersion() {return config.info.version;}
        load() {
            BdApi.showConfirmationModal("Library Missing", `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
                confirmText: "Download Now",
                cancelText: "Cancel",
                onConfirm: () => {
                    require("request").get("https://raw.githubusercontent.com/Nerve-Damage-sys/BetterDiscordAddons/main/StreamFixer.plugin.js", async (error, response, body) => {
                        if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/Nerve-Damage-sys/BetterDiscordAddons/main/StreamFixer.plugin.js");
                        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
                    });
                }
            });
        }
        start() {}
        stop() {}
    } : (([Plugin, Api]) => {
	
    const plugin = (Plugin, Api) => {
    const {Patcher, WebpackModules, DiscordModules, PluginUtilities, Utilities} = Api;
	
	function onGotcha(x,y,mouseDown,mouse2Down,SizeX,SizeY)
	{
		
	var OriginalX = x;
	if (SizeX == 500 && SizeY == 500)	qwerty
	{
		try{x = localStorage.getItem('x');} catch(er){}
		try{y = localStorage.getItem('x');} catch(er){}
		try{SizeX = localStorage.getItem('SizeX');} catch(er){}
		try{SizeY = localStorage.getItem('SizeY');} catch(er){}
		if (x != OriginalX)
		{
			return;
		}
	}
	
	var oldX = 0;
	
	try{document.getElementsByClassName("pictureInPictureVideo-2iKsGg da-pictureInPictureVideo idle-70Gg3H da-idle")[0].style.height = SizeY + "px"} catch(er) {};
	try{document.getElementsByClassName("pictureInPictureVideo-2iKsGg da-pictureInPictureVideo idle-70Gg3H da-idle")[0].style.width = SizeX + "px"} catch(er) {};
	try{document.getElementsByClassName("pictureInPictureWindow-1B5qSe da-pictureInPictureWindow")[0].style.left = x} catch(er) {};
	try{document.getElementsByClassName("pictureInPictureWindow-1B5qSe da-pictureInPictureWindow")[0].style.top = y} catch(er) {};
	
	try{document.getElementsByClassName("previewWrapper-39cUHY video-1kutKI da-previewWrapper da-video")[0].onmouseover =
	function ()
	{
		try{document.getElementsByClassName("scroller-3BxosC da-scroller thin-1ybCId scrollerBase-289Jih")[0].remove()}catch(er){}
	}}catch(er){}
	
	try{var Streams = document.getElementsByClassName("previewWrapper-39cUHY video-1kutKI da-previewWrapper da-video")
	for (let i=0;i<Streams.length;i++)
	{
		try{document.getElementsByClassName("previewWrapper-39cUHY video-1kutKI da-previewWrapper da-video")[i].onmouseover = 
		function ()
		{
			try{document.getElementsByClassName("scroller-3BxosC da-scroller thin-1ybCId scrollerBase-289Jih")[0].remove()}catch(er){}
			try{document.getElementsByClassName("menu-3sdvDG da-menu styleFlexible-wGDiIL da-styleFlexible")[0].remove()}catch(er){}
		}}catch(er){}
	}}catch(er){}
	
	try{var Streams2 = document.getElementsByClassName("tile-kezkfV da-tile noHorizontalMargin-3pr3HN da-noHorizontalMargin")
	for (let i=0;i<Streams2.length;i++)
	{
		try{document.getElementsByClassName("tile-kezkfV da-tile noHorizontalMargin-3pr3HN da-noHorizontalMargin")[i].onmouseover = 
		function ()
		{
			try{document.getElementsByClassName("scroller-3BxosC da-scroller thin-1ybCId scrollerBase-289Jih")[0].remove()}catch(er){}
			try{document.getElementsByClassName("menu-3sdvDG da-menu styleFlexible-wGDiIL da-styleFlexible")[0].remove()}catch(er){}
		}}catch(er){}
	}}catch(er){}
	
	try{document.getElementById("widthSlider").value = SizeX}catch(er){}
	try{document.getElementById("heightSlider").value = SizeY}catch(er){}
	
	if (document.getElementsByClassName("pictureInPictureVideo-2iKsGg da-pictureInPictureVideo idle-70Gg3H da-idle")[0])
	{
		try{document.getElementsByClassName("pictureInPictureWindow-1B5qSe da-pictureInPictureWindow")[0].style.transform = "translateX(0px) translateY(0px) translateZ(0px)"} catch(er) {};
		if (!document.getElementById("heightSlider"))
		{
			try{document.getElementsByClassName("wrapper-24pKcD da-wrapper")[0].insertAdjacentHTML("afterbegin",'<div class="slidecontainer" style="column-count: 2;"><div class="actions-aUdUfC da-actions" style="color: white;font-size: 16px;padding-top: 5px;">Stream Height</div><div class="actions-aUdUfC da-actions" style="color: white;font-size: 16px;padding-top: 5px;">Stream Width</div><input type="range" min="1" max="1000" value="500" class="slider" id="heightSlider" style="width: 95%;margin-top: 5px;"><input type="range" min="1" max="1000" value="500" class="slider" id="widthSlider" style="width: 95%;margin-top: 3px;"></div>')} catch(er) {}
		}
	}
	else
	{
		if (document.getElementById("heightSlider"))
		{ 
			try{document.getElementsByClassName("slidecontainer")[0].remove();} catch (er) {}
		}
	}
	
	try{document.getElementById("widthSlider").oninput = function() {
			document.getElementById("widthSlider").value = this.value
			SizeX = document.getElementById("widthSlider").value 
	}}catch(er){}
	
	try{document.getElementById("heightSlider").oninput = function() {
			document.getElementById("heightSlider").value = this.value
			SizeY = this.value
	}} catch(er){}
	
	try{document.getElementsByClassName("pictureInPicture-3VocJq da-pictureInPicture")[0].onmouseup = function()
	{
		mouseDown = 0; event.preventDefault(); event.stopPropagation(); console.log(mouseDown)
	}} catch(er) {}; 
	
	try{document.getElementsByClassName("pictureInPicture-3VocJq da-pictureInPicture")[0].onmouseover = function() 
	{
		mouseDown = 0; 
		document.getElementsByClassName("videoControls-38i4kP da-videoControls")[0].style.opacity = 0.25;
		event.preventDefault(); 
		event.stopPropagation();
	}}catch(er) {};
	
	try{document.getElementsByClassName("pictureInPicture-3VocJq da-pictureInPicture")[0].onmousedown = function() {
				if (event.which == 1)
				{
					mouseDown = 1;
					event.preventDefault(); 
					event.stopPropagation(); 
				}
			}
		} catch(er) {}; 
		
	try {document.getElementsByClassName("pictureInPicture-3VocJq da-pictureInPicture")[0].onmousemove = function() {
				event.preventDefault();
				event.stopPropagation();
				var windowWidth = document.body.width();
				var windowHeight = document.body.height();
				console.log(mouseDown)
				
		if (mouseDown == 1) {
			mousePosition = { 	
				m : event.clientX,
				n : event.clientY
			};
			
			if ((mousePosition.m) >= -(SizeX/2)) //Horizontal Movements
			{
				if ((mousePosition.m + (SizeX/2)) <= windowWidth + (SizeX/2)) 
				{
					document.getElementsByClassName("pictureInPictureWindow-1B5qSe da-pictureInPictureWindow")[0].style.left = (mousePosition.m - (SizeX/2) - 20) + 'px'; 
				}
				else
				{
					document.getElementsByClassName("pictureInPictureWindow-1B5qSe da-pictureInPictureWindow")[0].style.left = windowWidth - (SizeX/2);
				}
			x = document.getElementsByClassName("pictureInPictureWindow-1B5qSe da-pictureInPictureWindow")[0].style.left
			}
			else
			{
				document.getElementsByClassName("pictureInPictureWindow-1B5qSe da-pictureInPictureWindow")[0].style.left = "0px"; 
				x = 0;
			}
			
			if ((mousePosition.n - (SizeY/2)) >= 0) //Vertical Movements 
			{
				if ((mousePosition.n) <= windowHeight)
				{
					document.getElementsByClassName("pictureInPictureWindow-1B5qSe da-pictureInPictureWindow")[0].style.top  = (mousePosition.n - (SizeY/2)) + 'px'; 
				}
				else
				{
					document.getElementsByClassName("pictureInPictureWindow-1B5qSe da-pictureInPictureWindow")[0].style.top  = (mousePosition.n - (SizeY)) + 'px'; 
				}
				y = document.getElementsByClassName("pictureInPictureWindow-1B5qSe da-pictureInPictureWindow")[0].style.top
			}
			else
			{
				document.getElementsByClassName("pictureInPictureWindow-1B5qSe da-pictureInPictureWindow")[0].style.top  = "0px"; 
				y = 0;
			}
			
			console.log("top: " + document.getElementsByClassName("pictureInPictureWindow-1B5qSe da-pictureInPictureWindow")[0].style.top + "left: " + document.getElementsByClassName("pictureInPictureWindow-1B5qSe da-pictureInPictureWindow")[0].style.left)
		}
	}} catch(er) {}
	
	
	try{document.getElementsByClassName("videoControls-38i4kP da-videoControls")[0].onmouseover = function() 
	{
		for (i=0;i<document.getElementsByClassName("tooltip-2QfLtc da-tooltip tooltipTop-XDDSxx tooltipGrey-1hnvTt tooltipDisablePointerEvents-3eaBGN da-tooltipDisablePointerEvents").length;i++)
		{
			document.getElementsByClassName("tooltip-2QfLtc da-tooltip tooltipTop-XDDSxx tooltipGrey-1hnvTt tooltipDisablePointerEvents-3eaBGN da-tooltipDisablePointerEvents")[i].opacity = 0.25;
		}
	}
	}
	catch(er){}
	
	try{document.getElementsByClassName("viewers-3jBi-s da-viewers leftTrayIcon-1mCY9j da-leftTrayIcon")[0].onmouseout = function() 
	{
		try{document.getElementsByClassName("tooltip-2QfLtc da-tooltip tooltipTop-XDDSxx tooltipGrey-1hnvTt tooltipDisablePointerEvents-3eaBGN da-tooltipDisablePointerEvents")[0].style.opacity = 0} catch(er) {};
	}
	} catch(er){}
	
	try{document.getElementsByClassName("viewers-3jBi-s da-viewers leftTrayIcon-1mCY9j da-leftTrayIcon")[0].onmouseover = function() 
	{
		try{document.getElementsByClassName("tooltip-2QfLtc da-tooltip tooltipTop-XDDSxx tooltipGrey-1hnvTt tooltipDisablePointerEvents-3eaBGN da-tooltipDisablePointerEvents")[0].style.opacity = 1} catch(er) {}
	}} catch(er){}

	try{document.getElementsByClassName("rightTrayIcon-gMHgPy da-rightTrayIcon button-38aScr da-button lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN da-grow")[0].onmouseout = function() 
	{
		try{document.getElementsByClassName("tooltip-2QfLtc da-tooltip tooltipTop-XDDSxx tooltipGrey-1hnvTt tooltipDisablePointerEvents-3eaBGN da-tooltipDisablePointerEvents")[2].style.opacity = 0} catch(er) {};
	}
	}catch(er){}
	
	try{document.getElementsByClassName("rightTrayIcon-gMHgPy da-rightTrayIcon button-38aScr da-button lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN da-grow")[0].onmouseover = function() 
	{
		try{document.getElementsByClassName("tooltip-2QfLtc da-tooltip tooltipTop-XDDSxx tooltipGrey-1hnvTt tooltipDisablePointerEvents-3eaBGN da-tooltipDisablePointerEvents")[2].style.opacity = 1} catch(er) {};
	}
	}catch(er){}
	
	try{document.getElementsByClassName("rightTrayIcon-gMHgPy da-rightTrayIcon button-38aScr da-button lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN da-grow")[1].onmouseout = function() 
	{
		try{document.getElementsByClassName("tooltip-2QfLtc da-tooltip tooltipTop-XDDSxx tooltipGrey-1hnvTt tooltipDisablePointerEvents-3eaBGN da-tooltipDisablePointerEvents")[1].style.opacity = 0 } catch(er) {};
	}
	}catch(er){}
	
	try{document.getElementsByClassName("rightTrayIcon-gMHgPy da-rightTrayIcon button-38aScr da-button lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN da-grow")[1].onmouseover = function() 
	{
		try{document.getElementsByClassName("tooltip-2QfLtc da-tooltip tooltipTop-XDDSxx tooltipGrey-1hnvTt tooltipDisablePointerEvents-3eaBGN da-tooltipDisablePointerEvents")[1].style.opacity = 1} catch(er) {}; 
	}
	}catch(er){}
	
	try{document.getElementsByClassName("pictureInPicture-3VocJq da-pictureInPicture")[0].onmouseover = function() 
	{
		try{document.getElementsByClassName("tooltip-2QfLtc da-tooltip tooltipTop-XDDSxx tooltipGrey-1hnvTt tooltipDisablePointerEvents-3eaBGN da-tooltipDisablePointerEvents")[0].style.opacity = 0} catch(er) {};  //DougPopup
		
		try{document.getElementsByClassName("tooltip-2QfLtc da-tooltip tooltipTop-XDDSxx tooltipGrey-1hnvTt tooltipDisablePointerEvents-3eaBGN da-tooltipDisablePointerEvents")[1].style.opacity = 0 } catch(er) {}; //Turn on Camera Popup
		
		try{document.getElementsByClassName("tooltip-2QfLtc da-tooltip tooltipTop-XDDSxx tooltipGrey-1hnvTt tooltipDisablePointerEvents-3eaBGN da-tooltipDisablePointerEvents")[2].style.opacity = 0} catch(er) {}; 
		
		try{document.getElementsByClassName("tooltip-2QfLtc da-tooltip tooltipTop-XDDSxx tooltipGrey-1hnvTt tooltipDisablePointerEvents-3eaBGN da-tooltipDisablePointerEvents")[3].style.opacity = 0} catch(er) {};
		
		try{document.getElementsByClassName("tooltip-2QfLtc da-tooltip tooltipTop-XDDSxx tooltipGrey-1hnvTt tooltipDisablePointerEvents-3eaBGN da-tooltipDisablePointerEvents")[4].style.opacity = 0} catch(er) {};
		
		document.getElementsByClassName("videoControls-38i4kP da-videoControls")[0].style.opacity = 0.25; //Controls
		event.preventDefault();
		event.stopPropagation(); 
	}} catch(er) {};
	
	 try{document.getElementsByClassName("pictureInPicture-3VocJq da-pictureInPicture")[0].ondrag = function() {event.preventDefault(); event.stopPropagation(); return false }} catch(er) {}; 
	 
	 try{document.getElementsByClassName("pictureInPicture-3VocJq da-pictureInPicture")[0].ondragstart = function() {event.preventDefault(); event.stopPropagation(); return false }} catch(er) {};
	 
	 try{document.getElementsByClassName("pictureInPicture-3VocJq da-pictureInPicture")[0].ondragend = function() {event.preventDefault(); event.stopPropagation(); return false }} catch(er) {};
	 
	 try{document.getElementsByClassName("pictureInPicture-3VocJq da-pictureInPicture")[0].ondragleave = function() {event.preventDefault(); event.stopPropagation(); return false }} catch(er) {};
	 
	 try{document.getElementsByClassName("pictureInPicture-3VocJq da-pictureInPicture")[0].ondragenter = function() {event.preventDefault(); event.stopPropagation(); return false }} catch(er) {};
	 
	 try{document.getElementsByClassName("pictureInPicture-3VocJq da-pictureInPicture")[0].ondragover = function() {event.preventDefault(); event.stopPropagation(); return false }} catch(er) {};
	 
	 try{document.getElementsByClassName("pictureInPicture-3VocJq da-pictureInPicture")[0].ondragdrop = function() {event.preventDefault(); event.stopPropagation(); return false }} catch(er) {};
	 
	 //try{document.getElementsByClassName("pictureInPicture-3VocJq da-pictureInPicture")[0].ondblclick = function() {event.preventDefault(); event.stopPropagation(); return false }} catch(er) {};
	
	try{x = localStorage.setItem('x',x);} catch(er){}
	try{y = localStorage.setItem('y',y);} catch(er){}
	try{SizeX = localStorage.setItem('SizeX',SizeX);} catch(er){}
	try{SizeY = localStorage.setItem('SizeY',SizeY);} catch(er){}
	
	
	setTimeout(function(){ onGotcha(x,y,mouseDown,mouse2Down,SizeX,SizeY) }, 100);
	return;
	}//end of onGotcha
	
    const SelectedChannelStore = DiscordModules.SelectedChannelStore;
    const ChannelStore = DiscordModules.ChannelStore;
    const ReactDOM = DiscordModules.ReactDOM;
    const InlineMediaWrapper = WebpackModules.getByProps("ImageReadyStates").default;

    return class StreamFixer extends Plugin {
        constructor() {
            super();
            this.styleTemplate = `
            img.blur:hover,
            video.blur:hover {
                transition: {{time}}ms cubic-bezier(.2, .11, 0, 1) !important;
                filter: blur(0px) !important;
            }
            
            img.blur,
            video.blur {
                filter: blur({{size}}px) !important;
                transition: {{time}}ms cubic-bezier(.2, .11, 0, 1) !important;
            }`;
        }

        onStart() {
			console.log("onStart()")
			var Over = 0;
			setTimeout(function(){ onGotcha(0,0,0,0,500,500) }, 100);
        }
		
        onStop() {
        }
		
        getSettingsPanel() {
            const panel = this.buildSettingsPanel();
            panel.addListener(() => {
                this.removeStyle();
                this.addStyle();
            });
            return panel.getElement();
        }

    };
};
        return plugin(Plugin, Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();
/*@end@*/