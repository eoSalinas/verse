import { getPlaceholderVerse } from "./placeholder-verse";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

interface GetVerseResponse {
	book: {
		abbrev: { pt: string; en: string };
		name: string;
		author: string;
		group: string;
		version: string;
	};
	chapter: number;
	number: number;
	text: string;
}

async function getVerse(): Promise<GetVerseResponse> {
	try {
		const response = await fetch(
			"https://www.abibliadigital.com.br/api/verses/nvi/pt/random",
			{
				cache: "force-cache",
				next: {
					tags: ["verse"],
				},
			},
		);

		const verse = await response.json().catch(() => {}); // Catch if API don't send a response, the APP will not crash;

		if (response.status !== 200) {
			// Placeholder verse if API is down
			return getPlaceholderVerse();
		}
		return verse;
	} catch (error) {
		// Will catch if API is down and the fetch fails
		return getPlaceholderVerse();
	}
}

export async function DailyVerse() {
	const { book, chapter, number, text } = await getVerse();

	return (
		<div className="px-6 md:w-[75%] lg:w-[70%] xl:w-[50%]">
			<Card>
				<CardHeader>
					<CardTitle>
						{book.name} - {chapter}:{number}
					</CardTitle>
					<CardDescription>
						Escrito por <span className="underline">{book.author}</span>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<h1>&quot;{text.replace('"', "")}&quot;</h1>
				</CardContent>
			</Card>
		</div>
	);
}
