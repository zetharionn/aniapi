import type { AnilibriaRandomReleaseParams } from './methods/anilibriaRandomRelease'
import type { AnilibriaReleaseParams } from './methods/anilibriaRelease'
import type { AnilibriaSearchParams } from './methods/anilibriaSearch'
import type { Release } from './types'

export interface IAnilibria {
	release: (params: AnilibriaReleaseParams) => Promise<Release>
	randomRelease: (params?: AnilibriaRandomReleaseParams) => Promise<Release>
	searchRelease: (params: AnilibriaSearchParams) => Promise<Release[]>
}
