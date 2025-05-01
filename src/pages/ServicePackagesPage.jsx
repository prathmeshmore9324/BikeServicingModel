// src/components/pages/ServicePackagesPage.jsx
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Package } from 'lucide-react';
import Package1  from '../../public/images/packages/Package1.png';
import Package2 from '../../public/images/packages/Package2.png';
import Package3  from '../../public/images/packages/Package3.png';
// Sample service categories
const serviceCategories = [
  { id: 1, name: 'Periodic Services', icon: '🔧' },
  { id: 2, name: 'Repair & Maintenance', icon: '⚙️' },
  { id: 3, name: 'Batteries', icon: '🔋' },
  { id: 4, name: 'Tyres & Wheel Care', icon: '🚲' },
  { id: 5, name: 'Denting & Painting', icon: '🖌️' },
  { id: 6, name: 'Detailing Services', icon: '✨' }
];

// Sample service packages
const servicePackages = [
  {
    id: 1,
    name: 'Basic Service',
    originalPrice: 4025,
    discountedPrice: 3019,
    warranty: '1000 Kms or 1 Month Warranty',
    recommendedInterval: 'Every 5000 Kms or 3 Months (Recommended)',
    features: [
      'Wiper Fluid Replacement',
      'Car Wash',
      'Engine Oil Replacement', 
      'Battery Water Top Up',
      'Interior Vacuuming (Seat & Carpet)',
      'Air Filter Cleaning',
      'Brake Check',
      'Chain Lubrication'
    ],
    recommended: false,
    image: Package1
  },
  {
    id: 2,
    name: 'Standard Service',
    originalPrice: 5500,
    discountedPrice: 4200,
    warranty: '1000 Kms or 1 Month Warranty',
    recommendedInterval: 'Every 10,000 Kms or 6 Months (Recommended)',
    features: [
      'Car Scanning',
      'Battery Water Top Up',
      'Wiper Fluid Replacement',
      'Car Wash',
      'Engine Oil Replacement',
      'Air Filter Replacement',
      'Brake Check & Adjustment',
      'Complete Inspection'
    ],
    recommended: true,
    image: Package2,
  },
  {
    id: 3,
    name: 'Comprehensive Service',
    originalPrice: 7000,
    discountedPrice: 5500,
    warranty: '2000 Kms or 2 Month Warranty',
    recommendedInterval: 'Every 15,000 Kms or 12 Months (Recommended)',
    features: [
      'Full Diagnostic Scan',
      'Complete Fluid Replacement',
      'Deep Interior Cleaning',
      'Premium Engine Oil',
      'All Filters Replacement',
      'Brake System Service',
      'Wheel Alignment & Balancing',
      'Battery Health Check'
    ],
    recommended: false,
    image: Package3,
  }
];

const ServicePackagesPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [bikeData, setBikeData] = useState({
    manufacturer: 'Hercules',
    model: 'MTB',
    fuelType: 'Petrol',
    image: 'https://via.placeholder.com/120x80'
  });

  const handleCheckout = () => {
    // Navigate to checkout page with cart data
    navigate('/checkout', { 
      state: { 
        cartItems: cartItems,
        bikeData: bikeData,
        subtotal: subtotal
      } 
    });
  };

  const [cartItems, setCartItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Periodic Services');

  useEffect(() => {
    window.scrollTo(0,0)
    if (state?.bikeData) {
      setBikeData(state.bikeData);
    }
  }, [state]);

  const toggleCartItem = (item) => {
    setCartItems(prev => 
      prev.some(cartItem => cartItem.id === item.id)
        ? prev.filter(cartItem => cartItem.id !== item.id)
        : [...prev, item]
    );
  };

  const isInCart = (itemId) => cartItems.some(item => item.id === itemId);
  const subtotal = cartItems.reduce((sum, item) => sum + item.discountedPrice, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6 flex-grow">
        <div className="w-full lg:w-2/3">
          <div className="relative mb-6">
            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  className={`flex flex-col items-center p-3 min-w-[120px] rounded-lg transition-colors ${
                    activeCategory === category.name 
                      ? 'bg-indigo-500 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveCategory(category.name)}
                >
                  <span className="text-2xl mb-1">{category.icon}</span>
                  <span className="text-xs font-medium text-center">{category.name}</span>
                </button>
              ))}
            </div>
            <div className="absolute left-0 -bottom-1 w-full h-px bg-gray-200"></div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Scheduled Packages</h2>
          <div className="space-y-6">
            {servicePackages.map((pkg) => (
              <ServicePackageCard 
                key={pkg.id}
                pkg={pkg}
                isInCart={isInCart}
                toggleCartItem={toggleCartItem}
              />
            ))}
          </div>
        </div>
        
        <CartSection 
      bikeData={bikeData}
      cartItems={cartItems}
      subtotal={subtotal}
      toggleCartItem={toggleCartItem}
      handleCheckout={handleCheckout}  // Pass the function to CartSection
    />
      </div>
      
      <Footer />
    </div>
  );
};

const ServicePackageCard = ({ pkg, isInCart, toggleCartItem }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    {pkg.recommended && (
      <div className="bg-green-500 text-white py-1 px-4 text-sm font-medium">
        RECOMMENDED
      </div>
    )}
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/5">
          <img 
            src={pkg.image} 
            alt={pkg.name} 
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        <div className="md:w-4/5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">{pkg.name}</h3>
          </div>
          
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <span>• {pkg.warranty}</span>
            <span>• {pkg.recommendedInterval}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
            {pkg.features.slice(0, 6).map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          {pkg.features.length > 6 && (
            <button className="text-accent hover:text-accent/80 text-sm mt-2">
              + {pkg.features.length - 6} more View All
            </button>
          )}
          
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 line-through">₹{pkg.originalPrice}</span>
              <span className="text-2xl font-bold">₹{pkg.discountedPrice}</span>
            </div>
            
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isInCart(pkg.id)
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => toggleCartItem(pkg)}
            >
              {isInCart(pkg.id) ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Added To Cart</span>
                </>
              ) : (
                'Add To Cart'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CartSection = ({ bikeData, cartItems, subtotal, toggleCartItem ,handleCheckout }) => (
  <div className="w-full lg:w-1/3">
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 sticky top-20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold">{bikeData.manufacturer} {bikeData.model}</h3>
          <p className="text-sm text-gray-500">{bikeData.fuelType}</p>
        </div>
        <img 
          src={bikeData.image} 
          alt={`${bikeData.manufacturer} ${bikeData.model}`} 
          className="w-24 h-auto"
        />
      </div>
      
      {cartItems.map((item) => (
        <div key={item.id} className="border-b border-gray-200 py-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-xs text-gray-500 mt-1">Basic parts included</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 line-through text-sm">₹{item.originalPrice}</span>
              <span className="font-bold">₹{item.discountedPrice}</span>
              <button 
                className="text-gray-400 hover:text-red-500"
                onClick={() => toggleCartItem(item)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {cartItems.length === 0 && (
        <div className="py-6 text-center text-gray-500">
          Your cart is empty
        </div>
      )}

      <div className="mt-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-bold">Subtotal ({cartItems.length} Items)</h4>
        <span className="text-lg font-bold">₹{subtotal}</span>
      </div>
      <p className="text-sm text-gray-500 mb-4">Extra charges may apply</p>
        <button 
        type="button"
        className="w-full p-3 bg-indigo-700 text-white font-medium rounded-md hover:bg-indigo-5
        00 transition-colors duration-200" 
        onClick={handleCheckout}
        disabled={cartItems.length === 0}
      >
              CHECKOUT
            </button>
      </div>
    </div>
  </div>
);

export default ServicePackagesPage;