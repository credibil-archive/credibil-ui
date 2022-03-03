# Remitter Web

## Quick Start

### GitHub npm package access

[Create a Personal Access Token](https://github.com/settings/tokens) (PAT) with `read:packages` permission. Then, create a `.npmrc` file in your `home` directory (or locally):

```bash
echo "@credibil:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<GitHub PAT>" >> ~/.npmrc
```

### Run the app

Clone the repository:

```bash
git clone https://github.com/credibil/remitter-web.git
```

Run `yarn install`
Run `yarn dev`
