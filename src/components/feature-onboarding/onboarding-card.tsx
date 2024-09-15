import { Card} from "~/components/ui/card"
import {WelcomeStep} from "~/components/feature-onboarding/welcome-step";

export function OnboardingCard() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-md">
                <WelcomeStep currentStep={0} stepCount={0} />
            </Card>
        </div>
    )
}