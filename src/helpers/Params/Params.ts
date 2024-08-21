export const Params = <T extends object>(paramsObject: T): string => {
	const paramsString: string[] = []
	for (const [key, value] of Object.entries(paramsObject)) {
		paramsString.push(
			`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
		)
	}
	return `?${paramsString.join('&')}`
}
