# 1. สร้างโฟลเดอร์ Sections ถ้ายังไม่มี (มีแล้วข้าม)
mkdir -p src/components/Sections

# 2. ย้ายไฟล์หน้าแรกทั้งหมดเข้า Sections
mv src/components/Hero.tsx src/components/Sections/HeroSection.tsx
mv src/components/StatsSection.tsx src/components/Sections/StatsSection.tsx
mv src/components/Services/ServicesSectionBlock.tsx src/components/Sections/ServicesSectionBlock.tsx
mv src/components/TestimonialsSection.tsx src/components/Sections/TestimonialsSection.tsx
mv src/components/FAQSection.tsx src/components/Sections/FAQSection.tsx
mv src/components/CTASection.tsx src/components/Sections/CTASection.tsx
mv src/components/AboutSection.tsx src/components/Sections/AboutSection.tsx
mv src/components/FeatureSection.tsx src/components/Sections/FeatureSection.tsx