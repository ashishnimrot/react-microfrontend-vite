import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote-app',  // Name of the remote app
      filename: 'remoteEntry.js',  // File to expose
      exposes: {
        './Button': './src/Button.jsx',  // Expose Button component
      },
      shared: ['react', 'react-dom'],  // Share dependencies
    })
  ],
  build: {
    target: 'esnext',
  },
});