# 🚀 **LogMojiFy - The Smart Emoji Logger** 🔥

[![npm version](https://img.shields.io/npm/v/logmojify.svg)](https://www.npmjs.com/package/logmojify)  
[![License](https://img.shields.io/github/license/sandunlasntha/logmojify.svg)](https://github.com/sandunlasantha/logmojify/blob/main/LICENSE)

---

## 🎯 **Why LogMojiFy?**

**LogMojiFy** is a lightweight yet powerful logging utility that **automatically enhances console logs** by overriding:  
✅ `console.log`  
✅ `console.warn`  
✅ `console.error`  
✅ `console.debug`

🔹 It assigns **emoji-based categories** for improved **visibility and debugging**.  
🔹 It **automatically detects log purposes** (errors, security, transactions, API calls, etc.) and assigns **relevant emojis** for **instant log identification**.

🚀 **No need to change your existing `console.log` statements—LogMojiFy does all the work for you!**

---

## 🚀 **How to Use LogMojiFy in Your Project**

### **1️⃣ Global Import (Use LogMojiFy Throughout Your Project)**

To enable `logmojify` globally (so it modifies `console.log` everywhere), import it in your main entry file.

| **Project Type**           | **Where to Import**                        |
| -------------------------- | ------------------------------------------ |
| **Node.js (Backend)**      | `index.ts` or `server.ts`                  |
| **React (Vite / CRA)**     | `src/main.tsx` or `src/index.tsx`          |
| **Next.js**                | `pages/_app.tsx` or `app/layout.tsx`       |
| **Vue.js**                 | `main.js` or `main.ts`                     |
| **Global Config Approach** | `src/config.ts`, then import in `index.ts` |

✅ **Example:**

```ts
// src/main.tsx (React) or index.ts (Node.js)
import "logmojify"; // This enables automatic log enhancements globally
```

🚀 **After this, all `console.log` statements will be enhanced everywhere.**

---

### **2️⃣ Import in a Specific File (Scoped Usage)**

If you only need `logmojify` in certain files instead of globally, you can import and use it like this:

```ts
import logger from "logmojify";

logger.setCustomEmojis({ error: "🔥", warn: "⚠️" });

console.log("This is an info message"); // Enhanced with emojis
console.error("Something went wrong!"); // 🔥 Something went wrong!
```

> **Note:** If `logmojify` is imported globally (`import "logmojify";`), you don't need this manual import.

---

## 🤖 **Automatic Log Categorization**

LogMojiFy uses **built-in intelligence** to determine the **most relevant category** based on keywords in your logs.

| Example Log Message                          | Categorized As | Emoji |
| -------------------------------------------- | -------------- | ----- |
| `"Database connection established!"`         | Database       | 🗃️    |
| `"Slow response detected"`                   | Performance    | ⚡    |
| `"Unauthorized access attempt"`              | Security       | 🛡️    |
| `"Fetching API data"`                        | Network        | 📡    |
| `"User clicked the checkout button"`         | User Action    | 🕹️    |
| `"Payment of $49.99 completed successfully"` | Transaction    | 💳    |

✅ **No manual categorization needed—LogMojiFy detects them for you!**

---

## 🎨 **Customizing Emojis**

You can **override default emojis** using `setCustomEmojis()`:

```ts
logger.setCustomEmojis({
  error: "🔥",
  warn: "⚠️",
  debug: "🐞",
  success: "🎉",
});
```

Now, logs will use **your custom emojis** instead of the defaults.

---

## 📌 **Default Log Categories & Emojis**

| Log Type      | Emoji | Description                                |
| ------------- | ----- | ------------------------------------------ |
| `info`        | 💡    | General information logs                   |
| `warn`        | ⚠️    | Warnings that require attention            |
| `error`       | ❌    | Errors & failures                          |
| `debug`       | 🔍    | Debugging information                      |
| `success`     | 🎯    | Success messages                           |
| `network`     | 📡    | Network-related logs (API calls, requests) |
| `db`          | 🗃️    | Database operations                        |
| `critical`    | 🚨    | Critical issues requiring urgent action    |
| `security`    | 🛡️    | Security-related events                    |
| `performance` | ⚡    | Performance optimizations & latency issues |
| `analytics`   | 📈    | Tracking, metrics, and analytics events    |
| `event`       | 🎊    | Event-driven logs (tasks, jobs)            |
| `user-action` | 🕹️    | User interactions & UI events              |
| `system`      | 🖥️    | System & process logs                      |
| `audit`       | 📜    | Compliance and audit logs                  |
| `config`      | ⚙️    | Configuration changes                      |
| `testing`     | 🧪    | Logs related to testing & debugging        |
| `ai`          | 🤖    | AI/ML-related logs                         |
| `transaction` | 💳    | Payment & transaction logs                 |
| `file`        | 📁    | File operations (upload/download)          |

---

## 🛠 **How is LogMojiFy Different from Other Loggers?**

Unlike **Winston**, **Pino**, or **default `console.log`**, LogMojiFy **automatically categorizes logs** and **enhances console methods without extra setup**.

| Feature                          | LogMojiFy | Other Loggers (e.g., Winston, Pino) |
| -------------------------------- | --------- | ----------------------------------- |
| **Automatic Console Override**   | ✅ Yes    | ❌ No (Requires explicit calls)     |
| **Automatic Log Categorization** | ✅ Yes    | ❌ No                               |
| **Emoji-Based Logging**          | ✅ Yes    | ❌ No                               |
| **Color-Coded Output**           | ✅ Yes    | ✅ Yes                              |
| **Customizable Emojis**          | ✅ Yes    | ❌ No                               |
| **Works in Browser & Node.js**   | ✅ Yes    | ❌ Most are Node-only               |

🚀 **No need to refactor your code—LogMojiFy makes logs instantly better!**

---

## 📜 **How to Disable the Console Override**

If you ever need to disable LogMojiFy and restore the default console methods:

```ts
console.log = console.constructor.prototype.log;
console.warn = console.constructor.prototype.warn;
console.error = console.constructor.prototype.error;
console.debug = console.constructor.prototype.debug;
```

---

## 🏗️ **Contributing**

Contributions are welcome! Follow these steps:

1️⃣ **Fork the repository**  
2️⃣ **Create a feature branch** (`feature/new-feature`)  
3️⃣ **Commit your changes**  
4️⃣ **Push to GitHub & create a PR**

---

## 📝 **License**

MIT License © 2025 [sandunlasntha](https://github.com/sandunlasantha)

---

🔹 **Stay Updated!**  
📦 [View on npm](https://www.npmjs.com/package/logmojify)  
🌟 [Star on GitHub](https://github.com/sandunlasantha/logmojify)

---

### ✨ **Now, Enjoy LogMojiFy and Make Your Logs Fun & Readable!** 🎉🚀
