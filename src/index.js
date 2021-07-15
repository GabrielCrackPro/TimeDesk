const { app, BrowserWindow, Menu } = require("electron");

let mainWindow;
const templateMenu = [
  {
    label: "File",
    submenu: [{ label: "New" }],
  },
  {
    label: "Quit",
    click: () => {
      app.quit();
    },
  },
];
app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/views/index.html`);
  Menu.setApplicationMenu(Menu.buildFromTemplate(templateMenu));
});
if (process.platform == "darwin") {
  templateMenu.unshift({
    label: app.getName(),
  });
}
