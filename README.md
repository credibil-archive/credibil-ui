# credibil-ui

## Managing packages with Lerna

[https://lerna.js.org](https://lerna.js.org)

lerna publish --conventional-commits --yes

### Testing packages using `npm link`

Use `npm link` to create a symlink to a package's directory. For example, to create a reference to the package `@credibil/core` use:

#### Step 1

Publish a package from this project.

```bash
cd packages/core
npm link
```

#### Step 2

Add the reference to the app's `package.json` dependencies:

```bash
"@credibil/core": "^n.n.n",
```

Link to the published package from the client project.

```bash
npm link @credibil/core
```

### Installing packages

From the GitHub docs:
> You need an access token to publish, install, and delete packages.
