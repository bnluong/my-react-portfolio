// Utility function to randomly generate an HSL color
// math.Random -> Math.floor(Math.random() * (max - min + 1)) + min;
export default function getColor() {
	const h = Math.floor(Math.random() * 360).toString(); // Generate a random hue in the range from 0 - 360 inclusive in base-10
	const s = (Math.floor(Math.random() * (80 - 50 + 1)) + 50).toString(); // Generate a random saturation in the range from 50 - 80 inclusive in base-10 (only saturated color)
	const l = (Math.floor(Math.random() * (60 - 20 + 1)) + 20).toString(); // Generate a random light in the range from 20 - 60 inclusive in base-10 (only darker color except black)
	const color = `hsl(${h}, ${s}%, ${l}%)`;
	return { backgroundColor: color };
}
