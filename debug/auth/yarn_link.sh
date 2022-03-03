#!/bin/bash

# link @credibil/auth library source 
APP_DIR=$PWD
PKG_DIR="$PWD/../../packages"
cd $PKG_DIR/auth && yarn link
cd $APP_DIR && yarn link @credibil/auth