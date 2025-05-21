interface HttpModule {
	request(path: string, options: RequestInit): Promise<Response>;
}

export { type HttpModule };
