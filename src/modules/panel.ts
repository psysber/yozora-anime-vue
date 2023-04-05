export interface panelData {

	navTags: string[];

	classNav: classNav[];
}

export interface classNav {
	title: string;

	tags: string[];
}

export interface panel {
	name: string;

	panelData: panelData[];

}

