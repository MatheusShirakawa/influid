
export const scrollDown = (id: string) => {
	if (document.getElementById(id)) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
}
