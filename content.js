// Profile thumbnails
$("._38vo img").each (function(){
	var rand = Math.floor((Math.random() * 10) + 1);
	var imgURL = chrome.extension.getURL("images/size_40/cat" + rand + ".jpg");
	$(this).attr("src", imgURL)
});

// Recommended friends
$(".ego_section img").each (function(){
        var rand = Math.floor((Math.random() * 10) + 1);
        var imgURL = chrome.extension.getURL("images/size_50/cat" + rand + ".jpg");
        $(this).attr("src", imgURL)
});

// Ticker stories
/*$(".fbFeedTickerStory img").each (function(){
        var rand = Math.floor((Math.random() * 10) + 1);
        var imgURL = chrome.extension.getURL("images/size_50/cat" + rand + ".jpg");
        $(this).attr("src", imgURL)
});*/


// Bigger images
$(".uiScaledImageContainer img").each (function(){
        var rand = Math.floor((Math.random() * 10) + 1);
        var imgURL = chrome.extension.getURL("images/size_50/cat" + rand + ".jpg");
        $(this).attr("src", imgURL)
});


var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback){
        if( MutationObserver ){
            // define a new observer
            var obs = new MutationObserver(function(mutations, observer){
                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
                    callback();
            });
            // have the observer observe foo for changes in children
            obs.observe( obj, { childList:true, subtree:true });
        }
        else if( eventListenerSupported ){
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    }
})();

// Observe a specific DOM element:
observeDOM( document.getElementById('globalContainer') ,function(){ 
    	console.log('dom changed');
	// Profile thumbnails
	$("._38vo img").each (function(){
		if ($(this).attr("src").indexOf("chrome-extension") == -1){ 
        		var rand = Math.floor((Math.random() * 5) + 1);
        		var imgURL = chrome.extension.getURL("images/size_40/cat" + rand + ".jpg");
        		$(this).attr("src", imgURL)
		}
	});
});
