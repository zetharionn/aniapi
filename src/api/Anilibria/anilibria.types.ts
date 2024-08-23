import type { AnilibriaRandomParams } from './methods/anilibriaRandom'
import type { AnilibriaReleaseParams } from './methods/anilibriaRelease'
import type { AnilibriaSearchParams } from './methods/anilibriaSearch'
import type { Release } from './types'

export interface IAnilibria {
	release: (params: AnilibriaReleaseParams) => Promise<Release>
	randomRelease: (params?: AnilibriaRandomParams) => Promise<Release>
	searchRelease: (params: AnilibriaSearchParams) => Promise<Release[]>
}
