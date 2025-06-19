# 📂 Subject Navigator

A lightweight Electron-based desktop application to manage subject folders with a modern UI. It allows users to **create**, **update**, **delete**, and **navigate** subject folders easily, with support for **persistent storage**.

---

## 📑 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Building and Packaging](#building-and-packaging)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## ✨ Features

- ✅ **Create Subjects**: Add new subjects with folder paths.
- 🔁 **Update Subjects**: Modify subject names or paths.
- ❌ **Delete Subjects**: Remove subjects.
- 📂 **Navigate to Folders**: Open subject folders in the system's file explorer.
- 💾 **Persistent Storage**: Data saved using `electron-store`, persists across sessions.

---

## ⚙️ Installation

### 📦 Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/) (optional)

### 🚀 Setup

```bash
git clone https://github.com/your-username/subject-navigator.git
cd subject-navigator
npm install
npm start
```

--

## 🧭 Usage
-🔹 Launch the App
```bash
npm start
```

-🔹 Add a Subject
Enter a subject name.

Click "Select Base Folder" to choose a path.

Click "Create" to save the subject.

-🔹 Edit a Subject
Select a subject from the list.

Update the name or path.

Click "Update".

-🔹 Delete a Subject
Select a subject.

Click "Delete".

-🔹 Navigate to Folder
Click a subject to open its folder in the file explorer.

--

## 🛠️ Development
### 🗂 Project Structure
main.js: Main process logic.

preload.js: Secure IPC communication.

renderer/index.html: Main UI.

css/styles.css: Custom styling.

js/renderer.js: Renderer-side logic.

### 📚 Key Dependencies
electron

electron-store

electron-packager

### 🔄 Dev Workflow
```bash
npm start
```

--

## 📦 Building and Packaging
### 🔧 Build the App
```bash
npm run package
```
Output will appear in: dist/SubjectNavigator-win32-x64

--

## 🤝 Contributing
Fork the repository.

Create your branch: git checkout -b feature-branch

Commit changes: git commit -m "Add feature"

Push to your fork: git push origin feature-branch

Open a Pull Request.

--

## 📜 License
This project is licensed under the MIT License.

--

🙏 Acknowledgments
Built using Electron

Persistent storage by electron-store

Custom UI with plain CSS

Thanks to the open-source community