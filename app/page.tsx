import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F2ECDE] p-[0px]">
      <div className="relative w-full h-[70vh] md:h-full">
        <Image
          src="/gc-support.jpg"
          alt="GC Support logo"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
