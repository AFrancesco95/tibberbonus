"use client"

import { useEffect, useState } from "react"

function formatPeriod(date: Date) {
  return date.toLocaleDateString("nl-NL", { month: "long", year: "numeric" })
}

function formatYear(date: Date) {
  return date.getFullYear()
}

function formatDate(date: Date) {
  return date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function useLiveDate<T>(format: (date: Date) => T) {
  const [value, setValue] = useState(() => format(new Date()))

  useEffect(() => {
    const update = () => setValue(format(new Date()))
    update()

    const interval = window.setInterval(update, 60_000)
    return () => window.clearInterval(interval)
  }, [format])

  return value
}

export function CurrentYear() {
  const year = useLiveDate(formatYear)
  return <span suppressHydrationWarning>{year}</span>
}

export function CurrentDate() {
  const date = useLiveDate(formatDate)

  return (
    <span className="whitespace-nowrap" suppressHydrationWarning>
      {date}
    </span>
  )
}

export function CurrentPeriod() {
  const period = useLiveDate(formatPeriod)

  return (
    <span className="whitespace-nowrap" suppressHydrationWarning>
      {period}
    </span>
  )
}
