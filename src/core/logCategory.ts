import { LogType } from "../types/logTypes.js";

const categoryMap: Record<string, LogType> = {
  // 🔒 Security-related logs
  "\\b(unauthorized|forbidden|access denied|blocked|violation|breach|firewall|malware|attack|hacked|intrusion|ransomware|cyberattack|compromise|threat|exploited|phishing|credential leak|ddos|unauthenticated)\\b":
    "security",

  // ❌ Error & Failure logs
  "\\b(error|fail|failure|crash|fatal|exception|bug|issue|panic|unhandled|stack trace|timeout|misconfiguration|unexpected|fatal error|severe)\\b":
    "error",

  // ⚠️ Warning logs
  "\\b(warn|warning|caution|deprecated|alert|unstable|risk|potential issue|low disk space|memory leak|possible failure|threshold exceeded)\\b":
    "warn",

  // ✅ Success logs
  "\\b(success|completed|approved|confirmed|done|resolved|passed|achieved|verified|greenlight|executed successfully|successful operation)\\b":
    "success",

  // 🛠 Debugging logs
  "\\b(debug|trace|log|verbose|inspect|testing|troubleshoot|diagnostic|sandbox|devmode|debugging session|profiling|debug mode)\\b":
    "debug",

  // 🌐 Network-related logs
  "\\b(network|http|fetch|axios|dns|proxy|request|response|socket|connection|bandwidth|firewall|api call|retry|ping|port|tls|certificate|latency)\\b":
    "network",

  // 💾 Database-related logs
  "\\b(database|db|sql|query|mongo|postgres|index|table|collection|transaction|ORM|replication|backup|cache|nosql|record|datastore|rdbms|shard)\\b":
    "db",

  // 🔥 Critical failure logs
  "\\b(critical|shutdown|restart required|danger|system failure|emergency|fatal error|downtime|service disruption|data loss|high priority|critical alert|escalation)\\b":
    "critical",

  // ⚡ Performance-related logs
  "\\b(performance|slow|latency|optimization|bottleneck|speed|response time|throughput|load time|timeout|benchmarking|cpu usage|memory usage|efficiency|scale)\\b":
    "performance",

  // 📊 Analytics & Tracking logs
  "\\b(analytics|tracking|event|metric|report|KPI|dashboard|insights|conversion|clickstream|data pipeline|business intelligence|growth analysis|AB test)\\b":
    "analytics",

  // 📅 Event-driven logs
  "\\b(event|scheduled|job|task|workflow|trigger|automation|cron|batch|background process|hook|handler|queue|pipeline|state change)\\b":
    "event",

  // 🖥 System logs
  "\\b(system|boot|startup|process|kernel|service|daemon|thread|monitoring|uptime|health check|heartbeat|syslog|operation|device log)\\b":
    "system",

  // 💰 Transaction & Payment logs
  "\\b(transaction|payment|invoice|order|billing|checkout|purchase|subscription|refund|ecommerce|credit|debit|paywall|commerce|ledger|financial record)\\b":
    "transaction",

  // 📄 File-related logs
  "\\b(file|upload|download|export|import|attachment|directory|backup|restore|transfer|compression|extraction|storage|filesystem|file access)\\b":
    "file",

  // 🤖 AI & Machine Learning logs
  "\\b(ai|machine learning|ml|training|model|inference|neural network|tensorflow|pytorch|fine-tuning|bias|prediction|dataset|hyperparameter|deep learning|autoML)\\b":
    "ai",

  // 🔧 Configuration logs
  "\\b(config|configuration|setting|parameter|env variable|feature flag|toggle|preferences|setup|bootstrapping|runtime option|system preference)\\b":
    "config",

  // 📝 Audit & Compliance logs
  "\\b(audit|compliance|governance|policy|log retention|ISO|HIPAA|GDPR|SOX|security review|logging policy|traceability|audit trail|legal compliance)\\b":
    "audit",

  // 🚀 Testing & QA logs
  "\\b(testing|unit test|integration test|functional test|regression test|QA|automation script|assertion|test suite|mock data|sandbox|staging|beta|test execution)\\b":
    "testing",

  // 🖱 User Interaction logs
  "\\b(user-action|click|tap|keypress|swipe|hover|scroll|input|form submission|gesture|interaction|UX|UI event|front-end event|mouse event)\\b":
    "user-action",
};

export const detectLogCategory = (
  message: any,
  customType?: LogType
): LogType => {
  if (customType) return customType;
  if (!message) return "info";

  if (Array.isArray(message)) {
    return (
      message
        .map((item) => detectLogCategory(item))
        .find((type) => Object.values(categoryMap).includes(type)) || "info"
    );
  }

  let detectedCategory: LogType = "info";
  let highestScore = 0;

  for (const [pattern, type] of Object.entries(categoryMap)) {
    const matches = message.match(new RegExp(pattern, "gi"));

    if (matches) {
      const score = matches.length;
      if (score > highestScore) {
        highestScore = score;
        detectedCategory = type;
      }
    }
  }

  return detectedCategory;
};
