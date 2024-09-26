"use client";
import {Separator} from "~/components/ui/separator";
import {useEffect, useState} from "react";
import {DashboardNav} from "~/components/feature-common/dashboard-nav";
import {DashboardContent} from "~/components/feature-common/dashboard-content";
import {DiscountListItem} from "~/components/feature-discounts/discount-list-item";
import { Discount } from "~/server/domain/types";

export default function DiscountsPage() {
    const [discounts, setDiscounts] = useState<Discount[]>([]);
    useEffect(() => {
        fetch('/api/discount', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(setDiscounts)
    }, []);

    return (
        <>
            <DashboardNav title="Rabatte"/>
            <DashboardContent>
                <div className="space-y-4 pb-20 mt-8">
                    {discounts.map((discount, index) => (<div key={discount.id}>
                        <DiscountListItem item={discount} handleAddToList={() => {}}/>
                        {index < discounts.length - 1 && <Separator />}
                    </div>))}
                </div>
            </DashboardContent>
        </>
);
}
