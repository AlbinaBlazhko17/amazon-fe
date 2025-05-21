type HttpMethod =
	| 'POST'
	| 'PATCH'
	| 'PUT'
	| 'DELETE'
	| 'UPDATE'
	| 'GET'
	| 'CONNECT'
	| 'HEAD'
	| 'OPTIONS';
type HttpMethodWithBody = Extract<HttpMethod, 'POST' | 'PUT' | 'DELETE' | 'UPDATE' | 'PATCH'>;
type HttpMethodNonBody = Exclude<HttpMethod, HttpMethodWithBody>;

export type { HttpMethod, HttpMethodNonBody, HttpMethodWithBody };
