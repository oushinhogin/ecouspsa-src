#!/bin/bash
npm run build && rsync -rv dist/ ecouspsa@ecouspsa.com:public_html
