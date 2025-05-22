type ApiCommonError = {
	error: string;
};

type ApiValidationError<T = Record<string, unknown>> = {
	message: string;
	errors: Partial<Record<keyof T, string[]>>;
};

type ApiErrorResponse = ApiCommonError | ApiValidationError;

type ApiResponse<T = unknown> = {
	data: T;
	meta?: {
		page: number;
		limit: number;
		totalItems: number;
		totalPages: number;
		hasPreviousPage: boolean;
		hasNextPage: boolean;
	};
};

export type { ApiCommonError, ApiValidationError, ApiErrorResponse, ApiResponse };
