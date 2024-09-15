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
                        View Recipe
                    </Button>
                </DialogTrigger>
                {recipe === selectedRecipe && <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{recipe.name}</DialogTitle>
                        <p className="text-sm text-muted-foreground mb-4">
                            {recipe.description}
                        </p>
                        <div className="flex flex-row gap-3">
                            {recipe.tags.map((tag) => <Badge>
                                    {tag}
                                </Badge>
                            )}

                        </div>
                    </DialogHeader>
                    <div className="mt-2">
                        <p className="text-sm text-muted-foreground mb-4">
                            <Clock className="w-4 h-4 inline-block mr-1"/>
                            {recipe.cookTime + recipe.prepTime} min
                        </p>
                        <h4 className="font-semibold mb-2">Zutaten:</h4>
                        <ul className="list-disc space-y-1 pl-4">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient.name}</li>
                            ))}
                        </ul>
                        <h4 className="font-semibold mb-2">Zubereitung:</h4>
                        <ol className="list-decimal space-y-1 pl-4">
                            {recipe.steps.map((step, index) => (
                                <li key={index}>
                                    {step.description}
                                    <Clock className="w-4 h-4 inline-block mr-1"/>
                                    {step.duration} min
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