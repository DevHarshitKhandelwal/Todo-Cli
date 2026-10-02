# Task CLI (Todo List CLI)

A lightweight command-line interface (CLI) application built with Node.js to manage your daily tasks efficiently right from your terminal.

- **Project Page URL**: https://roadmap.sh/projects/task-tracker
- **GitHub Repository URL**: https://github.com/DevHarshitKhandelwal/Todo-Cli

---

## 🚀 Features

- ➕ **Add Tasks**: Easily append new tasks to your task list.
- 📋 **List Tasks**: View all recorded tasks with their corresponding IDs.
- ✏️ **Update Tasks**: Modify existing task descriptions by ID.
- ❌ **Delete Tasks**: Remove completed or obsolete tasks with automatic ID re-indexing.
- 💾 **Local Persistence**: Task data is automatically stored in `Task.json`.

---

## 📋 Prerequisites

Before running this application, make sure you have:
- [Node.js](https://nodejs.org/) (v12.x or higher) installed.

---

## 📦 Installation & Quick Start

1. Open your terminal in the project directory:
   ```bash
   cd "d:/task cli"
   ```
2. Execute tasks directly using Node.js!

---

## 🛠️ Usage & Commands

Run the CLI using `node file.js <command> [arguments]`:

### 1. Add a Task
Add a new task to your list:
```bash
node file.js add "Buy groceries"
node file.js add "Complete project documentation"
```

### 2. List All Tasks
View all stored tasks along with their assigned IDs:
```bash
node file.js list
```
**Output Example:**
```text
All Task Lists:
1. Buy groceries
2. Complete project documentation
```

### 3. Update a Task
Update a task's description using its ID:
```bash
node file.js update 1 "Buy groceries and snacks"
```

### 4. Delete a Task
Delete a task by ID (remaining task IDs automatically re-index):
```bash
node file.js delete 1
```

### 5. Exit Command
```bash
node file.js exit
```

---

## 📁 Project Structure

```text
task-cli/
├── file.js             # Core CLI application logic
├── package.json        # Node project configuration
├── .gitignore          # Git ignore rules
├── Task.json           # Auto-generated task storage (JSON)
└── README.md           # Project documentation
```

---

## 💾 Data Storage

Tasks are automatically stored locally in `Task.json`. If `Task.json` does not exist on initial execution, the script automatically generates it.
