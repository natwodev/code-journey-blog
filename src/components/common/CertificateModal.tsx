import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  title: string
  issuer?: string
  dateIssued?: string
  certificateId?: string
}

export default function CertificateModal({ isOpen, onClose, imageSrc, title, issuer, dateIssued, certificateId }: CertificateModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Đóng"
            >
              <IoClose className="w-6 h-6 text-white" />
            </button>
            
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
            
            {/* Title and Details */}
            <div className="mt-4 text-center space-y-2">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              {issuer && (
                <p className="text-brand-cyan/90 text-sm">Issued by: {issuer}</p>
              )}
              {dateIssued && (
                <p className="text-white/70 text-sm">Date: {dateIssued}</p>
              )}
              {certificateId && (
                <p className="text-white/60 text-xs">ID: {certificateId}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
