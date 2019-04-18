import { app, BrowserWindow, webContents } from 'electron'
import * as path from 'path';


let mainWindow: BrowserWindow;

function createWindow(): void {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 500,
        webPreferences: {nodeIntegration: false},
        frame: false
    });

    let indexFilePath = path.join(__dirname, "index.html");
    mainWindow.loadFile(indexFilePath);

    mainWindow.webContents.openDevTools();

    console.log("Creating the main window");

}

app.on('ready', createWindow);