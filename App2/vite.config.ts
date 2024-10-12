import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',  // Name of the host app
      remotes: {
        remote_app: "http://localhost:5000/assets/remoteEntry.js",  // Load from App1
      },
      shared: ['react', 'react-dom'],  // Share dependencies
    })
  ],
  build: {
    target: 'esnext',
  },
});
