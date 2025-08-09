interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://docs.watcha.cn/', // Write here your website url
	author: 'watcha', // Site author
	title: '观猹 Blog', // Site title.
	description: '观猹文档', // Description to display in the meta tags
	lang: 'zh-CN',
	ogLocale: 'zh_CN',
	shareMessage: '分享这篇文章', // 在社交媒体上分享文章的消息
	paginationSize: 6 // Number of posts per page
}
