# Netflix-GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing
- Login Form
- Sign Up form
- Form Validation
- useRef Hook
- Deployment of the app to production
- Create sign up usear account

## Project Setup

1. **Creating the project:**
    ```bash
    npm create vite@latest Netflix-GPT -- --template react
    cd Netflix-GPT
    ```

2. **Installing Tailwind CSS:**
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

3. **Configure your template paths:**

    Update your `tailwind.config.js` file:
    ```javascript
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    ```

4. **Add the Tailwind directives to your CSS:**

    Add the following to your `src/index.css`:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Features

- **Login/Sign Up**
    - Sign In/Sign Up form
    - Redirect to Browse Page after authentication
- **Browse (after authentication)**
    - Header
    - Main Movie Section
        - Trailer in Background
        - Title and Description
        - Movie Suggestions 
            - Multiple Movie Lists
- **Netflix-GPT**
    - Search Bar
    - Movie Suggestions based on search
