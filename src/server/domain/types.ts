export type Product = {
  [key: string]: string | Date | null | number;
  id: number;
  img: string | null;
  name: string | null;
  description: string | null;
  price: string | null;
  originalPrice: string | null;
  discount: string | null;
  packaging: string | null;
  availability: string | null;
  dataOrigin: string | null;
};

export type Ingredient = {
  [key: string]: string | null;
  name: string;
  quantity: string;
  unit: string;
};

export type Step = {
    [key: string]: string | number | null;
    description: string;
    duration: number;
}

export type Recipe = {
    [key: string]: string | Ingredient[] | Step[] | string[] | number;
  name: string,
  description: string,
  ingredients: Ingredient[],
  steps: Step[],
  tags: string[],
  prepTime: number,
  cookTime: number,
  servings: number,
}

export type DayMenu = {
    [key: string]: Recipe | null;
    breakfast: Recipe | null;
    lunch: Recipe | null;
    dinner: Recipe | null;
}

export type Menu = {
  [key: string]: DayMenu | null;
  mon: DayMenu;
  tue: DayMenu;
  wed: DayMenu;
  thu: DayMenu;
  fri: DayMenu;
  sat: DayMenu;
  sun: DayMenu;
};


export type ShoppingListItem = {
  [key: string]: number | string | null | boolean;
  name: string;
  price: number;
  quantity: string;
  unit: string;
  origin: string;
  bought: boolean;
};

export type ShoppingList = {
  [key: string]: number | ShoppingListItem[] | null;
  total: number;
  items: ShoppingListItem[];
};



export type User = {
  [key: string]: string | number | null | string[] | boolean;
  id: string;
  budget: number | null;
  favoriteMeals: string[] | null;
  kitchenEquipment: string[] | null;
  dietaryPreferences: string[] | null;
  allergies: string[] | null;
  unlikeIngredients: string[] | null;
  includeDiscounts: boolean | null;
  likedIngredients: string[] | null;
  people: number | null;
};

export type UserStats = {
  [key: string]: number
  weeklyRegenerateRequest: number
}

export type UserLimits = {
  [key: string]: number
  regenerateRequestsPerWeek: number
}

export type UserModel = {
    [key: string]: string | UserStats | UserLimits | null;
    id: string;
    stats: UserStats | null;
    limits: UserLimits | null;
}
