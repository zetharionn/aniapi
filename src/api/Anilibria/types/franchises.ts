import { Release } from './release'

export interface Franchises {
	franchise: Franchise
	releases: Release[]
}

export interface Franchise {
	id: string
	name: string
}
