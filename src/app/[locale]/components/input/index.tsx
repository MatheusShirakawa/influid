interface InputProps {
	type: string
	name: string
	placeholder: string
	value: string
	touched: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
	error?: string
}

export default function Input({
	type,
	name,
	placeholder,
	value,
	touched,
	onChange,
	onBlur,
	error
}: InputProps) {
	return(
		<div>
			<label data-error={error != undefined && value == ''} data-active={value != ''}>
				<input
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					name={name}
					type={type}
					data-lpignore="true"
				/>
				<div className='border-focus'></div>
				<span className='absolute-placeholder'>{placeholder}</span>
			</label>
			{touched && error ? (
				<div className='text-red-500 text-sm mt-1'>{error}</div>
			) : null}
		</div>
	)

}
