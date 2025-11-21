# Expense Tracker CLI

<p align="center">
  <img src="https://img.shields.io/badge/CLI%20Tool-Node.js-green?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Status-Active-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge"/>
</p>

A simple, command-line based **Expense Tracker** built with **Node.js**.  
Track your spending, manage budgets, and view monthly summaries, all from your terminal.
Inspired from: https://roadmap.sh/projects/expense-tracker
---

##  Features

- ➕ Add, ❌ Delete, and 📋 List expenses
- 📊 View monthly summaries
- 💵 Set and overwrite budgets per month
- 🧭 Filter expenses by category
- 💾 Persistent local storage (JSON-based)

---

##  Tech Stack

- **Node.js**
- **Commander.js** – command-line parsing
- **File System (fs)** – JSON storage

---

##  Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/atrociousdinner/expense-tracker-cli.git
2. **Navigate to the Expense Tracker directory**
   ```bash
   cd expense_tracker
3. **Install dependencies**
   ```bash
   npm install
4. **Make the CLI executable**
   ```bash
   chmod +x index.js
5. **Link it globally to use as a system command:**
   ```bash
   npm link

---

## Usage
```bash
expense_tracker [command] [options]
To get help, use:
expense_tracker --help
expense_tracker [command] --help
