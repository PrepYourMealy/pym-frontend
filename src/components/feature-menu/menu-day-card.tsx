import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import {Clock} from "lucide-react";
import {DayMenu, Recipe} from "~/server/domain/types";
import {RecipeDialog} from "~/components/feature-menu/recipe-dialog";

interface Props {
    day: DayMenu;
    dayName: string;
    selectedRecipe: Recipe | null;
    setSelectedRecipe: (recipe: Recipe) => void;
}

export function MenuDayCard({day, dayName, selectedRecipe, setSelectedRecipe}: Props) {
    return <Card className="w-full">
        <CardHeader>
            <CardTitle className="text-xl">{dayName}</CardTitle>
        </CardHeader>
        <CardContent>
            {day.breakfast && <div className="mb-4 last:mb-0">
                <h3 className="font-semibold text-lg mb-2">Morgens: {day.breakfast.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Clock className="w-4 h-4 mr-1"/>
                    <span>{day.breakfast.cookTime} min</span>
                </div>
                <RecipeDialog recipe={day.breakfast} selectedRecipe={selectedRecipe} onClick={setSelectedRecipe} />
            </div>}
            {day.lunch && <div className="mb-4 last:mb-0">
                <h3 className="font-semibold text-lg mb-2">Mittag: {day.lunch.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Clock className="w-4 h-4 mr-1"/>
                    <span>{day.lunch.cookTime} min</span>

                </div>
                <RecipeDialog recipe={day.lunch} selectedRecipe={selectedRecipe} onClick={setSelectedRecipe} />
            </div>}
            {day.dinner && <div className="mb-4 last:mb-0">
                <h3 className="font-semibold text-lg mb-2">Abend: {day.dinner.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Clock className="w-4 h-4 mr-1"/>
                    <span>{day.dinner.cookTime} min</span>

                </div>
                <RecipeDialog recipe={day.dinner} selectedRecipe={selectedRecipe} onClick={setSelectedRecipe} />
            </div>}
        </CardContent>
    </Card>
}