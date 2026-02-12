import { ReactNode } from "react"

type LayoutProps = {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {children}
    </div>
  )
}