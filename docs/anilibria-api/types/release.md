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

`Release` Interface describing the release object.

## Properties

<table data-full-width="false"><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td>id</td><td>number</td></tr><tr><td>type</td><td><a href="type.md">Type</a></td></tr><tr><td>year</td><td>number</td></tr><tr><td>name</td><td><a href="names.md">Names</a></td></tr><tr><td>alias</td><td>string</td></tr><tr><td>season</td><td><a href="season.md">Season</a></td></tr><tr><td>poster</td><td><a href="image.md">Image</a></td></tr><tr><td>fresh_at</td><td>string</td></tr><tr><td>created_at</td><td>string</td></tr><tr><td>updated_at</td><td>string</td></tr><tr><td>is_ongoing</td><td>boolean</td></tr><tr><td>age_rating</td><td><a href="age_rating.md">Age_Rating</a></td></tr><tr><td>publish_day</td><td><a href="publish_day.md">Publish_Day</a></td></tr><tr><td>description</td><td>string</td></tr><tr><td>notification</td><td>string</td></tr><tr><td>episodes_total</td><td>number</td></tr><tr><td>external_player</td><td>string</td></tr><tr><td>is_in_production</td><td>boolean</td></tr><tr><td>is_blocked_by_geo</td><td>boolean</td></tr><tr><td>episodes_are_unknown</td><td>boolean</td></tr><tr><td>is_blocked_by_copyrights</td><td>boolean</td></tr><tr><td>average_duration_of_episode</td><td>number</td></tr></tbody></table>

## Code

{% code overflow="wrap" lineNumbers="true" %}
```typescript
interface Release {
	id: number
	type: Type
	year: number
	name: Names
	alias: string
	season: Season
	poster: Image
	fresh_at: string
	created_at: string
	updated_at: string
	is_ongoing: boolean
	age_rating: Age_Rating
	publish_day: Publish_Day
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
```
{% endcode %}
