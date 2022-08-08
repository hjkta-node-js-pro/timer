export const parseTime = (source, letter) => {
	const regex = new RegExp(`\\d{1,2}\\s?[${letter}]\\s?`, "gi");
	return parseInt(source.match(regex)) || 0;
};
