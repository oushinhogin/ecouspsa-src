#!/bin/bash
npm run generate && rsync -rv dist/ ecouspsa@ecouspsa.com:public_html
