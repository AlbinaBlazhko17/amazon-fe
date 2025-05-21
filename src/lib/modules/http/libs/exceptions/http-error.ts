import type { ValueOf } from '@/lib/types';

import type { HttpCode } from '../enums';

type Constructor<ErrorDetails = unknown> = {
	status: ValueOf<typeof HttpCode>;
	message: string;
	details?: ErrorDetails;
	cause?: unknown;
};

class HttpError<ErrorDetails = unknown> extends Error {
	public readonly status: number;
	public readonly details?: ErrorDetails;

	constructor({ message, status, details, cause }: Constructor<ErrorDetails>) {
		super(message, { cause });
		this.name = 'HttpError';
		this.status = status;
		this.details = details;
	}
}

export { HttpError };
