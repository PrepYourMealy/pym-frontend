"use client";
import {DiscountSearch} from "~/components/feature-discounts/discount-search";
import {Separator} from "~/components/ui/separator";
import {useEffect, useState} from "react";
import {DashboardNav} from "~/components/feature-common/dashboard-nav";
import {DashboardContent} from "~/components/feature-common/dashboard-content";

export default function DiscountsPage() {
    const [discounts, setDiscounts] = useState([]);
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
                <DiscountSearch products={discounts}/>
            </DashboardContent>
        </>
    );
}
