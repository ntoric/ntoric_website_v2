import { Badge } from '@/components/ui/badge'
import ScrollReveal from './ScrollReveal'

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <ScrollReveal className={className}>
      <div
        className={`mb-12 md:mb-16 ${
          align === 'center' ? 'text-center' : 'text-left'
        }`}
      >
        {badge && (
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1.5 text-sm font-medium"
          >
            {badge}
          </Badge>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  )
}
