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

# search

The `Anilibria.random()` is an `Anilibria` method that must accept a `query` argument of type `string` and returns an object of type `Release[]`.

## Usage

{% code overflow="wrap" lineNumbers="true" %}
```typescript
anilibria.search({
    query: "That Time I Got Reincarnated as a Slime"
}).then(res => res)
```
{% endcode %}

## Parameters

| Parameter | Type     | IsRequired |
| --------- | -------- | ---------- |
| `query`   | `string` | `true`     |

## Return

Returns an array of `Release` type objects.
