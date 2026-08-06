"use client";

import { createContext, useContext, useState } from "react";

const DashboardSidebarContext = createContext();

export function DashboardSidebarProvider({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <DashboardSidebarContext.Provider
            value={{ sidebarOpen, setSidebarOpen }}
        >
            {children}
        </DashboardSidebarContext.Provider>
    );
}

export function useDashboardSidebar() {
    return useContext(DashboardSidebarContext);
}