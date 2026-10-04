import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-koyu">
      <Image
        src="/images/zambak-icon-mark.png"
        alt=""
        aria-hidden
        width={885}
        height={886}
        priority
        className="pointer-events-none absolute right-[-6%] top-1/2 w-[clamp(320px,46vw,640px)] h-auto -translate-y-1/2 opacity-[0.08]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-koyu via-koyu/40 to-transparent"
      />

      <Container className="relative pt-16 pb-14 md:pt-24 md:pb-24">
        <div>
          <Reveal>
            <p className="font-mono text-xs tracking-[0.24em] uppercase text-un-soft mb-6">
              {COMPANY.shortName} · {COMPANY.tagline}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.03] tracking-tight text-un-soft max-w-2xl">
              Lezzetin <em className="italic">zirvesi</em>, hizmetin güvencesi.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 text-base md:text-lg text-un-soft/70 max-w-lg leading-relaxed">
              Merkezi mutfağımızda hazırladığımız yemekleri, soğuk zincir
              korunarak eğitim, kamu ve sanayi kuruluşlarına hijyenik ve
              zamanında ulaştırıyoruz.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/hizmetlerimiz" variant="primary-light">
                Hizmetlerimizi Keşfedin
              </Button>
              <Button href="/iletisim" variant="outline-light">
                Bize Ulaşın
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
