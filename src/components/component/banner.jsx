/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/BuoL0DZ5z7l
 */
import Link from "next/link"

export default function banner() {
  return (
    (<section
      className="relative w-full py-12 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url(/assets/images/meat-banner.jpg)",
        backdropFilter: "blur(0.5)",
      }}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4 text-white">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
            Temukan Daging Berkualitas Anda
          </h1>
          <p className="max-w-[600px] md:text-xl">
            Warong Daging didirikan dengan visi untuk menyediakan daging berkualitas tinggi dengan harga terjangkau ke seluruh Indonesia.
          </p>
        </div>
      </div>
    </section>)
  );
}