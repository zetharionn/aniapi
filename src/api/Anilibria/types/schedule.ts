import { Episode } from './episode'
import { Release } from './release'

export interface Schedule {
	release: Release
	new_release_episode: Episode
	new_release_episode_ordinal: number
}
