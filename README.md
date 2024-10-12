
# **React Microfrontend Example with Vite and Module Federation**

This project demonstrates how to set up **Micro Frontends** in **Vite** using **Module Federation**. Two applications, `App1` (remote) and `App2` (host), communicate with each other by exposing and consuming components.

## **Project Structure**

```bash
.
├── App1                  # Remote App (exposes components)
│   ├── src/
│   │   ├── Button.jsx     # Exposed component
│   ├── public/
│   ├── dist/              # Build folder
│   ├── vite.config.js     # Vite configuration with Module Federation
│   └── package.json
│
└── App2                  # Host App (imports remote components)
    ├── src/
    ├── public/
    ├── dist/              # Build folder
    ├── vite.config.js     # Vite configuration for consuming remote components
    └── package.json

```
---



## **Requirements**

To run this project locally, ensure you have the following installed:

- **Node.js** (version 14 or above)
- **npm** (version 6 or above)

---

## **Getting Started**

To run both `App1` (remote) and `App2` (host), follow these steps:

### **Step 1: Clone the Repository**

```bash
git clone https://github.com/ashishnimrot/react-microfrontend-vite.git
cd react-microfrontend-vite
```

### **Step 2: Install Dependencies**

You need to install dependencies for both **App1** and **App2**:

1. Navigate to the `App1` folder and install dependencies:

   ```bash
   cd App1
   npm install
   ```

2. Navigate to the `App2` folder and install dependencies:

   ```bash
   cd ../App2
   npm install
   ```

### **Step 3: Build and Serve the Remote Application (App1)**

**App1** exposes the `Button` component to be consumed by **App2**.

1. Build and serve **App1** (remote):

   ```bash
   cd ../App1
   npm run build
   npx serve -s dist -l 5000 --cors
   ```

2. The app should now be running at `http://localhost:5000`.

### **Step 4: Run the Host Application (App2)**

1. Open a new terminal, navigate to the `App2` directory, and start the development server:

   ```bash
   cd ../App2
   npm run dev
   ```

2. **App2** will be running at `http://localhost:5173`. It should dynamically load the `Button` component from **App1**.

---

## **How It Works**

- **App1** exposes its `Button` component using Module Federation, which is configured in the `vite.config.js` file. 
- **App2** dynamically imports the `Button` component from **App1** using the remote URL defined in its `vite.config.js`.
- The two apps are served on different ports (`App1` on `http://localhost:5000` and `App2` on `http://localhost:5173`).

---

## **Key Features**

- Module Federation allows sharing of components across independent applications.
- Remote components are loaded dynamically without the need to rebuild both apps together.
- The Vite build process ensures fast development cycles with optimized production builds.

---

## **Troubleshooting**

- **CORS Errors**: Ensure that **App1** is served with the `--cors` flag to allow cross-origin requests.
- **Port Conflicts**: Ensure that both applications are running on different ports (default ports are `5000` for App1 and `5173` for App2). You can change these ports in the Vite configuration files if necessary.
- **Build Issues**: If the apps are not building correctly, try clearing the `node_modules` and reinstalling dependencies:
  
  ```bash
  rm -rf node_modules
  npm install
  ```

---

## **Contributing**

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/my-feature`.
3. Make your changes and commit: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Submit a pull request.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Extra Details (Optional)**

- **Vite Module Federation Plugin**: This project uses the [vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) to implement Module Federation.
- **Build Optimization**: Both apps are optimized for production using Vite’s build system. Shared dependencies like `react` and `react-dom` are specified to avoid duplication.

---

## **Potential Enhancements (for future work)**

- Add testing with **Jest** or **Vitest** to ensure component functionality.
- Expand the example to include routing between microfrontends.
- Include CI/CD workflows using GitHub Actions to automate build and deployment processes.

---

## **How to Fork and Clone the Repo**

```bash
# Fork the repository on GitHub
git clone https://github.com/ashishnimrot/react-microfrontend-vite.git
```
