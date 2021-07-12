module.exports.config = {
	name: "run",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "running shell",
	commandCategory: "system",
	usages: "run",
	cooldowns: 5,
	dependencies: ["vm2","path"]
};

module.exports.run = async function({ api, event, args, client, Threads, Users, Currencies, models }) {
	const { VM } = require("vm2");
	var out = async (a) => api.sendMessage(`${a}`, event.threadID, event.messageID);
	const vm = new VM({
		eval: false,
		wasm: false,
		timeout: 100,
		console: 'inherit',
		sandbox: { process, out, api, event, args, client, Threads, Users, Currencies, models },
	});
	try {
		vm.run(args.join(" "), vm.js);
	}
	catch (e) {
		out(`${e.name}: ${e.message}`);
	}
}
