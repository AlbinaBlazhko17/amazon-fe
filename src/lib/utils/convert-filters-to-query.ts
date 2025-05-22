export const convertFiltersToQuery = <
	T extends { [key: string]: string | number | boolean | undefined | null }
>(
	filters: T
) => {
	const query: string[] = [];

	for (const [key, value] of Object.entries(filters)) {
		if (value !== undefined && value !== null) {
			query.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
		}
	}

	return query.length > 0 ? `?${query.join('&')}` : '';
};
