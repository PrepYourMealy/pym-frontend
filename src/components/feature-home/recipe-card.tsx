"use client"

import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Separator } from "~/components/ui/separator"
import { ChevronDownIcon, ChevronUpIcon, ClockIcon, UsersIcon } from "lucide-react"
import {Recipe} from "~/server/domain/types";

interface Props {
    recipe: Recipe,
    mealType?: string | null,
}

export function RecipeCard({recipe, mealType}: Props) {
    const [showIngredients, setShowIngredients] = useState(true)
    const [showSteps, setShowSteps] = useState(false)

    return (
        <Card className="w-full max-w-md mx-auto overflow-hidden">
            <CardHeader className="border-b bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
                <CardTitle className="text-sm">{mealType}</CardTitle>
                <CardTitle className="text-2xl font-bold mb-2">{recipe.name}</CardTitle>
                <p className="text-white/90 mb-4">{recipe.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {recipe.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                            {tag}
                        </Badge>
                    ))}
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-2" />
                        <span className="text-sm">{recipe.cookTime} min</span>
                    </div>
                    <div className="flex items-center">
                        <UsersIcon className="h-4 w-4 mr-2" />
                        <span className="text-sm">Personen {2}</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-4 space-y-6">
                <div>
                    <Button
                        variant="ghost"
                        onClick={() => setShowIngredients(!showIngredients)}
                        className="w-full justify-between p-0 mb-4"
                    >
                        <span className="text-lg font-semibold">Zutaten</span>
                        {showIngredients ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
                    </Button>
                    {showIngredients && (
                        <ul className="space-y-2 pl-4">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="text-muted-foreground">{ingredient.quantity}{ingredient.unit} {ingredient.name}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <Separator />
                <div>
                    <Button
                        variant="ghost"
                        onClick={() => setShowSteps(!showSteps)}
                        className="w-full justify-between p-0 mb-4"
                    >
                        <span className="text-lg font-semibold">Zubereitung</span>
                        {showSteps ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
                    </Button>
                    {showSteps && (
                        <ol className="space-y-4 pl-4">
                            {recipe.steps.map((step, index) => (
                                <li key={index} className="text-muted-foreground">
                                    <span className="font-medium text-foreground mr-2">{index + 1}.</span>
                                    {step.description}
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}