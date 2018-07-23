const express = require('express');
const axios = require('axios');
const port = process.env.PORT || 3000;

var app = express();

//https://api.instagram.com/v1/tags/search?q=momlife&access_token=3622724116.9c63a16.3d280314a9b94d00aa27a64428016e05
app.get('/', (req, res) => {
	// axios.get('https://www.instagram.com/explore/tags/momlife/?__a=1').then((response)=>{
	// 	//res.send(response.data);
	// 	var profiles = response.data.graphql.hashtag.edge_hashtag_to_media.edges
	// 	return profiles;
	// }).then((profiles)=>{
	// 	var users = [];
	// 	profiles.forEach((profile)=>{
	// 		var id = profile.node.owner.id;

			// axios.get(`https://i.instagram.com/api/v1/users/${id}/info/`).then((webprofile)=>{
			// 	var search_in = webprofile.document.body.innerHTML;
			// 	string_context = webprofile.data.toString();

			// 	array_mails = string_context.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
				
			// 	console.log(array_mails);
			// }).catch((e)=>console.log(e));
		// 	console.log(id);
		// });
		
	//});
	res.send('hello');

});


app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});