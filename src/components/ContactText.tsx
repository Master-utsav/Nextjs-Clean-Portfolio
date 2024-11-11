import { motion } from 'framer-motion'

const ContactText = ({titleInView} : {titleInView : boolean}) => {
  return (
   
            <motion.div className="max-w-lg flex flex-col sm:gap-6 gap-2 relative justify-center items-center sm:p-6 p-1 overflow-hidden animate-fade-in">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: [0.68, -0.6, 0.32, 1.6],
                }}
                className="sm:max-w-3xl w-full sm:text-5xl text-4xl font-extrabold text-center transition-colors duration-500 ease-in-out dark:text-blue-300 text-blue-800 leading-tight font-[family-name:var(--font-accent)] z-0"
              >
                <motion.span
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.05 }}
                  transition={{
                    duration: 0.5,
                    delay: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  className="relative dark:text-white-700 text-black-500 inline-block font-[family-name:var(--font-salsa)]"
                >
                  <motion.div
                    className="absolute inset-0 bg-blue-500/15 dark:bg-blue-200/10 shadow-md rounded shadow-blue-800/5 dark:shadow-blue-600/5"
                    initial={{ width: 0 }}
                    animate={titleInView ? { width: "100%" } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.3,
                      ease: [0.68, -0.6, 0.32, 1.6],
                    }}
                  />
                  <span className="relative z-10">Wait</span>
                </motion.span>
                , this time{" "}
                <motion.span className="relative dark:text-white-700 text-black-500 inline-block font-[family-name:var(--font-salsa)]">
                  <motion.div
                    className="absolute inset-0 bg-blue-500/15 dark:bg-blue-200/10 shadow-md rounded shadow-blue-800/5 dark:shadow-blue-600/5"
                    initial={{ width: 0 }}
                    animate={titleInView ? { width: "100%" } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      ease: [0.68, -0.6, 0.32, 1.6],
                    }}
                  />
                  <span className="relative z-10">I</span>
                </motion.span>{" "}
                will{" "}
                <motion.span className="relative dark:text-white-700 text-black-500 inline-block font-[family-name:var(--font-salsa)]">
                  <motion.div
                    className="absolute inset-0 bg-blue-500/15 dark:bg-blue-200/10 shadow-md rounded shadow-blue-800/5 dark:shadow-blue-600/5"
                    initial={{ width: 0 }}
                    animate={titleInView ? { width: "100%" } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.7,
                      ease: [0.68, -0.6, 0.32, 1.6],
                    }}
                  />
                  <span className="relative z-10">Contact</span>
                </motion.span>{" "}
                you.
              </motion.h1>
            </motion.div>
  )
}

export default ContactText
