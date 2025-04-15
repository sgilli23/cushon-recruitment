import { Toast } from "radix-ui";
import { useEffect, useRef, useState } from "react";

//I've just added this in for some fun to show the amount has been selected alongside in the cart as there are no further steps... I wouldn't really add this toast in!

const CashToast = () => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.Provider swipeDirection="right">
      <button
        className="bg-purple-800 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded-full"
        type="submit"
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 1);
        }}
      >
        Confirm Cash
      </button>
      <Toast.Root
        className="grid grid-cols-[auto_max-content] items-center rounded-xl bg-emerald-500 font-bold p-5 [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className=" flex justify-center font-medium text-slate12 [grid-area:_title]">
          Cha-ching!
        </Toast.Title>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex  list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </Toast.Provider>
  );
};

export default CashToast;
