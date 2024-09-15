import {CardContent, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import {redirect, RedirectType} from "next/navigation";

interface Props {
    currentStep: number
    stepCount: number
}
export const WelcomeStep = ({currentStep, stepCount}: Props) => {
    const createDefaultSettings = async () => {
        await fetch("/api/settings/init", {
            method: "POST",
        })
        await fetch("api/menu", {
            method: "POST",
        })
        redirect("/dashboard", RedirectType.replace)
    }

    return <div>
        <CardHeader>
            <CardTitle>Willkommen Bei PrepMyMealy</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="mb-4">Bevor wir dir ein Wochenmenu zusammenstellen können, benötigen wir ein paar Informationen von dir.</p>
            {/*<Progress value={(currentStep + 1) / stepCount * 100} className="mb-2" />*/}
            <p className="text-sm text-gray-500">Schritt {currentStep + 1} von {stepCount}</p>
            <Button onClick={createDefaultSettings}>Überspringe die Konfiguration und starte mit den Standarteinstellungen</Button>
            <p>Settings under Construction please use defaults.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
            {/*<Button*/}
            {/*    onClick={handlePrevious}*/}
            {/*    disabled={currentStep === 0}*/}
            {/*    variant="outline"*/}
            {/*>*/}
            {/*    Previous*/}
            {/*</Button>*/}
            {/*<Button*/}
            {/*    onClick={handleNext}*/}
            {/*    disabled={currentStep === stepCount - 1}*/}
            {/*>*/}
            {/*    {currentStep === stepCount - 1 ? 'Finish' : 'Next'}*/}
            {/*</Button>*/}
        </CardFooter>
    </div>
}