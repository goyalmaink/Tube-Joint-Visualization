# 🏗️ Tube Joint Visualizer & Editor

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Electron](https://img.shields.io/badge/Electron-28.0-47848F?style=flat&logo=electron&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=flat&logo=three.js&logoColor=white)

A high-performance desktop application for modeling, visualizing, and manipulating rectangular and square tube joints in a 3D environment. Built with **Electron**, **React**, and **Three.js**, this tool demonstrates complex geometry handling, state management, and cross-platform desktop packaging.

---

## 🚀 Key Features

* **Interactive 3D Workspace:** Full orbit, zoom, and pan controls to inspect models from any angle.
* **Dynamic Geometry:** Create Square and Rectangular tubes with customizable dimensions (Width, Height, Length).
* **Smart Transformation:** * **Drag & Drop** positioning.
    * **Precision Snapping** (0.5 units for position, 45° for rotation).
* **Joint Visualization:** Real-time visual feedback (red indicators) when tubes intersect or form a joint.
* **State Management:** Global state handling via **Zustand** for performant updates without prop-drilling.
* **Native Desktop Experience:** Packaged as a standalone executable (`.exe`/`.dmg`) using Electron.

---

## 🛠️ Tech Stack & Architecture

This project utilizes a modern, component-driven architecture:

| Category | Technology | Reasoning |
| :--- | :--- | :--- |
| **Core** | **React 19 + Vite** | High-performance rendering and instant HMR (Hot Module Replacement). |
| **3D Engine** | **React Three Fiber (R3F)** | Declarative 3D scene management backed by Three.js. |
| **State** | **Zustand** | Lightweight, transient state management for high-frequency 3D updates. |
| **Desktop** | **Electron** | Chromium-based wrapper for cross-platform desktop deployment. |
| **Styling** | **Tailwind CSS** | Utility-first CSS for the UI overlay and editor panels. |

### 📂 Project Structure

```text
frontend/
├── electron/           # Main Process (Backend)
│   └── main.cjs        # Window creation & environment handling
├── src/                # Renderer Process (Frontend)
│   ├── assets/         # Static assets
│   ├── components/     # Reusable UI components
│   └── main.jsx        # React Entry point
├── rendered/           # Domain-Specific Logic
│   ├── component/      # 3D Meshes (TubeMesh, JointPreview)
│   └── req/            # Zustand Store (store.jsx)
└── dist-electron/      # Final Build Output
```
---
### ⚙️ Installation & Setup
Prerequisites
Node.js (v18 or higher)

npm

### 1. Clone the Repository
```
git clone https://github.com/goyalmaink/Tube-Joint-Visualization/
cd Tube-Joint-Visualization/frontend
```

### 2. Install Dependencies
 ```Bash
npm install
```

### 3. Run in Development Mode
This launches the Vite server and the Electron window simultaneously with Hot Reloading active.

```Bash
npm run electron:dev
```
---
### 📦 Packaging (Build Instructions)
To generate the standalone executable for your operating system (Windows/Mac/Linux):
# 1.Run the Build Script:

```Bash

npm run electron:build
```
# 2.Locate the Executable:
```
The build process will create a dist-electron folder.
Windows: frontend/dist-electron/TubeJointViz Setup 1.0.0.exe
Mac: frontend/dist-electron/TubeJointViz-1.0.0.dmg
```
---
### Screen Shots

<img width="2566" height="1544" alt="image" src="https://github.com/user-attachments/assets/4241db34-e696-4f14-8ace-7620df6df539" />

---

<img width="2504" height="1444" alt="image" src="https://github.com/user-attachments/assets/848297a1-f251-417d-b6a5-e9d3daa2f583" />



