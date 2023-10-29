export default function ExpreniceHelper(learn) {
	if (learn) {
		const years = new Date().getFullYear() - learn;
		return `+${years} ${years > 1 ? "Years" : "Year"}`;
	}
	else {
		return "learning";
	}
}