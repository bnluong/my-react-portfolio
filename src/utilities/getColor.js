// Utility function to randomly generate an HSL color
export default function getColor() {
	const h = Math.floor(Math.random() * 360).toString(); // Generate a random hue in the range from 0 - 360 inclusive in base-10
	const s = (Math.floor(Math.random() * 20) + 81).toString(); // Generate a random saturation in the range from 0 - 100 inclusive in base-10 (only saturated color)
	const l = (Math.floor(Math.random() * 40) + 21).toString(); // Generate a random light in the range from 0 - 50 inclusive in base-10 (only darker color except black)
	const color = `hsl(${h}, ${s}%, ${l}%)`;
	return { backgroundColor: color };
}
