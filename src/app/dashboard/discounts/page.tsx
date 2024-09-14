import {DiscountSearch} from "~/components/feature-discounts/discount-search";
import {Separator} from "~/components/ui/separator";
import {env} from "~/env";
import {API, API_VERSION, DISCOUNT_ENDPOINT} from "~/server/constants/constants";

export default async function DiscountsPage() {
    const response = await fetch(`${env.APPLICATION_SERVER_URL}${API}${API_VERSION}${DISCOUNT_ENDPOINT}`)
    const products = await response.json();
    return (
        <div className="overflow-y-auto">
            <h1>Rabatte</h1>
            <Separator/>
            <DiscountSearch products={products}/>
        </div>
    );
}
