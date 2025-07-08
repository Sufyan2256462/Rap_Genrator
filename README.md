# Rap Generator

Generate creative, rhythmic, and engaging rap lyrics on any topic, in any language and tone, using AI via the OpenRouter API.

## Features
- Generate original rap lyrics based on your topic, language, and tone
- Supports multiple languages (e.g., English, Urdu, Roman Urdu)
- Adjustable tone (e.g., humorous, aggressive, motivational)
- Clean, modern web interface

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the project root:
     ```
     OPENROUTER_API_KEY=your_openrouter_api_key_here
     ```
   - **Never commit your `.env` file!**

4. **Start the server:**
   ```sh
   node server.js
   ```
   The server will run at [http://localhost:3001](http://localhost:3001)

5. **Open the app:**
   - Open `index.html` in your browser, or
   - Visit [http://localhost:3001](http://localhost:3001) if served statically

## Usage
- Enter a topic, language, and tone
- Click "Generate Rap"
- Enjoy your AI-generated rap lyrics!

## Security
- Your OpenRouter API key is stored in a `.env` file and never exposed to the frontend.
- `.env` and `node_modules/` are included in `.gitignore` for safety.
  ![image](https://github.com/user-attachments/assets/cc2d07bb-2d2e-414a-95cb-e98b165e4e04)


## License
MIT 
