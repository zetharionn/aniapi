export interface Status {
	string: string
	code: StatusCodes
}

export const enum StatusCodes {
	INWORK = 1,
	COMPLETED = 2,
	PRIVATE = 3,
	NOTONGOING = 4
}
