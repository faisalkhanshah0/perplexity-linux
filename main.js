const { app, BrowserWindow, Menu, shell, ipcMain } = require('electron');
const path = require('path');
const http = require('http');
const url = require('url');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    icon: path.join(__dirname, 'assets/icons/build/icons/64x64.png')
  });

  win.loadURL("https://www.perplexity.ai/");
  Menu.setApplicationMenu(null);

  // Example: handle Google login button
  ipcMain.handle("login-google", async () => {
    const redirectUri = "http://localhost:3000/callback";

    // Start temporary HTTP server to catch redirect
    const server = http.createServer((req, res) => {
      const query = url.parse(req.url, true).query;
      if (query.code) {
        // Got the OAuth code
        console.log("Google OAuth Code:", query.code);
        win.webContents.send("google-auth-code", query.code);

        res.end("✅ You can close this window now.");
        server.close();
      }
    }).listen(3000);

    // Open Google login in default browser
    const clientId = "YOUR_GOOGLE_CLIENT_ID";
    const scope = "openid profile email";
    const authUrl =
      `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`;

    shell.openExternal(authUrl);
  });
}

app.whenReady().then(createWindow);
