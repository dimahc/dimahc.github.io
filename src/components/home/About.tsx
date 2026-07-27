import { useTranslation } from '@/hooks'
import Image from 'next/image'
import Technologies from './Technologies'

export default function About() {
  const { tArray } = useTranslation()
  const paragraphs = tArray('about.paragraphs')

  return (
    <section className="max-w-7xl mx-auto space-y-12 px-6 md:px-0">
      <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
        <Image
          src="/images/profile.jpg"
          alt="Abdoul Hamid COULIBALY"
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          priority
        />
        <div className="absolute inset-0 ring-1 ring-border rounded-2xl pointer-events-none" />
      </div>

      <div className="space-y-8">
        <div className="space-y-8 text-muted text-lg md:text-xl leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={`${index === 3 ? "italic" : ""} max-w-prose`}>
              {paragraph}
            </p>
          ))}
        </div>
        <Technologies />
      </div>
    </section>
  )
}
