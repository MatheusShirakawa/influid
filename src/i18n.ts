// import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";
// import { locales } from "./config";


// export default getRequestConfig(async ({ locale }) => {
// 	if (!locales.includes(locale as typeof locales[number])) notFound();

// 	const validLocale = locale as string;

// 	return {
// 		locale: validLocale,
// 		messages: (await import(`./messages/${validLocale}.json`)).default,
// 	};
// })
