"use client"
import { useState, useEffect } from "react"

export function useCountUp(end: number, duration = 2000, delay = 0) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let timer: NodeJS.Timeout
        let counter: NodeJS.Timeout

        timer = setTimeout(() => {
            let start = 0
            // Calculate increment to fit in duration (approx 60fps -> 16ms)
            const totalFrames = duration / 16
            const increment = end / totalFrames

            counter = setInterval(() => {
                start += increment
                if (start >= end) {
                    setCount(end)
                    clearInterval(counter)
                } else {
                    setCount(Math.floor(start))
                }
            }, 16)
        }, delay * 1000) // delay is in seconds in the prompt passed as argument but here logic receives it. 
        // The prompt usage said `delay` (e.g. 0.9s), so likely seconds.
        // The hook implementation in the prompt had `setTimeout(..., delay)`.
        // If the user passes seconds (e.g. 0.9), setTimeout(0.9) is instant.
        // I will assume the user meant milliseconds in the implementation or seconds in the props.
        // The prompt code `const timer = setTimeout(() => { ... }, delay);` suggests delay is in ms if passed directly.
        // However, usage `delay 0.9s` implies seconds.
        // I will adjust to accept seconds and convert to ms for `setTimeout` to be safe and clearer.

        return () => {
            clearTimeout(timer)
            clearInterval(counter)
        }
    }, [end, duration, delay])

    return count
}
