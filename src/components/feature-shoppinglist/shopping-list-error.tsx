import { Button } from "~/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ShoppingListError() {
    return (
        <Card className="w-full max-w-md overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-6">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-white">Kein Einkausliste vorhanden</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-white">
                        Es muss erst noch ein Menü generiert werden, damit Sie ihre Liste sehen können. Bitte erstellen Sie zuerst ein Menü.
                    </p>
                </CardContent>
                <CardFooter className="pt-6 pb-0 px-0">
                    <Link href="/dashboard/menu" className="w-full">
                        <Button
                            className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-white border-2 rounded-full font-semibold text-lg py-3 transition-all duration-300 flex items-center justify-center"
                        >
                            Menü erstellen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </CardFooter>
            </div>
        </Card>
    )
}