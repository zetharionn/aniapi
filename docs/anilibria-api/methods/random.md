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

# random

The `Anilibria.random()` is an `Anilibria` method that optionally takes an argument `limit` of type `string | number` and returns an object of type `Release[]`.

## Usage

{% code overflow="wrap" lineNumbers="true" %}
```typescript
anilibria.random({
    limit: 5
}).then(res => res)
```
{% endcode %}

## Parameters

| Parameter | Type     | IsRequired |
| --------- | -------- | ---------- |
| `limit`   | `number` | `false`    |

## Return

Returns an array of `Release` type objects.
