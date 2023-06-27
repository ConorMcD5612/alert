const { app, BrowserWindow } = require('electron')
const { ipcMain, dialog, Notification } = require("electron");
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true,
    }
  })
  win.loadFile('index.html')



  win.webContents.on("did-finish-load", () => {
    dialog.showMessageBox({
        message: "ay yo bro",
        title: "alert",
        buttons: ["Yes", "No"]
    })
  })


}

const NOTIFICATION_TITLE = 'Basic Notification'
const NOTIFICATION_BODY = 'Notification from the Main process'

function showNotification () {
  new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}





app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()
  showNotification()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


