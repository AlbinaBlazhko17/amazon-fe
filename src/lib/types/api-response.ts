type ApiCommonError = {
	error: string;
};

type ApiValidationError<T = Record<string, unknown>> = {
	message: string;
	errors: Partial<Record<keyof T, string[]>>;
};

type ApiErrorResponse = ApiCommonError | ApiValidationError;

export type { ApiCommonError, ApiValidationError, ApiErrorResponse };
