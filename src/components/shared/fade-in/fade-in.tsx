import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
}

export default function FadeIn({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '0px 0px -200px 0px' }}
    >
      {children}
    </motion.div>
  )
}
