function init_message_bar (hash)
{
	if (!hash)
	{
		return;
	}

	insertJs_message_bar(hash);
}

function insertJs_message_bar (hash)
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = `https://smartarget.online/loader.js?ver=${Math.random()}&u=${hash}&source=wordpress_message_bar`;
	document.head.appendChild(script);
}

init_message_bar(smartarget_message_bar_params.hash);
