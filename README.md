# Netflix-GPT

## Project Setup
- 1. Creating the project:
    - `npm create vite@latest Netflix-GPT -- --template react`
    - `cd Netflix-GPT`

- 2. Installing Tailwind CSS
    - `npm install -D tailwindcss postcss autoprefixer`
    - `npx tailwindcss init -p`
- 3. Configure your template paths
    - `  content: [`
    - `"./index.html",`
    - `"./src/**/*.{js,ts,jsx,tsx}",`
    - `],`

- 4. Add the Tailwind directives to your CSS
    - `@tailwind base;`
    - `@tailwind components;`
    - `@tailwind utilities;`


## Features
- Login/sign Up
    - Sign In/ Sign Up Form
    - Redirect to Browse Page
- Brouse (after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title and Description
        - Movie Suggestions 
            - MovieLists * N
- NetflixGPT
    - Search Bar
    - Movie Suggestions