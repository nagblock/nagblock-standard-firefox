
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
    include: ['*.derstandard.at','*.diestandard.at','*.dastandard.at'],
    contentScriptFile: self.data.url("nagblock.js"),
    contentScriptWhen: 'ready',
});
