import { ReactElement } from "react";
import NavBar from "./navBar";
import { FormProvider } from "utils/FormContext";
import QueryProvider from "utils/QueryProvider";

const GlobalLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <main>
        <FormProvider>
          <QueryProvider>{children}</QueryProvider>
        </FormProvider>
      </main>
    </div>
  );
};

export default GlobalLayout;
