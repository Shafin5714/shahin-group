'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
    Briefcase, MapPin, Clock, ChevronDown, ChevronRight, Search,
    Users, Heart, Zap, Coffee, GraduationCap, Globe2, Shield,
    ArrowRight, Sparkles, Building2, X, Send, Upload, Check
} from 'lucide-react';

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

// Job data
const jobListings = [
    {
        id: 1,
        title: 'Senior Project Manager',
        department: 'Construction',
        location: 'Dhaka, Bangladesh',
        type: 'Full-time',
        experience: '8+ years',
        salary: 'Competitive',
        description: 'Lead large-scale construction projects from inception to completion. Manage cross-functional teams and ensure project delivery within budget and timeline.',
        requirements: [
            'Bachelor\'s degree in Civil Engineering or related field',
            '8+ years of experience in construction project management',
            'PMP certification preferred',
            'Strong leadership and communication skills',
            'Experience with luxury residential projects'
        ],
        posted: '2 days ago'
    },
    {
        id: 2,
        title: 'Architect - Residential Design',
        department: 'Design',
        location: 'Dhaka, Bangladesh',
        type: 'Full-time',
        experience: '5+ years',
        salary: 'Competitive',
        description: 'Create innovative residential designs that blend luxury with sustainability. Work closely with clients and construction teams to bring visions to life.',
        requirements: [
            'Master\'s degree in Architecture',
            '5+ years of experience in residential design',
            'Proficiency in AutoCAD, Revit, and 3D modeling software',
            'Strong portfolio of luxury residential projects',
            'Knowledge of sustainable design practices'
        ],
        posted: '1 week ago'
    },
    {
        id: 3,
        title: 'Civil Engineer',
        department: 'Engineering',
        location: 'Chattogram, Bangladesh',
        type: 'Full-time',
        experience: '3+ years',
        salary: 'Competitive',
        description: 'Design and oversee construction of infrastructure projects. Ensure compliance with safety standards and building codes.',
        requirements: [
            'Bachelor\'s degree in Civil Engineering',
            '3+ years of experience in structural design',
            'Knowledge of local building codes and regulations',
            'Proficiency in structural analysis software',
            'Strong problem-solving skills'
        ],
        posted: '3 days ago'
    },
    {
        id: 4,
        title: 'Marketing Manager',
        department: 'Marketing',
        location: 'Dhaka, Bangladesh',
        type: 'Full-time',
        experience: '6+ years',
        salary: 'Competitive',
        description: 'Develop and execute marketing strategies for real estate projects. Manage brand presence and drive lead generation across multiple channels.',
        requirements: [
            'Bachelor\'s degree in Marketing or Business',
            '6+ years of experience in real estate marketing',
            'Experience with digital marketing and CRM systems',
            'Strong analytical and creative skills',
            'Excellent communication abilities'
        ],
        posted: '5 days ago'
    },
    {
        id: 5,
        title: 'Financial Analyst',
        department: 'Finance',
        location: 'Dhaka, Bangladesh',
        type: 'Full-time',
        experience: '4+ years',
        salary: 'Competitive',
        description: 'Analyze financial data and provide insights for investment decisions. Support budgeting, forecasting, and financial reporting processes.',
        requirements: [
            'Bachelor\'s degree in Finance or Accounting',
            'CFA or MBA preferred',
            '4+ years of experience in financial analysis',
            'Advanced Excel and financial modeling skills',
            'Experience in real estate or construction industry'
        ],
        posted: '1 week ago'
    },
    {
        id: 6,
        title: 'HR Business Partner',
        department: 'Human Resources',
        location: 'Dhaka, Bangladesh',
        type: 'Full-time',
        experience: '5+ years',
        salary: 'Competitive',
        description: 'Partner with business leaders to develop and implement HR strategies. Drive talent acquisition, development, and employee engagement initiatives.',
        requirements: [
            'Bachelor\'s degree in HR or related field',
            'SHRM or equivalent certification preferred',
            '5+ years of HR business partner experience',
            'Strong knowledge of labor laws and regulations',
            'Excellent interpersonal and negotiation skills'
        ],
        posted: '4 days ago'
    }
];

const benefits = [
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive medical, dental, and vision coverage for you and your family' },
    { icon: GraduationCap, title: 'Learning & Development', description: 'Continuous learning opportunities and professional development programs' },
    { icon: Coffee, title: 'Work-Life Balance', description: 'Flexible working arrangements and generous paid time off' },
    { icon: Zap, title: 'Performance Bonus', description: 'Competitive bonus structure tied to individual and company performance' },
    { icon: Shield, title: 'Job Security', description: 'Stable employment with one of Bangladesh\'s leading conglomerates' },
    { icon: Globe2, title: 'Growth Opportunities', description: 'Career progression paths across our diverse business portfolio' },
];

const departments = ['All', 'Construction', 'Design', 'Engineering', 'Marketing', 'Finance', 'Human Resources'];

