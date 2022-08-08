import process from "process";
import { parseTime } from "./parseTime.js";
import notifier from "node-notifier";

const [interval] = process.argv.slice(2);

const hours = parseTime(interval, "h");
const minutes = parseTime(interval, "m");
const seconds = parseTime(interval, "s");

setTimeout(() => {
	notifier.notify("It's time");
}, (hours * 3600 + minutes * 60 + seconds) * 1000);
