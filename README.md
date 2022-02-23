# credibil-ui

## Managing packages with Lerna

[https://lerna.js.org](https://lerna.js.org)

lerna publish --conventional-commits --yes

### Testing packages using `npm link`

Use `npm link` to create a symlink to a package's directory.

For example, to create a reference to the package `@credibil/core`:

#### Step 1 - Publish the `core` package

```bash
cd packages/core
npm link
```

#### Step 2 - Reference the `core` package in the client project

Add the reference to the app's `package.json` dependencies:

```json
"@credibil/core": "^n.n.n",
```

Link to the published package from the client project.

```bash
npm link @credibil/core
```

### Installing packages

From the GitHub docs:
> You need an access token to publish, install, and delete packages.

[Create a Personal Access Token](https://github.com/settings/tokens) (PAT) with `read:packages` permission. Then, create a `.npmrc` file in your `home` directory (or locally):

```bash
echo "@credibil:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<GitHub PAT>" >> ~/.npmrc
```
