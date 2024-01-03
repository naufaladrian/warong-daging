/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/9LHNmP57IRY
 */
import { Button } from "@/components/ui/button"

export default function cart() {
  return (
    (<section className="w-full py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div className="grid gap-4 border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Daging Sapi Premium</h2>
                <Button size="icon" variant="outline" className="bg-red-500 hover:bg-red-600">
                  <TrashIcon className="h-4 w-4 text-white" />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <p>Jumlah: 2</p>
                <p>Harga: Rp 75.000,00</p>
              </div>
              <div className="flex items-center justify-end">
                <p>Total: Rp 150.000,00</p>
              </div>
            </div>
            <div className="grid gap-4 border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Daging Sapi Premium</h2>
                <Button size="icon" variant="outline" className="bg-red-500 hover:bg-red-600">
                  <TrashIcon className="h-4 w-4 text-white" />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <p>Jumlah: 2</p>
                <p>Harga: Rp 75.000,00</p>
              </div>
              <div className="flex items-center justify-end">
                <p>Total: Rp 150.000,00</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-2 border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <p>Subtotal</p>
                <p>Rp 300.000,00</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Shipping</p>
                <p>Rp 15.000,00</p>
              </div>
              <div className="flex items-center justify-between font-bold">
                <p>Grand Total</p>
                <p>Rp 315.000,00</p>
              </div>
            </div>
            <Button className="w-full border-2 bg-green-400 hover:bg-green-600 text-white" size="lg">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>)
  );
}


function TrashIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>)
  );
}