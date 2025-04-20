export default function Contact(){
	return(
		<div className='contact max-w-[830px] mx-auto mb-[115px] pt-[120px]'>
			<h2 className='title text-[128px] text-[#00FF99] font-bold text-center'>
				make it <span className='text-white'>flow</span>.
			</h2>
			<div className='contact-form max-w-[648px] mx-auto'>
				<form action="" className='flex flex-col gap-12'>
					<p className='text-[#EBFBFF] block text-base'>Fill the form bellow to send us a message, we will be glad to answer you as soon as possible.</p>
					<label>
						<input
							type="text"
							placeholder='your name'

						/>
					</label>
					<label>
						<input type="email" placeholder='your best e-mail'/>
					</label>
					<label>
						<input type="text" placeholder='text your message'/>
					</label>
					<button type='submit' className='mt-6'>send</button>
				</form>
			</div>
		</div>
	)
}
