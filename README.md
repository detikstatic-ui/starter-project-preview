## For Tailwind Variant

If you are using VSCode and the TailwindCSS IntelliSense Extension, you have to add the following to your settings.json file.

```js
{
  "tailwindCSS.experimental.classRegex": [
    ["([\"'`][^\"'`]*.*?[\"'`])", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

Prettier plugin setup (optional)
If you are using prettier-plugin-tailwindcss to sort your class names, you can add tv to the list of functions that should be sorted.

```js
module.exports = {
    plugins: [require("prettier-plugin-tailwindcss")],
    tailwindFunctions: ["tv"],
}
```

---
