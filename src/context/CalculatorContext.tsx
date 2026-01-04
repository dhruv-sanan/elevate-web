"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface CalculatorContextType {
    orders: number
    setOrders: (orders: number) => void
    aov: number
    setAov: (aov: number) => void
    savings: number
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined)

export function CalculatorProvider({ children }: { children: ReactNode }) {
    const [orders, setOrders] = useState(500)
    const [aov, setAov] = useState(500)
    const [savings, setSavings] = useState(0)

    // Commission rate (30%)
    const COMMISSION_RATE = 0.30

    useEffect(() => {
        const monthlyRevenue = orders * aov
        const commission = monthlyRevenue * COMMISSION_RATE
        setSavings(commission)
    }, [orders, aov])

    return (
        <CalculatorContext.Provider value={{ orders, setOrders, aov, setAov, savings }}>
            {children}
        </CalculatorContext.Provider>
    )
}

export function useCalculator() {
    const context = useContext(CalculatorContext)
    if (context === undefined) {
        throw new Error("useCalculator must be used within a CalculatorProvider")
    }
    return context
}
