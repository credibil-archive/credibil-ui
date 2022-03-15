#!/bin/bash

# link @credibil/auth library source 
APP_DIR=$PWD
PKG_DIR="$PWD/../../packages"

# We are using the npm "workspaces" feature to dynamically link the @credibil/auth 
# library source, which, in turn, dynamically links the @credibil/core library source.

# Due to a quirk with React, dynamically linked libraries need to share the same 
# 'node_modules/react' directory. We can use "workspaces" to do this for
# 'packages/auth' library but not the 'packages/core' library. So we use the
#  script below.

# link @credibil/core's version of react to this package 
cd $PKG_DIR/core && npm link $APP_DIR/node_modules/react && cd $APP_DIR

# link @credibil/auth package source
# npm link $PKG_DIR/auth

# https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react