import { useTranslations } from "next-intl";

export default function Home() {
	const t = useTranslations("Home");
	return (
		<div className="bg-gray-800">
			<main>
				{t("title")}
				{t("description")}
			</main>
		</div>
	);
}
