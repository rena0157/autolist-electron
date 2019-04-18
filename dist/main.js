"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = __importStar(require("path"));
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 500,
        webPreferences: { nodeIntegration: false }
    });
    var indexFilePath = path.join(__dirname, "index.html");
    mainWindow.loadFile(indexFilePath);
    mainWindow.webContents.openDevTools();
    console.log("Creating the main window");
}
electron_1.app.on('ready', createWindow);
//# sourceMappingURL=main.js.map