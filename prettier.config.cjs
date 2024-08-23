/** @type {import('prettier').Config} */
module.exports = {
    endOfLine: "lf",
    semi: false,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "es5",
    printWidth: 180,
    importOrder: [
        "^(react/(.*)$)|^(react$)",
        "<THIRD_PARTY_MODULES>",
        "",
        "^types$",
        "^@/types/(.*)$",
        "^@/config/(.*)$",
        "^@/lib/(.*)$",
        "^@/hooks/(.*)$",
        "^@/layouts/(.*)$",
        "^@/components/ui/(.*)$",
        "^@/components/(.*)$",
        "^@/styles/(.*)$",
        "^@/data/(.*)$",
        "",
        "^[./]",
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    importOrderBuiltinModulesToTop: true,
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
    plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
}
