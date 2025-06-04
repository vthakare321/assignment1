
import BlogPosts from "./components/Blog";
import Hero from "./components/Hero";
import MessagingFeatures from "./components/Messaging";
import ProductFeatures from "./components/Product";
import ProductFeaturesDark from "./components/ProductDark";
import TestimonialCard from "./components/Testimonal";
import ProudSection from "./components/ProudSection";
import MailInput from "./components/MailInput";
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <Hero/>
    <MessagingFeatures/>
    <ProductFeatures/>
    <ProductFeaturesDark/>
    <TestimonialCard/>
    <BlogPosts/>
    <ProudSection/>
    <MailInput/>
    <Footer/>
    </>
  )
}

export default App;
