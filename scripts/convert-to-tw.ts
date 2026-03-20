import fs from 'node:fs'
import path from 'node:path'
import fg from 'fast-glob'
import * as OpenCC from 'opencc-js'

const converter = OpenCC.Converter({ from: 'cn', to: 'tw' })

const { globSync } = fg

const SOURCE_DIR = 'docs'
const TARGET_DIR = 'docs/zh-TW'

// 1. 获取所有 .md 文件，排除目标目录
const files: string[] = globSync(['docs/**/*.md', '!docs/zh-TW/**'])

console.log(`[LOG] 正在检查 KWGT Wiki 繁体版，共 ${files.length} 个文件...`)

let convertedCount = 0
let skippedCount = 0

files.forEach((file: string) => {
  const relativePath = path.relative(SOURCE_DIR, file)
  const targetPath = path.join(TARGET_DIR, relativePath)
  const targetSubDir = path.dirname(targetPath)

  // 1. 检查是否需要转换（源文件比目标文件更新）
  if (fs.existsSync(targetPath)) {
    const sourceStat = fs.statSync(file)
    const targetStat = fs.statSync(targetPath)
    if (sourceStat.mtimeMs <= targetStat.mtimeMs) {
      skippedCount++
      return
    }
  }

  // 2. 创建目录
  if (!fs.existsSync(targetSubDir)) {
    fs.mkdirSync(targetSubDir, { recursive: true })
  }

  try {
    const content = fs.readFileSync(file, 'utf-8')

    // 3. 执行转换
    const convertedContent = converter(content)

    fs.writeFileSync(targetPath, convertedContent, 'utf-8')
    convertedCount++
    console.log(`[DONE] ${relativePath}`)
  } catch (err: any) {
    console.error(`[ERROR] 转换失败: ${file}`, err.message)
  }
})

console.log(`[SUCCESS] 脚本执行完毕：转换了 ${convertedCount} 个，跳过了 ${skippedCount} 个。`)
