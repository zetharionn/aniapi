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

# release

The `Anilibria.relese()` is an `Anilibria` method that must accept an `aliasOrId` argument of type `string | number` and returns an object of type `Release`.

## Usage

<pre class="language-typescript" data-overflow="wrap" data-line-numbers><code class="lang-typescript">anilibria.release({
<strong>    aliasOrId: "9000"
</strong>}).then(res => res)
</code></pre>

## Parameters

| Parameter   | Type               | IsRequired |
| ----------- | ------------------ | ---------- |
| `aliasOrId` | `string \| number` | `true`     |

## Return

Returns an object of type `Release`
