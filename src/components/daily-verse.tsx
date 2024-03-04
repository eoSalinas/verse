import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export function DailyVerse() {
  return (
    <div className="px-6 md:w-[75%] lg:w-[70%] xl:w-[50%]">
      <Card>
        <CardHeader>
          <CardTitle>1ª Coríntios - 1:11</CardTitle>
          <CardDescription>
            Escrito por <span className="underline">Paulo</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h1>
            &quot;Mas agora estou lhes escrevendo que não devem associar-se com
            qualquer que, dizendo-se irmão, seja imoral, avarento, idólatra,
            caluniador, alcoólatra ou ladrão. Com tais pessoas vocês nem devem
            comer.&quot;
          </h1>
        </CardContent>
      </Card>
    </div>
  )
}
