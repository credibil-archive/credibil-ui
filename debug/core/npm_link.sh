#!/bin/bash

# !!don't need this script when using workspaces!!

# link @credibil/core library source 
APP_DIR=$PWD
PKG_DIR="$PWD/../../packages/core"

# link @credibil/core package source
npm link $PKG_DIR
# link @credibil/core's version of react to this package  
cd $PKG_DIR && npm link $APP_DIR/node_modules/react && cd $APP_DIR

# https://benjaminwfox.com/blog/tech/why-isnt-npm-link-working