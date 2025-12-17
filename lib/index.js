
"use strict";

const chalk = require("chalk");

console.log(chalk.magentaBright.bold(`
███████╗ █████╗ ████████╗██╗  ██╗ █████╗     ███████╗████████╗ ██████╗ ██████╗ ███████╗
██╔════╝██╔══██╗╚══██╔══╝██║  ██║██╔══██╗    ██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝
███████╗███████║   ██║   ███████║███████║    ███████╗   ██║   ██║   ██║██████╔╝█████╗  
╚════██║██╔══██║   ██║   ██╔══██║██╔══██║    ╚════██║   ██║   ██║   ██║██╔══██╗██╔══╝  
███████║██║  ██║   ██║   ██║  ██║██║  ██║    ███████║   ██║   ╚██████╔╝██║  ██║███████╗
╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝
`));

console.log(chalk.whiteBright.bold("╔════════════════════════════════════════════════════════════╗"));
console.log(chalk.whiteBright.bold("║        𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝚂𝙰𝚃𝙷𝚈𝙰 𝚂𝚃𝙾𝚁𝙴              ║"));
console.log(chalk.whiteBright.bold("╚════════════════════════════════════════════════════════════╝\n"));

console.log(chalk.whiteBright("Halo pengguna, terima kasih telah memilih baileys SATHYA STORE."));
console.log(chalk.whiteBright("Bot Anda sekarang berjalan dengan performa optimal, cepat, dan stabil. 🚀🔥⚡"));
console.log(chalk.cyan("────────────────────────────────────────────────────────────"));
console.log(chalk.blue("📞 Kontak: ") + chalk.magenta.bold("@sathyaOfficial"));
console.log(chalk.green("🛒 Store: ") + chalk.yellow.bold("https://sathyastoreprojec.my.id/"));
console.log(chalk.cyan("────────────────────────────────────────────────────────────"));

const latestUpdate = new Date("2025/12/12");
console.log(chalk.greenBright("📅 Tanggal Pembuatan: ") + chalk.whiteBright(latestUpdate.toLocaleDateString()));
console.log(chalk.magenta.bold("👨‍💻 Developer: sathyaOfficial"));
console.log(chalk.cyan("────────────────────────────────────────────────────────────\n"));

// Indikator status berwarna
console.log(chalk.green("█") + chalk.yellow("█") + chalk.red("█ ") + chalk.white("Status: ") + chalk.green.bold("ONLINE & READY"));
console.log(chalk.cyan("════════════════════════════════════════════════════════════\n"));

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
