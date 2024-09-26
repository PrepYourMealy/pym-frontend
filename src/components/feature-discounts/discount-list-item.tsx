import {Button} from "~/components/ui/button";
import {ChevronRight, Plus} from "lucide-react";
import {Discount} from "~/server/domain/types";

interface Props {
    item: Discount;
    handleAddToList: (item: Discount) => void;
}

export function DiscountListItem({item, handleAddToList}: Props) {
    return (<div className="flex items-center py-4 max-w-full">
        <img src={item.img!} alt={item.name!} className="w-20 h-20 object-cover rounded-md mr-4"/>
        <div className="flex-grow">
            <h3 className="font-bold text-lg text-wrap">{item.name}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
            <div className="flex items-center mt-2">
                <span className="text-lg font-bold mr-2">{item.dataOrigin == 'LIDL'? '€' : ''}{item.price}</span>
                {item.originalPrice && <span className="text-sm line-through text-gray-400 mr-2">{item.originalPrice}</span>}
                {item.discount && <span className="text-sm font-semibold text-red-600">{item.discount}</span>}
            </div>
            <div className="mt-2">
                    <span
                        className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white">
                      {item.dataOrigin}
                    </span>
            </div>
        </div>
        <div className="flex flex-col items-end ml-4">
            <Button
                onClick={() => handleAddToList(item)}
                className="mb-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white"
                size="sm"
            >
                <Plus className="h-4 w-4 mr-1"/>
                Add
            </Button>
            <Button variant="ghost" size="sm">
                <ChevronRight className="h-4 w-4"/>
            </Button>
        </div>
    </div>);
}