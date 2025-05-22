import type { CamelizeKeys, SnakeizeKeys } from '@/lib/types';

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function snakeToCamelCase(str: string): string {
	return str.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());
}

function camelToSnakeCase(str: string): string {
	return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

function convertSnakeToCamelCase<T extends Record<string, unknown>>(obj: T): CamelizeKeys<T> {
	if (!isRecord(obj)) {
		return obj as CamelizeKeys<T>;
	}

	const transformed = Object.fromEntries(
		Object.entries(obj).map(([key, value]) => [
			snakeToCamelCase(key),
			Array.isArray(value)
				? value.map(item => (isRecord(item) ? convertSnakeToCamelCase(item) : item))
				: isRecord(value)
					? convertSnakeToCamelCase(value)
					: value
		])
	);

	return transformed as CamelizeKeys<T>;
}

function convertCamelToSnakeCase<T extends Record<string, unknown>>(obj: T): SnakeizeKeys<T> {
	if (!isRecord(obj)) {
		return obj as SnakeizeKeys<T>;
	}

	const transformed = Object.fromEntries(
		Object.entries(obj).map(([key, value]) => [
			camelToSnakeCase(key),
			Array.isArray(value)
				? value.map(item => (isRecord(item) ? convertCamelToSnakeCase(item) : item))
				: isRecord(value)
					? convertCamelToSnakeCase(value)
					: value
		])
	);

	return transformed as SnakeizeKeys<T>;
}

export { convertCamelToSnakeCase, convertSnakeToCamelCase };
