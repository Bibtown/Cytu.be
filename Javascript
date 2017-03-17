UI_HeaderDropMenu = 1; //will turn on or off the custom header menu
UI_UserCommands = 1; //enable or disable user commands
UI_MessagesSuffix = 0;
UI_ChannelAnnouncement = 1;	// [&] additional custom channel announcement

HeaderDropMenu_Title = 'Bibtown';
ChannelAnnouncement_Title = 'ETD Message';

ChannelAnnouncement_HTML = 'Remember we actually have <a href="javascript:void(0)" onclick="javascript:showRulesHelp()" id="showchansettings" target="_blank">rules</a> and channel <a href="javascript:void(0)" onclick="javascript:showChatFeatureHelp()" id="showchansettings" target="_blank">features</a> now.';

HeaderDropMenu_Array = [
['Mom\'s Tumblr', 'http://thebibliosphere.tumblr.com/'],
['Rules & FAQ', 'javascript:void(0)" onclick="javascript:showRulesHelp()"  id="showchansettings'],
['Chat Features', 'javascript:void(0)" onclick="javascript:showChatFeatureHelp()"  id="showchansettings'],
//['<a id="showchansettings" href="javascript:void(0)" onclick="javascript:showConfig()" style="">Configure Layout</a>', 'bibtown']
];

RandomQuotes_Array = [
'"HUMAN BEINGS MAKE LIFE SO INTERESTING. DO YOU KNOW, THAT IN A UNIVERSE SO FULL OF WONDERS, THEY HAVE MANAGED TO INVENT BOREDOM."',
'"Humans need fantasy to be human. To be the place where the falling angel meets the rising ape."',
'"Everything starts somewhere, though many physicists disagree. But people have always been dimly aware of the problem with the start of things. They wonder how the snowplough driver gets to work, or how the makers of dictionaries look up the spelling of words."',
'"Some things are fairly obvious when it\'s a seven-foot skeleton with a scythe telling you them."',
'"She\'d sworn that if she did indeed ever find herself dancing on rooftops with chimney sweeps she\'d beat herself to death with her own umbrella."',
'"There is always time for another last minute."',
'"And then Jack chopped down what was the world\'s last beanstalk, adding murder and ecological terrorism to the theft, enticement, and trespass charges already mentioned."',
];

// adding "id" attributes
$(".navbar-collapse .navbar-nav").children().first().attr('id', 'home-link');
$("#home-link").next().attr('id', 'account-link');
$("#account-link").next().attr('id', 'options-link');
$("#options-link").next().attr('id', 'channelset-link');
$("#channelset-link").next().attr('id', 'layout-link');

// header and footer links open in a new tab
$("#home-link a, #account-link ul a, .credit a").attr('target', '_blank');

if (UI_HeaderDropMenu=="1") {
	HeaderDropMenu_Title=="" ? HeaderDropMenu_Title='Menu' : '';
	headerdrop = $('<li id="headerdrop" class="dropdown" />')
	  .insertAfter("#home-link");
	$('<a class="dropdown-toggle" data-toggle="dropdown" href="#" />')
	  .html(HeaderDropMenu_Title+' â–¾')
	  .appendTo(headerdrop);
	headermenu = $('<ul id="headermenu" class="dropdown-menu" />')
	  .appendTo(headerdrop);

	HeaderDropMenu_Array.length<1 ? HeaderDropMenu_Array=[['no menu available', '']] : '';
	for (i in HeaderDropMenu_Array) {
		title=HeaderDropMenu_Array[i][0];
		link=HeaderDropMenu_Array[i][1];
		if (link=="") {
			headermenu.append('<li class="dropdown-header">'+title+'</li>');
		} else {
			$('<li class="header-drop-link" />')
			  .append('<a href="'+link+'" target="_blank">'+title+'</a>')
			  .appendTo(headermenu);
		}
	}
}

// create modal window
function createModal(title) {
//	hidePlayer();
	outer = $('<div class="modal fade" />').appendTo($("body"));
	modal = $('<div class="modal-dialog" />').appendTo(outer);
	modal = $('<div class="modal-content" />').appendTo(modal);
	head = $('<div class="modal-header" />').appendTo(modal);
	$('<button class="close" data-dismiss="modal" aria-hidden="true" />').html('&times;').appendTo(head);
	$('<h3 />').text(title).appendTo(head);
	body = $('<div class="modal-body" />').appendTo(modal);
	footer = $('<div class="modal-footer" />').appendTo(modal);
	outer.on("hidden", function() {
		outer.remove();
		unhidePlayer();
	});
	outer.modal();
}

