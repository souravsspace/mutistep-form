import { ReactNode } from "react"

type UserCardStyleProps = {
  children: ReactNode
}

export default function UserCardStyle({ children }: UserCardStyleProps) {
  return (
    <main
      className="grid gap-2 items-center"
      style={{
        gridTemplateColumns: "auto minmax(auto, 400px)",
      }}
    >
      {children}
    </main>
  )
}
