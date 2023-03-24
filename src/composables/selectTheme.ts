const themeList = ["light-theme", "dark-theme", "tiger-theme"];

export enum Themes {
	LIGHT,
	DARK,
	TIGER
}


export const switchTheme = (theme: Themes) => {
	let themeName = '';
	switch (theme) {
		case Themes.DARK:
			themeName = themeList[1];
			return;
		case Themes.LIGHT:
			themeName = themeList[0]
			return;
		case Themes.TIGER:
			themeName = themeList[2];
			return;
	}
	setTheme(themeName);
}

// 为 <body> 标签设置相应的主题 class 类名
const setTheme = (name: string) => {
	const body = document.body;
	// 先移除 <body> 标签上原有的主题 class 类名
	themeList.forEach((item) => {
		body.classList.remove(item);
	});

	// 再在 <body> 标签上添加与导航栏上被点击的按钮同名的主题 class 类名
	body.classList.add(name);
}
