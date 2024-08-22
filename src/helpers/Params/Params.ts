export const Params = <T extends object>(paramsObject?: T): string => {
	if (paramsObject) {
		const paramsString: string[] = []
		for (const [key, value] of Object.entries(paramsObject)) {
			paramsString.push(
				`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
			)
		}
		return `?${paramsString.join('&')}`
	}
	return ''
}
