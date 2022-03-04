#!/bin/bash

# link @credibil/auth library source 
APP_DIR=$PWD
PKG_DIR="$PWD/../../packages/auth"

# link @credibil/core package source
npm link $PKG_DIR
# link @credibil/auth's version of react to this package  
cd $PKG_DIR && npm link $APP_DIR/node_modules/react && cd $APP_DIR