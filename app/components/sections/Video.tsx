// import { useEffect, useRef } from 'react';
// import { motion, useInView, useAnimation } from 'framer-motion';
// import Image from 'next/image';

// 'use client';

// const Video = () => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true });
//     const controls = useAnimation();

//     useEffect(() => {
//         if (isInView) {
//             controls.start('open');
//         }
//     }, [isInView, controls]);

//     const eyeVariants = {
//         closed: {
//             clipPath: 'ellipse(50% 0% at 50% 50%)',
//             transition: { duration: 0.5 }
//         },
//         open: {
//             clipPath: 'ellipse(50% 50% at 50% 50%)',
//             transition: { duration: 0.7, delay: 0.2 }
//         }
//     };

//     return (
//         <section className="min-h-screen flex items-center justify-center bg-black relative">
//             <motion.div
//                 ref={ref}
//                 initial="closed"
//                 animate={controls}
//                 variants={eyeVariants}
//                 className="w-full max-w-4xl aspect-video relative overflow-hidden rounded-2xl"
//             >
//                 <Image
//                     src="/tv.png"
//                     alt="TV Display"
//                     fill
//                     className="object-cover"
//                     priority
//                 />
//             </motion.div>
//         </section>
//     );
// };

// export default Video;