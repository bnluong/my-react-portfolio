// Utility function to randomly generate a color in the (R,G,B) range
export default function getColor() {
	const r = Math.floor(Math.random() * 16).toString(16);
	const b = Math.floor(Math.random() * 16).toString(16);
	const g = Math.floor(Math.random() * 16).toString(16);
	return { backgroundColor: '#' + r + b + g };
}
