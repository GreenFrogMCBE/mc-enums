const fs = require('fs')
const path = require('path')

function get_all_files(directory) {
  const files = fs.readdirSync(directory)
  let js_files = []

  files.forEach(file => {
    const file_path = path.join(directory, file)
    const stat = fs.statSync(file_path)

    if (stat.isDirectory()) {
      js_files = js_files.concat(get_all_files(file_path))
    } else if (file.endsWith('.js')) {
      js_files.push(file_path)
    }
  })

  return js_files
}

function combine_files(file_paths, output_file) {
  const combined_content = file_paths
    .map(file_path => fs.readFileSync(file_path, 'utf-8'))
    .join('\n')
    .replaceAll("/* [import-ignore] */", "// [ignored] ")
    .replaceAll("_2", "_1") // Fix for blocks, we need a better way of doing this
    .replaceAll("Block_1.", "")

  fs.writeFileSync(output_file, combined_content, 'utf-8')
}

const files_to_combine = get_all_files('./out')

combine_files(files_to_combine, 'index.js')