Nagblock for derstandard.at (Firefox Addon)
===========================================

Background
----------
Somewhere in late 2014 the web edition of the Austrian newspaper [Der Standard][6] reacted to the prevailing usage of ad blockers. They began to selectively present its ad blocking users with a large banner which prompted viewers to either disable the ad blocker or switch to a paid subscription model.
The site took technical measures to prevent anyone from hiding the nag screen and kept improving the robustness of its solution by dynamically creating semi random HTML structures. They invested work in ensuring that all but the most advanced users would fail blocking their screen.
Personally, we feel that [Der Standard][6] is well deserving of its claim for monetary compensation as it's one of the best news sources available in Austria today. However, one has to ask oneself whether pestering its user base into subscription by forcing annoying banners upon its screens can be a viable business model? Consider this our attempt at answering this question by providing a Firefox addon for nag screen circumvention!
 
Usage
-----
 1. Install extension from [Firefox Add-ons site][4] or download the latest release and drag and drop the `xpi` file on Firefox
 2. Go to any sites on derstandard.at, diestandard.at or dastandard.at
 3. Enjoy a nagscreen free experience!

![the experience][7]

Installation
------------
To manually build the extension bundle (`.xpi`) from [the source][1] you need to install the [Firefox Add-on SDK][3].
Then execute the command `cfx xpi` from the add-on's directory:

	$ cfx xpi

This command will produce a file named `nagblock_standard.xpi`. You can simply drag and drop it on Firefox to install the Add-on.

Misc
----
If you want to get in touch with us or receive updates from the wonderful world of nag screen prevention, follow us on [Twitter][5]

Copyright
---------
Copyright (C) 2014 Nagblock.
Free use of this software is granted under the terms of the Apache 2.0 License.

See the [LICENSE][2] file for details.

[1]: https://github.com/nagblock/nagblock-standard-firefox
[2]: https://github.com/nagblock/nagblock-standard-firefox/blob/master/LICENSE "Apache License 2.0"
[3]: https://addons.mozilla.org/en-US/developers/docs/sdk/latest/dev-guide/tutorials/installation.html
[4]: https://addons.mozilla.org/
[5]: https://twitter.com/nagblock
[6]: http://derstandard.at
[7]: https://raw.githubusercontent.com/nagblock/nagblock-standard-firefox/master/doc/the_nagblock_experience.png