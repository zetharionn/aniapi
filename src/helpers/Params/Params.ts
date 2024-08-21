export const Params = <T extends object>(params: T): string => {
	const paramsString: string[] = []

	for (const [key, value] of Object.entries(params)) {
		paramsString.push(
			`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
		)
	}
	return `?${paramsString.join('&')}`
}
