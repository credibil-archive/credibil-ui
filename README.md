# credibil-ui

## managing packages with Lerna

[https://lerna.js.org](https://lerna.js.org)

lerna publish --conventional-commits --yes



### Testing packages using `npm link`

Use `npm link` to create a symlink to a package's directory. For example, to create a reference to the package `@credibil-ui/core` use:

```
cd packages/core
npm link
```

Add the reference to the app's `package.json` dependencies:

```
"@credibil-ui/core": "^0.0.1",
```


lerna publish
