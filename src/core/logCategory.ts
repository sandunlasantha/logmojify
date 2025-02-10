import { LogType } from "../types/logTypes.js";

const categoryMap: { regex: RegExp; type: LogType }[] = Object.entries({
  security:
    "\\b(unauthorized|forbidden|access denied|blocked|violation|breach|firewall|malware|attack|hacked|intrusion|ransomware|cyberattack|compromise|threat|exploited|phishing|credential leak|ddos|unauthenticated)\\b",
  error:
    "\\b(error|fail|failure|crash|fatal|exception|bug|issue|panic|unhandled|stack trace|timeout|misconfiguration|unexpected|fatal error|severe)\\b",
  warn: "\\b(warn|warning|caution|deprecated|alert|unstable|risk|potential issue|low disk space|memory leak|possible failure|threshold exceeded)\\b",
  success:
    "\\b(success|completed|approved|confirmed|done|resolved|passed|achieved|verified|greenlight|executed successfully|successful operation)\\b",
  debug:
    "\\b(debug|trace|log|verbose|inspect|testing|troubleshoot|diagnostic|sandbox|devmode|debugging session|profiling|debug mode)\\b",
  network:
    "\\b(network|http|fetch|axios|dns|proxy|request|response|socket|connection|bandwidth|firewall|api call|retry|ping|port|tls|certificate|latency)\\b",
  db: "\\b(database|db|sql|query|mongo|postgres|index|table|collection|transaction|ORM|replication|backup|cache|nosql|record|datastore|rdbms|shard)\\b",
  critical:
    "\\b(critical|shutdown|restart required|danger|system failure|emergency|fatal error|downtime|service disruption|data loss|high priority|critical alert|escalation)\\b",
  performance:
    "\\b(performance|slow|latency|optimization|bottleneck|speed|response time|throughput|load time|timeout|benchmarking|cpu usage|memory usage|efficiency|scale)\\b",
  analytics:
    "\\b(analytics|tracking|event|metric|report|KPI|dashboard|insights|conversion|clickstream|data pipeline|business intelligence|growth analysis|AB test)\\b",
  event:
    "\\b(event|scheduled|job|task|workflow|trigger|automation|cron|batch|background process|hook|handler|queue|pipeline|state change)\\b",
  system:
    "\\b(system|boot|startup|process|kernel|service|daemon|thread|monitoring|uptime|health check|heartbeat|syslog|operation|device log)\\b",
  transaction:
    "\\b(transaction|payment|invoice|order|billing|checkout|purchase|subscription|refund|ecommerce|credit|debit|paywall|commerce|ledger|financial record)\\b",
  file: "\\b(file|upload|download|export|import|attachment|directory|backup|restore|transfer|compression|extraction|storage|filesystem|file access)\\b",
  ai: "\\b(ai|machine learning|ml|training|model|inference|neural network|tensorflow|pytorch|fine-tuning|bias|prediction|dataset|hyperparameter|deep learning|autoML)\\b",
  config:
    "\\b(config|configuration|setting|parameter|env variable|feature flag|toggle|preferences|setup|bootstrapping|runtime option|system preference)\\b",
  audit:
    "\\b(audit|compliance|governance|policy|log retention|ISO|HIPAA|GDPR|SOX|security review|logging policy|traceability|audit trail|legal compliance)\\b",
  testing:
    "\\b(testing|unit test|integration test|functional test|regression test|QA|automation script|assertion|test suite|mock data|sandbox|staging|beta|test execution)\\b",
  "user-action":
    "\\b(user-action|click|tap|keypress|swipe|hover|scroll|input|form submission|gesture|interaction|UX|UI event|front-end event|mouse event)\\b",
}).map(([type, pattern]) => ({
  type: type as LogType,
  regex: new RegExp(pattern, "i"),
}));

export const detectLogCategory = (
  message: any,
  customType?: LogType
): LogType => {
  if (customType) return customType;
  if (!message) return "info";

  if (Array.isArray(message)) {
    return (
      message
        ?.map((item) => detectLogCategory(item))
        ?.find((type) => categoryMap?.some(({ type: cat }) => cat === type)) ||
      "info"
    );
  }

  for (const { regex, type } of categoryMap) {
    if (regex.test(message)) {
      return type;
    }
  }

  return "info";
};
