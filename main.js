const electron = require('electron')
const trayWindow = require('electron-tray-window')
const { app, Menu, Tray, BrowserWindow } = require('electron')

let tray = null
let win = null
app.whenReady().then(() => {
    tray = new Tray('res/icon.png')
    const contextMenu = Menu.buildFromTemplate([
        {label: 'Quit', type: 'normal',  role: 'quit'}
    ])
    tray.setContextMenu(contextMenu)
    win = new BrowserWindow({
        width: 400,
        height: 400,
        frame: false,
        skipTaskbar: true,
    })
    win.loadFile('index.html')
    trayWindow.setOptions({
        tray: tray,
        window: win,
    })
})

app.on('before-quit', () => {
    tray.destroy()
    win.destroy()
})

