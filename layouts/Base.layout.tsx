import { FC, ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "react-query";

type BaseLayoutProps = {
  children: ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }: BaseLayoutProps) => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      { children }
    </QueryClientProvider>
  )
}

export default BaseLayout;