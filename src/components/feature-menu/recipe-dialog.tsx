import {Recipe} from "~/server/domain/types";
import {Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle} from "~/components/ui/dialog";
import {Button} from "~/components/ui/button";
import {Badge} from "~/components/ui/badge";
import React from "react";
import {Clock} from "lucide-react";


interface Props {
    recipe: Recipe;
    selectedRecipe: Recipe | null;
    onClick: (recipe: Recipe) => void;
}

export function RecipeDialog({recipe, selectedRecipe, onClick}: Props) {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => onClick(recipe)}
                    >
                        Zum Rezept
                    </Button>
                </DialogTrigger>
                {recipe === selectedRecipe && <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{recipe.name}</DialogTitle>
                        <p className="text-sm text-muted-foreground mb-4">
                            {recipe.description}
                        </p>
                        <div className="flex flex-row gap-2">
                            {recipe.tags.map((tag) => <Badge>
                                    {tag}
                                </Badge>
                            )}

                        </div>
                    </DialogHeader>
                    <div>
                        <p className="text-sm text-muted-foreground mb-4 flex flex-row gap-2 items-center">
                            <Clock className="w-4 h-4"/>
                            <div>
                                {recipe.cookTime} min
                            </div>
                        </p>
                        <h4 className="font-semibold mb-2">Zutaten:</h4>
                        <ul className="list-disc space-y-1 pl-4">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient.name}</li>
                            ))}
                        </ul>
                        <h4 className="font-semibold mb-2 mt-2">Zubereitung:</h4>
                        <ol className="list-decimal space-y-1 pl-4">
                            {recipe.steps.map((step, index) => (
                                <li key={index}>
                                    {step.description}
                                </li>
                            ))}
                        </ol>
                    </div>
                </DialogContent>
                }
            </Dialog>
        </div>
    );

}