export interface ProductFilters extends Record<string, string | undefined> {
	name?: string;
	description?: string;
	searchQuery?: string;
}
