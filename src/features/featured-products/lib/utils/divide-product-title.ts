export function divideProductTitle(title: string): {
	nameWithoutLastPart: string;
	lastPart: string;
} {
	const productNameParts = title.split(' ');
	const lastPartIndex = productNameParts.length - 1;
	const lastPart = productNameParts[lastPartIndex];
	const nameWithoutLastPart = productNameParts.slice(0, lastPartIndex).join(' ');

	return {
		nameWithoutLastPart,
		lastPart
	};
}
