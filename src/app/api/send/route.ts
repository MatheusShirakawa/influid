import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import TemplateEmail from '@/app/[locale]/components/template-email'

const apiKey = 're_JB7reHom_AqD9jw4GDwxTsUn5fBuDooaf'
const resend = new Resend(apiKey);

// export async function POST(req: NextApiRequest, res: NextApiResponse){
// 	const { name, email, message } = req.body;

// 	console.log('Received data:', { name, email, message });

// 	if (!name || !email || !message) {
// 		return res.status(400).json({ error: 'Missing required fields' });
// 	}

// 	const { data, error } = await resend.emails.send({
// 		from: 'onboarding@resend.dev',
// 		to: 'matheus_shirakawa@outlook.com',
// 		subject: 'Novo contato do site Influid',
// 		react: TemplateEmail({ name, email, message }),
// 	});

// 	if (error) {
// 		return res.status(400).json(error);
// 	}

// 	res.status(200).json(data);
// }

export async function POST(request: NextApiRequest, response: NextApiResponse) {

	const { name, email, message } = await request.body();

	const { data, error } = await resend.emails.send({
		from: 'onboarding@resend.dev',
		to: 'matheus_shirakawa@outlook.com',
		subject: 'Novo contato do site Influid',
		react: TemplateEmail({ name, email, message }),
	});

	console.log(data)

	if (error) {
		return response.json(error);
	}

	return response.json({ message: "Email sent successfully" });
}
