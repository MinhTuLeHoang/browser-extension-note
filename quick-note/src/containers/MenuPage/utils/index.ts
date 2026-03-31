/**
 * Removes diacritics (accents) from a string.
 * Example: 'Minh Tú' -> 'Minh Tu'
 */
const removeAccents = (str: string) => {
	return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D");
};

/**
 * Compares a sample string against a search input string.
 * Both are lowercased, unsigned (accents removed), and trimmed.
 * @param sample The string to search in (e.g. item title, description)
 * @param searchInput The user's query
 * @returns true if sample includes searchInput after normalization
 */
export const searchCompareUtils = (sample: string, searchInput: string): boolean => {
	if (!sample || !searchInput) return false;
	
	const normalizedSample = removeAccents(sample.toLowerCase().trim());
	const normalizedInput = removeAccents(searchInput.toLowerCase().trim());
	
	return normalizedSample.includes(normalizedInput);
};
