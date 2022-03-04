# credibil-ui

## Managing packages with Lerna

[https://lerna.js.org](https://lerna.js.org)

lerna publish --conventional-commits --yes

### Developing packages with `npm link`

Each package has a corresponding interactive test harness located in the `/debug` directory. The test harness can be used while developing the package to confirm behaviour and debug issues without the need to package and deploy.

To use, simply navigate to the root directory of the appropriate test harness and run `yarn dev`. The linking is performed automatically by the `yan dev` command. Once running, any changes you make to the package should be reflected in the running test harness.

For example, when working on the package `@credibil/core`:

```bash
cd debug/core
yarn dev
```

### Installing packages

From the GitHub docs:
> You need an access token to publish, install, and delete packages.

[Create a Personal Access Token](https://github.com/settings/tokens) (PAT) with `read:packages` permission. Then, create a `.npmrc` file in your `home` directory (or locally):

```bash
echo "@credibil:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<GitHub PAT>" >> ~/.npmrc
```
