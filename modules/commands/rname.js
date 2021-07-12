module.exports.config = {
	name: "rname",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Random biệt danh tiếng NHẬT 🤔",
	commandCategory: "other",
	usages: "rname",
	cooldowns: 5,
	dependencies: ["request"],
	envConfig: {
		"APIKEY": "mi451266190"
	}
};

module.exports.run = async ({ api, event, global }) => {
	return require("request")(`https://www.behindthename.com/api/random.json?usage=jap&gender=f&key=${global.rname.APIKEY}`, (err, response, body) => {
		const data = JSON.parse(body);
		api.changeNickname(`${data.names[0]} ${data.names[1]}`, event.threadID, event.senderID);
	});
}