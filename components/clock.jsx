"use client"

import { useEffect, useState } from "react"

export default function Clock() {
  const [time, setTime] = useState("")
  const [day, setDay] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()

      // Get day abbreviation
      const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
      const dayAbbr = days[now.getDay()]

      // Format time as HH:MM:SS
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")

      setDay(dayAbbr)
      setTime(`${hours}:${minutes}:${seconds}`)
    }

    // Update immediately and then every second
    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-sm">
      REC {day}
      {time}
    </div>
  )
}
