import { redirect } from 'next/navigation'

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
	const lang = navigator.language

	if(lang === 'pt-BR' || lang === 'pt') {
		redirect('/pt')
	}else{
		redirect('/en')
	}
}
