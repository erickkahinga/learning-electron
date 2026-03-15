const versionInfo = document.getElementById('info')
const button = document.getElementById('btn1')

versionInfo.innerText = `This app is using Chrome: (v${api.chrome()})\n Node: (v${api.node()})\n Electron: (v${api.electron()})!`

button.addEventListener('click', async () => {
  const message = await api.buttonClicked()
  console.log(message)
  versionInfo.innerText = `This app is using Chrome: (v${api.chrome()})\n Node: (v${api.node()})\n Electron: (v${api.electron()})!\n\n${message}`
})