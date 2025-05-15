import { redirect } from 'next/navigation'

export default async function RootPage() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	redirect('/en')
}
