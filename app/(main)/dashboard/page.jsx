import { getUserAccounts } from "@/actions/dashboard";
import CrateAccountDrawer from "@/components/create.account.drawer";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import React from "react";
import { get } from "react-hook-form";
import AccountCard from "./_components/accounts-card";

export default async function DashboardPage() {
  const accounts = await getUserAccounts();

  return (
    <div className="px-5">
      {/* Budget Progress */}

      {/* Overview */}

      {/* Accounts Grid  */}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CrateAccountDrawer>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5 ">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium ">Add New Account</p>
            </CardContent>
          </Card>
        </CrateAccountDrawer>

        {accounts.length > 0 &&
          accounts?.map((account) => {
            return <AccountCard key={account.id} account={account} />;
          })}
      </div>
    </div>
  );
}
