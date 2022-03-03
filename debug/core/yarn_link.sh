#!/bin/bash

# link @credibil/auth library source 
APP_DIR=$PWD
PKG_DIR="$PWD/../../packages"

# cd $PKG_DIR/core && yarn link
# cd $APP_DIR && yarn link @credibil/core

npm link ../../packages/core
npm link ../../debug/core/node_modules/react
npm link ../../debug/core/node_modules/react-dom

# ../my-package> npm link ../my-project/node_modules/react

# https://benjaminwfox.com/blog/tech/why-isnt-npm-link-working