/*
 * Custom theme helpers for Handlebars.js
 */
let themeHelpers = {
    yesterday: function(){
        var d  = new Date()
        d.setDate(d.getDate()-1)
        return d
    },
    parseShortcode: function(postText, content) {
     let allTags = content.data.website.contentStructure.tags;
     let matches = postText.match(/\[posts tags="(.*?)" count="(.*?)"\]/gmi);
     
     if(!matches) {
     return postText;
     }
     
     for(let i = 0; i < matches.length; i++) {
     let tags = matches[i].match(/tags="(.*?)"/);
     let count = matches[i].match(/count="(.*?)"/);
     count = count[1];
 let tagNames = tags[1].split(',');
 let posts = [];
 let output = '';
 
 for(let j = 0; j < tagNames.length; j++) {
 for(let k = 0; k < allTags.length; k++) {
 if(allTags[k].slug === tagNames[j]) {
 for(let l = 0; l < allTags[k].posts.length; l++) {
 posts.push(allTags[k].posts[l]);
 }
 }
 }
 }
 
 posts = [...new Set(posts)];
 posts.sort((a, b) => parseInt(a.createdAt) - parseInt(b.createdAt));
     posts = posts.slice(0, count);
     
     if(posts.length) {
     output = '<ol>';
     
     for(let j = 0; j < posts.length; j++) {
     output += '<li><a href="' + posts[j].url + '">' + posts[j].title + '</a></li>';
     }
     output += '</ol>';
     }
     postText = postText.replace(matches[i], output);
     }
      return postText;
    }
};
module.exports = themeHelpers;