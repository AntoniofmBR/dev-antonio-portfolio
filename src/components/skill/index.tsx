import { motion } from 'framer-motion';

export type SkillProps = {
  src: string
  alt: string
}

export function Skill({ alt, src }: SkillProps) {
  const images_animation = {
    default: { scale: 1 },
    hover: { scale: 1.20 },
  };

  return (
    <motion.div
      variants={images_animation}
      initial="default"
      whileHover="hover"
      className='flex items-center justify-center'
    >
      <img
        src={src}
        alt={alt}
        className='h-24 w-auto '
      />
    </motion.div>
  )
}