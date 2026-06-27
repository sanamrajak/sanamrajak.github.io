import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="hero" className="max-w-3xl mx-auto px-6">
      <div className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:items-center sm:gap-14">
        <div className="flex-1 flex flex-col gap-3 items-center text-center sm:items-start sm:text-left">
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900">
            {profile.fullName}
          </h1>
          <p className="text-lg text-stone-500 font-medium">{profile.tagline}</p>
          <p className="text-sm text-stone-400">{profile.region}</p>
          <p className="mt-2 text-sm text-accent font-medium">{profile.openTo}</p>
        </div>
        <div className="shrink-0">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-stone-200">
            <Image
              src="/photo.jpg"
              alt={profile.name}
              width={176}
              height={176}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
