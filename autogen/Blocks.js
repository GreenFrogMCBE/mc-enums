const fs = require("fs")

const blocks = [
	// You have to do this yourself
]

function to_upper_camel_case(str) {
	return str.replace(/[-_](\w)/g, (_, letter) => letter.toUpperCase())
		.replace(/^\w/, (letter) => letter.toUpperCase());
}

let result = '/* [import-ignore] */ import { Block } from "./Block"'

for (const block of blocks) {
	const name = Object.keys(block)[0]
	const class_name = to_upper_camel_case(name)
	const { legacy_id } = Object.values(block)[0]
	
	result += `
		class ${class_name} extends Block {
			public id: number = ${legacy_id}

			public name: string = "${name}"
		}

		export { ${class_name} }
	`
}

fs.writeFileSync("./AutoGeneratedBlocks.ts", result.replaceAll("		", ""))