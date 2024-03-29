/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/PmOecBFHD8o
 */
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import Banner from "@/components/component/banner"
import Link from "next/link";

export default function product() {
  return (
    <>
      <Banner />
      <main className="px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" style={{ backgroundColor: "whitesmoke" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((product, index) => (
          <Card>
            <CardContent className="flex flex-col items-center text-center">
              <Image
                key={index}
                alt="Product image"
                className="w-32 h-32 object-cover mb-4"
                height="200"
                src={"/assets/images/meat.png"}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200" />
              <h2 className="text-lg font-semibold mb-2">Daging Sapi</h2>
              <span className="text-gray-500 mb-4">Rp 75.000,00</span>
              <Link href="/dashboard/detailproduct">
                <Button className="bg-red-500 text-white">Add to Cart</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </main>
    </>
  );
}
