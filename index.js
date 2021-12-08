const automator = require('miniprogram-automator')

automator.launch({
  projectPath: '/tmp/app-application/1.0.0/source/dist/weapp', // 项目文件地址
}).then(async miniProgram => {
  const page = await miniProgram.reLaunch('/pages1/index')
  await page.waitFor(500)
  await miniProgram.close()
})
