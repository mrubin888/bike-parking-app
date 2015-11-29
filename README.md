# angular-seed
A modular front-end angular seed project that utilizes gulp with browserify.

## Setup
1. Run ```npm install``` from project root
2. Fill in your api settings in 'config/sample_config.js' and save it as 'config/config.js'

## Run
### Development
Run ```gulp``` default task from the project root.
### Production
Run ```gulp build``` task from project root and serve your 'dist' folder with a server

## Api Expectations
- GET /api/todo
- GET /api/todo/:id
- POST /api/todo
- PUT /api/todo/:id
- DELETE /api/todo/:id
