import type { ReactNode } from "react";
import { StoreProvider } from "../StoreProvider";

import Header from "../components/Header";


interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
          <section>
            <Header />
            <main>{children}</main>

          </section>
    </StoreProvider>
  );
}