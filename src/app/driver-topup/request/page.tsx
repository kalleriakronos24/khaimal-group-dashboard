"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DriverTopupTable from "@/components/Tables/DriverTopup";

// export const metadata: Metadata = {
//     title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
//     description:
//         "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

const DriverTopupRequest = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Driver Topup Request" />
            <div className="flex flex-col gap-10">
                <DriverTopupTable />
            </div>
        </DefaultLayout>
    );
};

export default DriverTopupRequest;
