export interface Posters {
	small: Poster
	medium: Poster
	original: Poster
}

export interface Poster {
	url: string
	raw_base64_file?: string
}
