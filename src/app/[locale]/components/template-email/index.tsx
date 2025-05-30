
interface TemplateEmailProps {
	name?: string;
	email?: string;
	message?: string;
}

export default function TemplateEmail({ name, email, message }: TemplateEmailProps) {
	return(
		<div id="template-email" className='template-email'>
			<h1>Email enviado do site Influid</h1>
			<p>Nome: {name}</p>
			<p>Email: {email}</p>
			<p>Mensagem: {message}</p>
			<p>Obrigado por entrar em contato!</p>
			<p>Atenciosamente,</p>
			<p>Equipe Influid</p>
			<p>https://influid.com.br</p>
		</div>
	)
}
