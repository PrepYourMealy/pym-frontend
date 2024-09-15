"use client";
import {DiscountSearch} from "~/components/feature-discounts/discount-search";
import {Separator} from "~/components/ui/separator";
import {env} from "~/env";
import {API, API_VERSION, DISCOUNT_ENDPOINT} from "~/server/constants/constants";
import {useEffect, useState} from "react";

export default function DiscountsPage() {
    const [discounts, setDiscounts] = useState([]);
    useEffect(() => {
       fetch(`${env.APPLICATION_SERVER_URL}${API}${API_VERSION}${DISCOUNT_ENDPOINT}`)
              .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
              })
              .then(setDiscounts)
    }, []);

    return (
        <div className="overflow-y-auto">
            <h1>Rabatte</h1>
            <Separator/>
            <DiscountSearch products={discounts}/>
        </div>
    );
}
