import {type ShoppingListItem} from "~/server/domain/types";
import {Check} from "lucide-react";

interface Props {
    item: ShoppingListItem;
    toggleBought: (item: ShoppingListItem) => void;
    variant: "normal" | "bought";
}

export function ShoppingListItemView({item, toggleBought, variant}: Props) {
    return <li className="p-3 flex items-center justify-between">
        <div className="flex-1">
            <h3 className={"font-medium"+ variant === "bought" ? "line-through" : ""}>{item.name}</h3>
            <p className={"text-xs text-gray-500" + variant === "bought" ? "line-through" : ""}>{item.quantity}{item.unit} • {item.origin}</p>
        </div>
        <div className="flex items-center gap-2">
            <p className={"text-sm font-medium mr-2" + variant === "bought" ? "line-through" : ""}>{item.price}€</p>
            {variant === "bought" && <button
                onClick={() => toggleBought(item)}
                className="p-1 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
            >
                <Check className="w-4 h-4"/>
            </button>}
            {variant === "normal" && <button
                onClick={() => toggleBought(item)}
                className="p-1 rounded-full bg-blue-500 text-white hover:bg-blue-600"
            >
                <Check className="w-4 h-4"/>
            </button>}

        </div>
    </li>
}