# Image

`Image` Interface describing the release `image` property.

## Properties

| Property  | Type                               |
| --------- | ---------------------------------- |
| src       | string                             |
| thumbnail | string                             |
| optimized | { src: string, thumbnail: string } |

| Property  | Type                               |
| --------- | ---------------------------------- |
| preview   | string                             |
| thumbnail | string                             |
| optimized | { src: string, thumbnail: string } |

## Code

{% code overflow="wrap" lineNumbers="true" %}
```typescript
interface Image {
	src: string
	thumbnail: string
	optimized: Omit<Image, 'optimized'>
}

type GenreImage = {
	preview: string
} & Omit<Image, 'src'>
```
{% endcode %}
