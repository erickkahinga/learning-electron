const versionInfo = document.getElementById('info')
versionInfo.innerText = `This app is using Chrome: (v${api.chrome()})\n Node: (v${api.node()})\n Electron: (v${api.electron()}))`

const func = async () => {
  const response = await window.api.ping()
  console.log(response)
}

func()