// show rules modal window ~JB~
function showRulesHelp() {
	createModal('Bibtown Rules & FAQ');
    body.append('<strong>Cardinal Rules of the Chat</strong><br />');
    html='<li>Be Kind</li>'
      +  '<li>Be Polite</li>'
      +  '<li>Be Honest</li>'
      +  '<li>Be Respectful</li>';
    $('<ul />').html(html).appendTo(body);
    body.append('<strong>Chat Behavior Guildelines</strong><br />')
    html='<li><b>This is a safe space for everyone.</b>  As such we ask that any conversation that could be considered upsetting to other members be marked as such, and then tagged using our spoiler filter. This can be done either by typing /sp at the beginning of your sentence, or surrounding your text with the [sp] [/sp] tags.</li>'
      +  '<ul style="list-style-type: none;"><li><b>Examples</b></li>'
      +  '<li><i>/sp Your sentence with the trigger word goes here. </i></li>'
      +  '<li><i>Hey guys can I talk to you about [sp] this issue that is bothering me [/sp]?</i></li></ul>'
      +  '<li><b>We limit swearing via the chat filter.</b> We do this to lessen the exposure of vulgarity to our younger members. </li>'
      +  '<li><b>Be aware this is NOT an 18 plus chat.</b> We welcome everyone here, even children. Our youngest frequenter is 12, so please conduct yourself as if children are present. You can also use the /sp filter to block out certain conversations, provided they are clearly warned as being NSFW, be we would prefer you use the PM function instead.</li>';
    $('<ul />').html(html).appendTo(body);
    body.append('<strong>Common Questions</strong><br />')
    html='<li><p><i><b>How do I get text color?</b></i><br />' 
      /*+  'Pick out a hex color you like and give it to ETD, this site can help in finding a color <a href="http://htmlcolorcodes.com/" target="_blank">htmlcolorcodes.com/</a>. '
      +  'But be warned ETD is very flighty so do not be upset it takes awhile for you to get your color.</p></li>' */
      +  'Colors are randomly bestowed on individuals. Hang around long enough and a color will choose you.'
      +  '<li><p><i><b>What are we watching?</b></i><br />'
      +  'The chat mods are currently working on creating a video schedule.  In the mean time whatever is playing is usually put up by whatever the current active mod wants to watch, if you want to watch/listen to something else feel free to ask. Mods will use their discretion in what they allow to be posted. If someone finds something to be triggering i.e. content or flashing lights, please notify one of the mods and it can be changed. </p></li>'
      +  '<li><p><i><b>Who are the mods?</b></i><br />' 
      +  'Mod\'s names will show up in the chat list with a seperate color, usually Orange or Green.  Feel free to contact them with any questions or issues you are having. You can always click on their name on the left to pull up the user function to PM them if you wish for a private conversation.</p></li>'
      +  '<li><p><i><b>How do I edit and view profiles?</b></i><br />'
      +  'Profiles can be viewed by hovering your mouse over a users name in the chat list on the left. You can edit your own profile from the Account > Profile menu tap at the top.</p></li>'
      +  '<li><p><i><b>Who is ETD?</b></i><br />' 
      +  'A better question would be <i>what</i>. ETD is the trickster demon who haunts this chat. Random acts of tomfoolery and general shenanigans have been attributed to his presence. Mom loves him, which is the only reason we havenâ€™t had him exorcised yet.</p></li>';
    $('<ul />').html(html).appendTo(body);

}

// show chat features help in the main menu ~JB~
function showChatFeatureHelp() {
	createModal('Chat Features');
	arr = {
		'/afk':'toggling your AFK (away from keyboard) status (<i>/afk</i>)',
	}
	body.append('<br /><strong>Default CyTube Commands</strong><br /><br />');
	ul = $('<ul />').appendTo(body);
	for (cmd in arr) {
		ul.append('<li><code>'+cmd+'</code> - '+arr[cmd]+'</li>');
	}
	arr = {
		'[m] text [/m]':'monospace text, e.g. <code>monospace</code>',
		'[b] text [/b]':'bold text, e.g. <strong>bold</strong>',
		'[u] text [/u]':'underline text, e.g. <span style="text-decoration: underline;">underline</span>',
        '[i] text [/i]':'italics text, e.g. <em>italics</em>',
        '[st] text [/st]':'strikeout text, e.g. <s>strikeout</s>',
        '[sp] text [/sp]':'spoiler text, e.g. <span class="spoiler">spoiler</span>',
        '/sp':'hiding a message in a hover-to-show spoiler box (e.g. <i>/sp This message is hidden</i>)',
        '/me':'showing an action-style message ([username] is dancing, e.g. <i>/me is dancing</i>)',
        '[TM]':'trade mark, e.g. â„¢',
	}
	body.append('<br /><strong>Text Formatting Commands</strong><br /><br />');
	ul = $('<ul />').appendTo(body);
	for (cmd in arr) {
		ul.append('<li><code>'+cmd+'</code> - '+arr[cmd]+'</li>');
	}
    arr = {
		'/happyfloof[##]':'Happy floofs, e.g. <i>/happyfloof05</i>',
		'/happyseal[##]':'Happy seals, e.g. <i>/happyseal02</i>',
        '/kiki[##]':'Kiki\'s delivery gifs, e.g. <i>/kiki02</i>',
        '/fireelmo':'demon Elmo',
        '/soa':'seal of approval',
	}
	body.append('<br /><strong>Bibtown Commands</strong><br /><br />');
	ul = $('<ul />').appendTo(body);
	for (cmd in arr) {
		ul.append('<li><code>'+cmd+'</code> - '+arr[cmd]+'</li>');
	}  
}

if (UI_ChannelAnnouncement=="1") {
	ChannelAnnouncement_Title=="" ? ChannelAnnouncement_Title='Administration Message' : '';
	ChannelAnnouncement_HTML=="" ? ChannelAnnouncement_HTML='<i>no messages</i>' : '';
	makeAlert(ChannelAnnouncement_Title, ChannelAnnouncement_HTML).appendTo("#announcements");
}
