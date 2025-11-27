'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const subsidiaries = [
    {
        id: 1,
        category: "Architectural",
        title: "Shahin Architecture",
        subtitle: "Avant-Garde Design & Master Planning",
        description: "Award-winning architectural solutions for luxury residences and commercial landmarks.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8dwKRBRRF-ecdJnARZDsX0SG4o1GAEzx5XS9pDklz9YuEFs41IN2D06-I8MADURmOyLNO0eUp_a3dzn-1boTo_TCq3BkJ2x5WgNdKr3A88MJeFRCSv6A2x1KKIzOUJsK6SyYfRnx96XQPCi68h8Oy0DrIR3_3KMhJAg5qMQSAh2lfzlKtdBlJeGvwH3xceFj_rKrG1GGiycWoQUcDLA3xLbKueBYINUBlI1Lwv5NFACIiooWRq53UsLlsLk8YqGQNYxs-J6I81KrH",
        gradient: "from-[#1a365d] to-[#2d5a8c]"
    },
    {
        id: 2,
        category: "Development",
        title: "Shahin Development",
        subtitle: "High-End Real Estate Investments",
        description: "Crafting premium living and commercial spaces in prime locations.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh7CJF1lyhsNm98CNkdmV0i7Vt3EesvsBFauDWerdH2mJxOM_R9ZGYvelaHF6Do-FJPEnF_pT5MVA2JWppu0ubXUintjMyNRguJY6Vy9OglNwHqw1Oi0vp0HyY7DULJDkksnuCMcqkp9hloop9z71ocDexAGZJsi_Zdmn6RNYbXMxVPkbjKC4jc1_1ecrhxQVCiIxcDspwD95YjhKr5NHYjMIvNbAihsT6sljVGunpaVcRujp0lRgaK8Vixh4Jv54MEmfOCCbbczNG",
        gradient: "from-[#7c2d12] to-[#b45309]"
    },
    {
        id: 3,
        category: "Construction",
        title: "Shahin Construction",
        subtitle: "Precision Engineering & Build",
        description: "Delivering excellence in construction with state-of-the-art techniques.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvxSGJTXddHdeHHVimEUG46HvNjOpEVaZVmP6Yrw8XeDgdwOkvdGhtL6avyFiK6s5V05PM7AmLOKqGKwyx2IhDnFfiy_tToXs5gBqZ0uYmCKJZaF3fRiV0iRnWzthNYvv1v6cHj-FneAt5jfZc22TEUynJ78saVriIsIu6BN7jl-6P_xewZb56426Xna-IxbFoexNKVqsxw3g7FgUD9KKYFsHJpZVCPFl1wCN-f2ca54pMBtqsetdDK5vak7LtevQUPBotPQE7c683",
        gradient: "from-[#134e4a] to-[#0f766e]"
    },
    {
        id: 4,
        category: "Media",
        title: "Shahin Media",
        subtitle: "Global Content & Digital Innovation",
        description: "Producing impactful media and digital experiences across platforms.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY7welrf_52jGG-UwRjR6SDV36qWtPDETQeDgwx51FGa-QgfOB2fUsemD9V5YwDAC_dW6-Td33q61EkcXY4kMt37Bv5uy59Sz-KCM8FkfWqFaBVrLuFeRpUawDT5sTV4Zbt-tDL5_wHaEyJvffDQDmaT8vQKkick_SXjmQa6G-7PrYdJHB8feNcufXcBpFRKpSkzex0sV_RWwH-nfAxsM49mz-pRH7y-5qV8H9lP73Ff4MRIrw5dI0-TVP9xDt2cU_3lRJ8HdIFV5v",
        gradient: "from-[#4c1d95] to-[#7c3aed]"
    }
];

export function SubsidiariesSection() {
    return (
        <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-6">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-display text-4xl md:text-5xl text-center mb-12 text-foreground"
                >
                    Our Portfolio of Subsidiaries
                </motion.h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {subsidiaries.map((subsidiary, index) => (
                        <motion.div
                            key={subsidiary.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`bg-gradient-to-br ${subsidiary.gradient} text-white p-8 rounded-lg flex flex-col justify-between min-h-[400px] relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-300`}
                        >
                            <div className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                <Image
                                    src={subsidiary.image}
                                    alt={`${subsidiary.category} pattern`}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-center border-b border-white/20 pb-2 mb-4">
                                    <span className="font-body text-sm">{subsidiary.category}</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                                <h4 className="font-display text-3xl mb-1">{subsidiary.title}</h4>
                                <p className="font-body text-sm">{subsidiary.subtitle}</p>
                            </div>

                            <p className="relative z-10 font-body text-sm text-white/80">
                                {subsidiary.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
