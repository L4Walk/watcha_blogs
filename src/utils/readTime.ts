import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

/**
 * Injects `minutesRead` into frontmatter processed by Remark.
 */
export function remarkReadingTime() {
	return function (tree: unknown, { data }: any) {
		const textOnPage = toString(tree)
		const readingTime = getReadingTime(textOnPage)
		// 确保阅读时间最小为1分钟
		const minutes = Math.max(1, Math.round(readingTime.minutes))
		// readingTime.text will give us minutes read as a friendly string,
		// i.e. "3 min read"
		// data.astro.frontmatter.minutesRead = readingTime.text
		data.astro.frontmatter.minutesRead = `阅读时长 ${minutes} 分钟`
	}
}
