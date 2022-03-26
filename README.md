# rabbit-ts
A simple event-based server sugar rabbitMQ, TS and docker


## Setup husky
```
npm install husky -D

npx eslint .

npm set-script prepare "husky install"
npm run prepare

npm install lint-staged --save-dev

npx husky add .husky/pre-commit "npm run build"
npx husky add .husky/pre-commit "rm -rf build"
npx husky add .husky/pre-commit "npx lint-staged"
npx husky add .husky/post-merge "npm i" 

```

## Resources
- [RabbiMQ Theory](https://www.youtube.com/watch?v=e03c3CIGtYU)