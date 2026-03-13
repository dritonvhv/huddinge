<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/16830560-9465-4ea6-aa76-a0ec788aaafb

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   npm run backend:install
   ```
2. Kopiera `backend/.env.example` till `backend/.env` och lägg in din OpenAI API-nyckel:
   ```
   OPENAI_API_KEY=din_nyckel
   ```
   (Hämta från https://platform.openai.com/api-keys)
   (Hämta nyckel från https://aistudio.google.com/apikey)
3. Starta backend (i en terminal):
   ```bash
   npm run backend
   ```
4. Starta frontend (i en annan terminal):
   ```bash
   npm run dev
   ```
5. Öppna http://localhost:3000 – AI-chatten i hörnet använder backend på port 3001
