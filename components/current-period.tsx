"use client"

import { useEffect, useState } from "react"

function formatPeriod(date: Date) {
  return date.toLocaleDateString("nl-NL", { month: "long", year: "numeric" })
}

function formatDate(date: Date) {
  return date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function CurrentDate() {
  const [date, setDate] = useState(() => formatDate(new Date()))

  useEffect(() => {
    setDate(formatDate(new Date()))
  }, [])

  return (
    <span className="whitespace-nowrap" suppressHydrationWarning>
      {date}
    </span>
  )
}

export function CurrentPeriod() {
  // Initial value is computed on first render so there is no layout shift.
  // The effect re-syncs it in the visitor's browser, so it is always the
  // real current month/year — no redeploy needed when the month changes.
  const [period, setPeriod] = useState(() => formatPeriod(new Date()))

  useEffect(() => {
    setPeriod(formatPeriod(new Date()))
  }, [])

  return (
    <span className="whitespace-nowrap" suppressHydrationWarning>
      {period}
    </span>
  )
}
