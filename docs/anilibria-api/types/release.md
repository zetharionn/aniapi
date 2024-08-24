---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Release

## Create a new user

`Release` Interface describing the release object.

<pre class="language-typescript" data-overflow="wrap" data-line-numbers><code class="lang-typescript">interface Release {
	id: number
	type: <a data-footnote-ref href="#user-content-fn-1">Type</a>
	year: number
	name: <a data-footnote-ref href="#user-content-fn-2">Names</a>
	alias: string
	season: <a data-footnote-ref href="#user-content-fn-3">Season</a>
	poster: <a data-footnote-ref href="#user-content-fn-4">Image</a>
	fresh_at: string
	created_at: string
	updated_at: string
	is_ongoing: boolean
	age_rating: <a data-footnote-ref href="#user-content-fn-5">Age_Rating</a>
	publish_day: <a data-footnote-ref href="#user-content-fn-6">Publish_Day</a>
	description: string
	notification: string
	episodes_total: number
	external_player: string
	is_in_production: boolean
	is_blocked_by_geo: boolean
	episodes_are_unknown: boolean
	is_blocked_by_copyrights: boolean
	average_duration_of_episode: number
}
</code></pre>

[^1]: [Type Interface](type.md)

    ```typescript
    export interface Type {
    	value: string
    	description: string
    }
    ```

[^2]: [Names Interface](names.md)

    ```typescript
    export interface Names {
    	main: string
    	english: string
    	alternative: string
    }
    ```

[^3]: [Season Interface](season.md)

    ```typescript
    export interface Season {
    	value: string
    	description: string
    }
    ```

[^4]: [Image Interface](image.md)

    ```typescript
    export interface Image {
    	src: string
    	thumbnail: string
    	optimized: Omit<Image, 'optimized'>
    }
    ```

[^5]: [Age\_Rating Interface](age\_rating.md)

    ```typescript
    export interface Age_Rating {
    	value: string
    	label: string
    	is_adult: boolean
    	description: string
    }
    ```

[^6]: [Publish\_Day Interface](publish\_day.md)

    ```typescript
    export interface Publish_Day {
    	value: string
    	description: string
    }
    ```
