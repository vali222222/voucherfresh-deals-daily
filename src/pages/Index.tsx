import { VoucherHeader } from "@/components/VoucherHeader";
import { SearchBar } from "@/components/SearchBar";
import { BrandCard } from "@/components/BrandCard";
import { Footer } from "@/components/Footer";
import appleLogo from "@/assets/apple-logo.png";
import sephoraLogo from "@/assets/sephora-logo.png";
import hmLogo from "@/assets/hm-logo.png";
import zaraLogo from "@/assets/zara-logo.png";

const Index = () => {
  const brands = [
    {
      logo: appleLogo,
      brand: "Apple",
      offer: "Students Only - 95% Off Your Order",
      usedToday: 198,
      timeLeft: 13,
    },
    {
      logo: sephoraLogo,
      brand: "Sephora",
      offer: "60% Off Your Order",
      usedToday: 209,
      timeLeft: 13,
    },
    {
      logo: hmLogo,
      brand: "H&M",
      offer: "80% Off Your Order",
      usedToday: 185,
      timeLeft: 21,
    },
    {
      logo: zaraLogo,
      brand: "Zara",
      offer: "70% Off Your Order",
      usedToday: 246,
      timeLeft: 11,
    },
  ];

  return (
    <div className="min-h-screen bg-dark-background">
      <VoucherHeader />
      
      <div className="pb-8">
        <SearchBar />
      </div>

      <main className="max-w-md mx-auto px-4 py-6">
        <div className="space-y-4">
          {brands.map((brand, index) => (
            <BrandCard
              key={index}
              logo={brand.logo}
              brand={brand.brand}
              offer={brand.offer}
              usedToday={brand.usedToday}
              timeLeft={brand.timeLeft}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
