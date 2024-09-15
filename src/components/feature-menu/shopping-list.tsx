import { ShoppingListPDFDownload } from "./shopping-list-pdf-download";

export interface ShoppingItem {
  name: string;
  price: number;
  quantity: number;
  unit: string;
  origin: string;
}

interface ShoppingListProps {
  list: {
    total: number;
    items: ShoppingItem[];
  };
}
export function ShoppingList({ list }: ShoppingListProps) {
  return (
    <div className="mx-auto max-w-md rounded bg-white p-6 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-lg font-bold">FoodCreatorAI</h2>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>{new Date().toLocaleDateString("de-DE")}</p>
        </div>
      </div>
      <div className="mb-4 border-t border-muted pt-4">
        <div className="grid grid-cols-4 gap-2 pb-2 text-sm font-medium">
          <div>Item</div>
          <div className="text-right">Menge</div>
          <div className="text-right">Preis</div>
          <div className="text-right">Laden</div>
        </div>
        <div className="space-y-2">
          {list.items.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-2 text-sm">
              <div>{item.name}</div>
              <div className="text-right">{item.quantity + " " + item.unit}</div>
              <div className="text-right">€ {item.price.toFixed(2)}</div>
              <div className="text-right">{item.origin}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-muted pt-4">
        <div className="grid grid-cols-2 gap-2 text-sm font-medium"></div>
        <div className="grid grid-cols-2 gap-2 text-sm font-medium"></div>
        <div className="grid grid-cols-2 gap-2 text-lg font-medium">
          <div>Summe</div>
          <div className="text-right">€ {list.total}</div>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Vielen Dank!
      </div>
      <ShoppingListPDFDownload list={list} />
    </div>
  );
}