// Hero Section
function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="Career at Shahin Group"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
            </motion.div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 z-[1] opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Content */}
            <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 120 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-8"
                    />

                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-3 text-brand-gold text-sm uppercase tracking-[0.3em] font-medium mb-6"
                    >
                        <Briefcase className="w-4 h-4" />
                        Join Our Team
                        <Briefcase className="w-4 h-4" />
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                    >
                        Build Your <span className="text-brand-gold">Career</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10"
                    >
                        Join one of Bangladesh's most respected conglomerates.
                        Shape the future of construction and real estate with us.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <a href="#openings" className="inline-flex items-center gap-3 bg-brand-gold text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-brand-gold/90 transition-all duration-300 group">
                            View Open Positions
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#culture" className="inline-flex items-center gap-3 bg-transparent border-2 border-white/30 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                            Our Culture
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-brand-gold/30 z-10" />
            <div className="absolute bottom-20 right-10 w-32 h-32 border-r-2 border-b-2 border-brand-gold/30 z-10" />
        </section>
    );
}

// Why Join Us Section
function WhyJoinSection() {
    return (
        <section id="culture" className="relative py-32 bg-brand-navy overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent" />
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-brand-gold" />
                            <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium">Why Join Us</span>
                        </motion.div>

                        <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Where <span className="text-brand-gold">Talent</span> Meets Opportunity
                        </motion.h2>

                        <motion.p variants={fadeInUp} className="text-white/70 text-lg leading-relaxed mb-8">
                            At Shahin Group, we believe our people are our greatest asset. We foster an environment
                            where innovation thrives, careers flourish, and every team member contributes to
                            building a legacy of excellence.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="space-y-6">
                            {[
                                { icon: Users, title: '500+ Team Members', desc: 'A diverse workforce driving innovation' },
                                { icon: Building2, title: '28 Years of Excellence', desc: 'Stable growth and industry leadership' },
                                { icon: Globe2, title: 'Multi-Industry Exposure', desc: 'Work across construction, real estate, and manufacturing' },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                                        <item.icon className="w-6 h-6 text-brand-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-white/60 text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[500px] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                                alt="Team Collaboration"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-8 -left-8 bg-brand-gold p-8"
                        >
                            <div className="text-4xl font-bold text-black mb-2">95%</div>
                            <div className="text-black/70 text-sm uppercase tracking-wider">Employee Satisfaction</div>
                        </motion.div>

                        {/* Decorative Frame */}
                        <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand-gold/20 -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Benefits Section
function BenefitsSection() {
    return (
        <section className="relative py-32 bg-gradient-to-b from-brand-navy to-black overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                        <Heart className="w-5 h-5 text-brand-gold" />
                        <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium">Benefits & Perks</span>
                    </motion.div>

                    <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        We Take Care of <span className="text-brand-gold">Our People</span>
                    </motion.h2>

                    <motion.p variants={fadeInUp} className="text-white/60 text-lg max-w-2xl mx-auto">
                        Comprehensive benefits package designed to support your well-being and professional growth
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-brand-gold/30 transition-all duration-500"
                        >
                            <div className="w-14 h-14 bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
                                <benefit.icon className="w-7 h-7 text-brand-gold" />
                            </div>
                            <h3 className="text-white font-bold text-xl mb-3">{benefit.title}</h3>
                            <p className="text-white/60 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Job Listings Section
function JobListingsSection() {
    const [selectedDepartment, setSelectedDepartment] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedJob, setExpandedJob] = useState<number | null>(null);
    const [showApplicationModal, setShowApplicationModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState<typeof jobListings[0] | null>(null);

    const filteredJobs = jobListings.filter(job => {
        const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
        const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.department.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesDepartment && matchesSearch;
    });

    const handleApply = (job: typeof jobListings[0]) => {
        setSelectedJob(job);
        setShowApplicationModal(true);
    };

    return (
        <section id="openings" className="relative py-32 bg-black overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-6">
                        <Briefcase className="w-5 h-5 text-brand-gold" />
                        <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium">Open Positions</span>
                    </motion.div>

                    <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        Find Your <span className="text-brand-gold">Perfect Role</span>
                    </motion.h2>

                    <motion.p variants={fadeInUp} className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
                        Explore opportunities across our diverse business units and find the position that matches your skills and aspirations
                    </motion.p>

                    {/* Search and Filter */}
                    <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <input
                                type="text"
                                placeholder="Search positions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 pl-12 pr-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                            />
                        </div>
                    </motion.div>

                    {/* Department Filter */}
                    <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
                        {departments.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setSelectedDepartment(dept)}
                                className={`px-5 py-2 text-sm uppercase tracking-wider transition-all duration-300 ${selectedDepartment === dept
                                        ? 'bg-brand-gold text-black font-bold'
                                        : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                                    }`}
                            >
                                {dept}
                            </button>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Job Listings */}
                <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                        {filteredJobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white/5 border border-white/10 hover:border-brand-gold/30 transition-all duration-300"
                            >
                                {/* Job Header */}
                                <div
                                    className="p-6 cursor-pointer"
                                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-white font-bold text-xl">{job.title}</h3>
                                                <span className="bg-brand-gold/20 text-brand-gold text-xs px-3 py-1 uppercase tracking-wider">
                                                    {job.type}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm">
                                                <span className="flex items-center gap-1">
                                                    <Briefcase className="w-4 h-4" />
                                                    {job.department}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    {job.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {job.experience}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-white/40 text-sm">{job.posted}</span>
                                            <motion.div
                                                animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ChevronDown className="w-6 h-6 text-brand-gold" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <AnimatePresence>
                                    {expandedJob === job.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 border-t border-white/10 pt-6">
                                                <p className="text-white/70 mb-6">{job.description}</p>

                                                <h4 className="text-white font-bold mb-4">Requirements:</h4>
                                                <ul className="space-y-2 mb-6">
                                                    {job.requirements.map((req, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-white/60">
                                                            <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                                                            {req}
                                                        </li>
                                                    ))}
                                                </ul>

                                                <button
                                                    onClick={() => handleApply(job)}
                                                    className="inline-flex items-center gap-3 bg-brand-gold text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-brand-gold/90 transition-all duration-300 group"
                                                >
                                                    Apply Now
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filteredJobs.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <Briefcase className="w-16 h-16 text-white/20 mx-auto mb-4" />
                            <h3 className="text-white text-xl font-bold mb-2">No positions found</h3>
                            <p className="text-white/50">Try adjusting your search or filter criteria</p>
                        </motion.div>
                    )}
                </div>

                {/* Didn't find the right role */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center bg-white/5 border border-white/10 p-10"
                >
                    <h3 className="text-white font-bold text-2xl mb-4">Don't see the right role?</h3>
                    <p className="text-white/60 mb-6 max-w-xl mx-auto">
                        We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                    </p>
                    <button className="inline-flex items-center gap-3 bg-transparent border-2 border-brand-gold text-brand-gold px-8 py-3 font-bold uppercase tracking-wider hover:bg-brand-gold hover:text-black transition-all duration-300">
                        Submit General Application
                    </button>
                </motion.div>
            </div>

            {/* Application Modal */}
            <AnimatePresence>
                {showApplicationModal && selectedJob && (
                    <ApplicationModal
                        job={selectedJob}
                        onClose={() => setShowApplicationModal(false)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}

// Application Modal
function ApplicationModal({ job, onClose }: { job: typeof jobListings[0], onClose: () => void }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        coverLetter: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert('Application submitted successfully!');
        onClose();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-brand-navy border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div>
                        <h3 className="text-white font-bold text-xl">Apply for Position</h3>
                        <p className="text-brand-gold">{job.title}</p>
                    </div>
                    <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-white/70 text-sm mb-2">Full Name *</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-white/70 text-sm mb-2">Email *</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-white/70 text-sm mb-2">Phone *</label>
                        <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors"
                            placeholder="+880 1XXX-XXXXXX"
                        />
                    </div>

                    <div>
                        <label className="block text-white/70 text-sm mb-2">Resume/CV *</label>
                        <div className="border-2 border-dashed border-white/10 p-8 text-center hover:border-brand-gold/30 transition-colors cursor-pointer">
                            <Upload className="w-10 h-10 text-white/40 mx-auto mb-3" />
                            <p className="text-white/60 mb-1">Drag and drop your resume or click to browse</p>
                            <p className="text-white/40 text-sm">PDF, DOC, DOCX (Max 5MB)</p>
                            <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-white/70 text-sm mb-2">Cover Letter</label>
                        <textarea
                            value={formData.coverLetter}
                            onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-gold/50 transition-colors resize-none"
                            placeholder="Tell us why you're interested in this role..."
                        />
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-white/5 text-white py-3 font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 bg-brand-gold text-black py-3 font-bold uppercase tracking-wider hover:bg-brand-gold/90 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            <Send className="w-5 h-5" />
                            Submit Application
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
}

// CTA Section
function CTASection() {
    return (
        <section className="relative py-24 bg-brand-gold overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Sparkles className="w-10 h-10 text-black/50 mx-auto mb-6" />

                    <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-6">
                        Ready to Make an Impact?
                    </h2>

                    <p className="text-black/70 text-lg mb-10 max-w-2xl mx-auto">
                        Join a team that's shaping the future of Bangladesh's infrastructure.
                        Your next career milestone starts here.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#openings" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-black/80 transition-all duration-300 group">
                            Browse Openings
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <Link href="/about" className="inline-flex items-center gap-3 bg-transparent border-2 border-black text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-black/10 transition-all duration-300">
                            Learn About Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Main Career Page Component
export default function CareerPage() {
    return (
        <div className="bg-brand-navy">
            <HeroSection />
            <WhyJoinSection />
            <BenefitsSection />
            <JobListingsSection />
            <CTASection />
        </div>
    );
}
