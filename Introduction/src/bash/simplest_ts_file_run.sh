#!/usr/bin/env sh
npm install -g typescript
echo "console.log(\"Hello world\")" > log.ts
tsc log.ts
node log.js
# results in Hello World