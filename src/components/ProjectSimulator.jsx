import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, Smartphone, Wifi, Battery, Play, ShoppingCart, Send, Plus, Minus, 
  User, Check, ThumbsUp, MessageSquare, AlertCircle, Sparkles, MapPin, 
  Calendar, CreditCard, ChevronRight, RefreshCw, BarChart2, Heart, Search,
  Compass, Sprout, Wind, Droplet, Thermometer, Flame, Star, Compass as UberIcon
} from "lucide-react";
import { PERSONAL_INFO } from "../data";



export default function ProjectSimulator({ projectId, projectTitle, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-bg/80 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="relative w-full max-w-4xl h-[85vh] bg-slate-900 border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl shadow-accent-purple/10"
      >
        {/* Device Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-white/5 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer block" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-yellow-500 block" />
              <span className="w-3 h-3 rounded-full bg-green-500 block" />
            </div>
            <span className="text-xs font-mono text-gray-500">|</span>
            <span className="text-xs font-mono text-accent-cyan tracking-wider uppercase font-semibold">
              Live Interactive Prototype
            </span>
          </div>
          
          <h3 className="font-display font-bold text-sm text-white tracking-tight">
            {projectTitle}
          </h3>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Device Frame Body */}
        <div className="flex-1 bg-slate-950 p-4 md:p-6 overflow-y-auto flex justify-center items-start">
          <div className="w-full max-w-2xl bg-slate-900 rounded-3xl border-4 border-slate-800 shadow-2xl overflow-hidden flex flex-col min-h-[500px]">
            {/* Status Bar */}
            <div className="bg-slate-950 px-6 py-2 flex justify-between items-center text-[11px] font-mono text-gray-500 select-none border-b border-white/5">
              <span>12:00 PM</span>
              <div className="w-16 h-4 bg-slate-900 rounded-full border border-white/5 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-700 animate-pulse" />
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="w-3.5 h-3.5 text-accent-cyan" />
                <span className="text-[10px]">5G</span>
                <Battery className="w-4 h-4 text-emerald-400" />
              </div>
            </div>

            {/* Simulated UI Screen Area */}
            <div className="flex-1 bg-slate-900 p-4 sm:p-6 relative">
              {projectId === "airbnb" && <AirbnbSim />}
              {projectId === "agritech" && <AgriTechSim />}
              {projectId === "restaurant" && <RestaurantSim />}
              {projectId === "ecommerce" && <EcommerceSim />}
              {projectId === "stockmarket" && <StockMarketSim />}
              {projectId === "linkedin" && <LinkedInSim />}
              {projectId === "chatgpt" && <ChatGPTSim />}
              {projectId === "collegecrm" && <CollegeCrmSim />}
              {projectId === "hospital" && <HospitalSim />}
              {projectId === "uber" && <UberSim />}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ==========================================
   1. AIRBNB SIMULATOR
   ========================================== */
function AirbnbSim() {
  const [nights, setNights] = useState(3);
  const [guests, setGuests] = useState(2);
  const [selectedHome, setSelectedHome] = useState(0);
  const [booked, setBooked] = useState(false);

  const HOMES = [
    { title: "Seaside Luxury Villa", location: "Goa, India", price: 120, rating: 4.9, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80" },
    { title: "Cozy Treehouse Retreat", location: "Manali, India", price: 85, rating: 4.8, img: "https://images.unsplash.com/photo-1508333706533-1ab43ecb1606?auto=format&fit=crop&w=300&q=80" },
    { title: "Modern Glass Penthouse", location: "Mumbai, India", price: 150, rating: 4.95, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=300&q=80" }
  ];

  const currentHome = HOMES[selectedHome];
  const basePrice = currentHome.price * nights;
  const cleaningFee = 25;
  const serviceFee = Math.round(basePrice * 0.08);
  const totalCost = basePrice + cleaningFee + serviceFee;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest flex items-center">
          <Compass className="w-4 h-4 text-accent-cyan mr-1.5" /> Discovery Hub
        </h4>
        <span className="text-xs bg-accent-purple/20 text-accent-purple border border-accent-purple/30 px-2 py-0.5 rounded-full font-mono font-bold">
          Airbnb OS
        </span>
      </div>

      {!booked ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left Column: Properties */}
          <div className="md:col-span-7 space-y-3">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">Select stay</span>
            {HOMES.map((home, i) => (
              <div
                key={i}
                onClick={() => setSelectedHome(i)}
                className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer flex gap-3 ${
                  selectedHome === i 
                    ? "bg-accent-purple/10 border-accent-purple shadow-md shadow-accent-purple/5"
                    : "bg-slate-950/40 border-white/5 hover:border-white/10"
                }`}
              >
                <img src={home.img} className="w-20 h-16 object-cover rounded-lg" alt={home.title} />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-white leading-tight">{home.title}</h5>
                    <p className="text-[10px] text-gray-400 mt-0.5">{home.location}</p>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs font-bold text-accent-cyan">${home.price} <span className="text-[10px] text-gray-500 font-normal">/ night</span></span>
                    <span className="text-[10px] text-yellow-500 flex items-center font-bold">★ {home.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Checkout Widget */}
          <div className="md:col-span-5 bg-slate-950/60 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
            <div className="space-y-3.5">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block border-b border-white/5 pb-2">
                Booking Details
              </span>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Duration (Nights)</span>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => setNights(Math.max(1, nights - 1))} className="p-1 rounded bg-white/5 hover:bg-white/10 text-white"><Minus className="w-3 h-3" /></button>
                    <span className="font-mono font-semibold text-white w-5 text-center">{nights}</span>
                    <button onClick={() => setNights(nights + 1)} className="p-1 rounded bg-white/5 hover:bg-white/10 text-white"><Plus className="w-3 h-3" /></button>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Guests Count</span>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => setGuests(Math.max(1, guests - 1))} className="p-1 rounded bg-white/5 hover:bg-white/10 text-white"><Minus className="w-3 h-3" /></button>
                    <span className="font-mono font-semibold text-white w-5 text-center">{guests}</span>
                    <button onClick={() => setGuests(guests + 1)} className="p-1 rounded bg-white/5 hover:bg-white/10 text-white"><Plus className="w-3 h-3" /></button>
                  </div>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="space-y-1.5 border-t border-white/5 pt-3.5 text-xs font-mono">
                <div className="flex justify-between text-gray-400">
                  <span>${currentHome.price} x {nights} nights</span>
                  <span className="text-white">${basePrice}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Cleaning Fee</span>
                  <span className="text-white">${cleaningFee}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Service Surcharge</span>
                  <span className="text-white">${serviceFee}</span>
                </div>
                <div className="flex justify-between text-accent-cyan font-bold pt-2 border-t border-white/5">
                  <span>Total (USD)</span>
                  <span>${totalCost}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setBooked(true)}
              className="w-full mt-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-xs font-bold text-white uppercase tracking-wider hover:from-pink-600 hover:to-rose-600 shadow-lg shadow-pink-500/20 transition-all duration-300"
            >
              Reserve Stay Now
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-950/80 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4"
        >
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
            <Check className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h5 className="font-bold text-lg text-white">Booking Confirmed!</h5>
            <p className="text-xs text-gray-400">Your reservation has been logged into the secure MERN database.</p>
          </div>
          <div className="bg-slate-900 border border-white/5 p-4 rounded-xl max-w-sm mx-auto text-left text-xs font-mono space-y-1.5">
            <div className="flex justify-between"><span className="text-gray-500">Stay:</span><span className="text-white font-bold">{currentHome.title}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Nights:</span><span className="text-white">{nights} Nights</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Bill:</span><span className="text-accent-cyan font-bold">${totalCost}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Auth Token:</span><span className="text-emerald-400">SBU-AIRBNB-{(Math.random() * 100000).toFixed(0)}</span></div>
          </div>
          <button
            onClick={() => setBooked(false)}
            className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-mono text-gray-300 hover:text-white transition-colors"
          >
            Book Another Villa
          </button>
        </motion.div>
      )}
    </div>
  );
}

/* ==========================================
   2. AGRI TECH SIMULATOR
   ========================================== */
function AgriTechSim() {
  const [moisture, setMoisture] = useState(42);
  const [temperature, setTemperature] = useState(28.4);
  const [sprinklers, setSprinklers] = useState(false);
  const [shading, setShading] = useState(false);

  useEffect(() => {
    let interval;
    if (sprinklers) {
      interval = setInterval(() => {
        setMoisture((prev) => Math.min(85, prev + 2));
      }, 1000);
    } else {
      interval = setInterval(() => {
        setMoisture((prev) => Math.max(30, prev - 1));
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [sprinklers]);

  useEffect(() => {
    let interval;
    if (shading) {
      interval = setInterval(() => {
        setTemperature((prev) => Math.max(22.1, prev - 0.4));
      }, 1000);
    } else {
      interval = setInterval(() => {
        setTemperature((prev) => Math.min(31.5, prev + 0.2));
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [shading]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest flex items-center">
          <Sprout className="w-4 h-4 text-emerald-400 mr-1.5" /> Smart Farm IoT Console
        </h4>
        <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono font-bold">
          AgriTech OS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Card: Telemetry Readings */}
        <div className="bg-slate-950/60 border border-white/5 rounded-2xl p-5 space-y-4">
          <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider block border-b border-white/5 pb-2">
            Real-Time Sensors (Soil Batch C4)
          </span>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900 border border-white/5 rounded-xl p-4 text-center relative overflow-hidden">
              <Droplet className="w-5 h-5 text-accent-cyan mx-auto mb-1.5" />
              <span className="text-[10px] font-mono text-gray-500 uppercase">Moisture</span>
              <span className="block font-display font-extrabold text-2xl text-white mt-1">
                {moisture}%
              </span>
              <div className="h-1 bg-slate-950 rounded-full mt-2 overflow-hidden">
                <div 
                  className="h-full bg-accent-cyan transition-all duration-300"
                  style={{ width: `${moisture}%` }}
                />
              </div>
            </div>

            <div className="bg-slate-900 border border-white/5 rounded-xl p-4 text-center relative overflow-hidden">
              <Thermometer className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
              <span className="text-[10px] font-mono text-gray-500 uppercase">Temperature</span>
              <span className="block font-display font-extrabold text-2xl text-white mt-1">
                {temperature.toFixed(1)}°C
              </span>
              <div className="h-1 bg-slate-950 rounded-full mt-2 overflow-hidden">
                <div 
                  className="h-full bg-amber-400 transition-all duration-300"
                  style={{ width: `${(temperature / 40) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-white/5 rounded-xl p-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Wind className="w-4 h-4 text-teal-400" />
              <span className="text-xs text-gray-300">Humidity Index</span>
            </div>
            <span className="font-mono text-xs font-bold text-white">62.8%</span>
          </div>
        </div>

        {/* Right Card: Remote Toggles */}
        <div className="bg-slate-950/60 border border-white/5 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider block border-b border-white/5 pb-2 mb-4">
              Automation Commands
            </span>

            <div className="space-y-4">
              <div className="flex justify-between items-center bg-slate-900 border border-white/5 p-3 rounded-xl">
                <div>
                  <span className="text-xs font-bold text-white block">Automated Sprinklers</span>
                  <span className="text-[10px] text-gray-500">Simulates real-time soil absorption</span>
                </div>
                <button
                  onClick={() => setSprinklers(!sprinklers)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
                    sprinklers ? "bg-emerald-500" : "bg-gray-700"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 transform ${
                      sprinklers ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              <div className="flex justify-between items-center bg-slate-900 border border-white/5 p-3 rounded-xl">
                <div>
                  <span className="text-xs font-bold text-white block">Canopy Shade Covers</span>
                  <span className="text-[10px] text-gray-500">Lowers heat indices dynamically</span>
                </div>
                <button
                  onClick={() => setShading(!shading)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
                    shading ? "bg-emerald-500" : "bg-gray-700"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 transform ${
                      shading ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-white/5 rounded-xl p-3 text-center mt-4 text-[11px] font-mono">
            {sprinklers ? (
              <span className="text-accent-cyan flex items-center justify-center animate-pulse">
                ● Sprinklers actively pumping. Soil hydrating...
              </span>
            ) : shading ? (
              <span className="text-amber-400 flex items-center justify-center animate-pulse">
                ● Canopy shaded. Cooling crop beds...
              </span>
            ) : (
              <span className="text-gray-500">Farm status idling. Safe metrics.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   3. RESTAURANT SIMULATOR
   ========================================== */


function RestaurantSim() {
  const [cart, setCart] = useState([]);
  const [ordering, setOrdering] = useState(false);
  const [step, setStep] = useState(0);

  const DISHES = [
    { name: "MERN Stack Premium Burger", price: 8.99, tag: "Chef Special" },
    { name: "Express Garlic Flatbread", price: 4.99, tag: "Appetizer" },
    { name: "MongoDB Iced Cappuccino", price: 3.49, tag: "Drinks" }
  ];

  const addToCart = (dish) => {
    setCart((prev) => {
      const idx = prev.findIndex(item => item.name === dish.name);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx].qty += 1;
        return copy;
      }
      return [...prev, { name: dish.name, price: dish.price, qty: 1 }];
    });
  };

  const updateQty = (name, delta) => {
    setCart((prev) => {
      const idx = prev.findIndex(item => item.name === name);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx].qty += delta;
        if (copy[idx].qty <= 0) {
          copy.splice(idx, 1);
        }
        return copy;
      }
      return prev;
    });
  };

  const subTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const salesTax = Math.round(subTotal * 0.05 * 100) / 100;
  const grandTotal = Math.round((subTotal + salesTax) * 100) / 100;

  useEffect(() => {
    let timer;
    if (ordering) {
      if (step < 2) {
        timer = setTimeout(() => {
          setStep((prev) => prev + 1);
        }, 3000);
      }
    }
    return () => clearTimeout(timer);
  }, [ordering, step]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest flex items-center">
          <ShoppingCart className="w-4 h-4 text-amber-500 mr-1.5" /> Gourmet Quick Order
        </h4>
        <span className="text-xs bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full font-mono font-bold">
          DineMaster OS
        </span>
      </div>

      {!ordering ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Menu Catalog */}
          <div className="md:col-span-7 space-y-3">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">Menu Items</span>
            {DISHES.map((dish, i) => (
              <div key={i} className="bg-slate-950/40 border border-white/5 rounded-xl p-3.5 flex justify-between items-center hover:border-white/10 transition-all">
                <div>
                  <span className="text-[9px] font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 px-1.5 py-0.5 rounded-md uppercase font-semibold">
                    {dish.tag}
                  </span>
                  <h5 className="text-xs font-bold text-white mt-1.5">{dish.name}</h5>
                  <p className="text-xs text-accent-cyan font-bold mt-1">${dish.price}</p>
                </div>
                <button
                  onClick={() => addToCart(dish)}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-xs text-black font-extrabold uppercase transition-colors"
                >
                  Add +
                </button>
              </div>
            ))}
          </div>

          {/* Cart summary */}
          <div className="md:col-span-5 bg-slate-950/60 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block border-b border-white/5 pb-2 mb-3">
                My Booking Bag
              </span>

              {cart.length === 0 ? (
                <div className="text-center py-12 text-gray-500 text-xs">
                  Your bag is currently empty.
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-xs">
                      <div className="flex-1 max-w-[150px]">
                        <p className="text-white font-bold leading-tight truncate">{item.name}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">${item.price} each</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button onClick={() => updateQty(item.name, -1)} className="p-0.5 rounded bg-white/5 hover:bg-white/10 text-white"><Minus className="w-3 h-3" /></button>
                        <span className="font-mono text-white text-xs w-4 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.name, 1)} className="p-0.5 rounded bg-white/5 hover:bg-white/10 text-white"><Plus className="w-3 h-3" /></button>
                      </div>
                    </div>
                  ))}

                  <div className="space-y-1.5 border-t border-white/5 pt-3 text-[11px] font-mono text-gray-400">
                    <div className="flex justify-between"><span>Subtotal</span><span className="text-white">${subTotal.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Sales Tax (5%)</span><span className="text-white">${salesTax.toFixed(2)}</span></div>
                    <div className="flex justify-between text-amber-400 font-bold border-t border-white/5 pt-2 text-xs">
                      <span>Grand Total</span>
                      <span>${grandTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              disabled={cart.length === 0}
              onClick={() => setOrdering(true)}
              className="w-full mt-4 py-2 rounded-xl bg-amber-500 disabled:bg-gray-800 disabled:text-gray-500 hover:bg-amber-600 text-xs font-bold text-black uppercase tracking-widest transition-colors duration-300"
            >
              Order & Check Out
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-slate-950/80 border border-white/5 rounded-2xl p-6 text-center space-y-6">
          <div className="space-y-1">
            <h5 className="font-bold text-lg text-white">Your Order is Dispatched!</h5>
            <p className="text-xs text-gray-400">Real-time Node.js sockets are streaming courier status steps.</p>
          </div>

          <div className="max-w-md mx-auto grid grid-cols-3 gap-2 relative">
            {/* Courier Steps */}
            <div className={`p-3 rounded-xl border text-center relative z-10 ${step >= 0 ? "bg-amber-400/10 border-amber-400 text-amber-400" : "bg-slate-900 border-white/5 text-gray-500"}`}>
              <span className="block text-lg">🍳</span>
              <span className="text-[10px] font-bold uppercase block mt-1">Cooking</span>
            </div>
            <div className={`p-3 rounded-xl border text-center relative z-10 ${step >= 1 ? "bg-amber-400/10 border-amber-400 text-amber-400" : "bg-slate-900 border-white/5 text-gray-500"}`}>
              <span className="block text-lg">🛵</span>
              <span className="text-[10px] font-bold uppercase block mt-1">On Route</span>
            </div>
            <div className={`p-3 rounded-xl border text-center relative z-10 ${step >= 2 ? "bg-emerald-500/10 border-emerald-500 text-emerald-400 animate-bounce" : "bg-slate-900 border-white/5 text-gray-500"}`}>
              <span className="block text-lg">🎁</span>
              <span className="text-[10px] font-bold uppercase block mt-1">Arrived</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-white/5 p-4 rounded-xl max-w-xs mx-auto text-xs font-mono text-gray-400 text-left space-y-1">
            <div className="flex justify-between"><span>Payment Status:</span><span className="text-emerald-400 font-bold">PAID</span></div>
            <div className="flex justify-between"><span>Bill Total:</span><span className="text-white font-bold">${grandTotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>ETA Time:</span><span className="text-accent-cyan font-bold">{step === 2 ? "Now" : `${15 - (step * 5)} Mins`}</span></div>
          </div>

          <button
            onClick={() => {
              setOrdering(false);
              setStep(0);
              setCart([]);
            }}
            className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-mono text-gray-300 hover:text-white"
          >
            Reset Catalog Menu
          </button>
        </div>
      )}
    </div>
  );
}

/* ==========================================
   4. E-COMMERCE SIMULATOR
   ========================================== */
function EcommerceSim() {
  const [promoted, setPromoted] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [paid, setPaid] = useState(false);
  const [card, setCard] = useState("");

  const originalPrice = 149.99;
  const discount = promoted ? 30.00 : 0.00;
  const grandTotal = originalPrice - discount;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "SBU2027") {
      setPromoted(true);
    } else {
      alert("Invalid promo code. Hint: Use 'SBU2027'");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest flex items-center">
          <CreditCard className="w-4 h-4 text-indigo-400 mr-1.5" /> Secure Checkout Terminal
        </h4>
        <span className="text-xs bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full font-mono font-bold">
          Apex OS
        </span>
      </div>

      {!paid ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left: Product Showcase */}
          <div className="md:col-span-6 bg-slate-950/40 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
            <div className="space-y-3">
              <img 
                src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80" 
                className="w-full h-32 object-cover rounded-xl"
                alt="Product"
              />
              <div>
                <h5 className="text-xs font-bold text-white">Apex Cyberpunk Mechanical Keyboard</h5>
                <p className="text-[10px] text-gray-400 mt-1">Gateron Yellow Switches, Double-shot PBT Keycaps, RGB Backlit.</p>
              </div>
            </div>

            <div className="border-t border-white/5 pt-3 mt-3 flex justify-between items-center">
              <span className="text-[10px] font-mono text-gray-500">Retail Price</span>
              <div className="text-right">
                {promoted && (
                  <span className="text-[10px] text-gray-500 line-through mr-1.5">${originalPrice}</span>
                )}
                <span className="text-xs font-bold text-accent-cyan">${grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Right: Payment Form */}
          <div className="md:col-span-6 bg-slate-950/60 border border-white/5 rounded-2xl p-4 space-y-4 flex flex-col justify-between">
            {/* Promo Code Input */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Promo Coupon</span>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Try SBU2027"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-slate-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white uppercase outline-none focus:border-indigo-400"
                />
                <button
                  onClick={handleApplyPromo}
                  className="px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-xs font-bold text-black uppercase rounded-lg"
                >
                  Apply
                </button>
              </div>
              {promoted && (
                <span className="text-[10px] text-emerald-400 font-bold block animate-pulse">
                  ✓ Code SBU2027 Applied! Saved $30.00.
                </span>
              )}
            </div>

            {/* Credit Card Input */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Stripe Secure Card</span>
              <div className="bg-slate-900 border border-white/10 rounded-lg p-2 flex items-center space-x-2">
                <CreditCard className="w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="4242 •••• •••• 4242"
                  value={card}
                  onChange={(e) => setCard(e.target.value)}
                  className="bg-transparent text-xs text-white flex-1 outline-none font-mono"
                  maxLength={19}
                />
              </div>
            </div>

            <button
              onClick={() => setPaid(true)}
              className="w-full py-2 bg-gradient-to-r from-indigo-500 to-accent-purple text-xs font-bold text-white uppercase tracking-wider rounded-xl hover:from-indigo-600 hover:to-accent-purple/80"
            >
              Pay ${grandTotal.toFixed(2)}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-slate-950/80 border border-white/5 rounded-2xl p-6 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
            <Check className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h5 className="font-bold text-lg text-white">Payment Completed Successfully!</h5>
            <p className="text-xs text-gray-400">Webhook responses successfully synchronized with MongoDB accounts.</p>
          </div>
          <div className="bg-slate-900 border border-white/5 p-3 rounded-xl max-w-xs mx-auto text-xs font-mono text-gray-400 text-left space-y-1">
            <div className="flex justify-between"><span>Transaction ID:</span><span className="text-white font-bold">ch_3N198kSBU3345</span></div>
            <div className="flex justify-between"><span>Amount Paid:</span><span className="text-accent-cyan font-bold">${grandTotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Billing Name:</span><span className="text-white">{PERSONAL_INFO.name}</span></div>
          </div>
          <button
            onClick={() => {
              setPaid(false);
              setPromoted(false);
              setPromoCode("");
              setCard("");
            }}
            className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-mono text-gray-300 hover:text-white"
          >
            Run Mock Store Sandbox
          </button>
        </div>
      )}
    </div>
  );
}

/* ==========================================
   5. STOCK MARKET SIMULATOR
   ========================================== */
function StockMarketSim() {
  const [ticks, setTicks] = useState([242, 243.5, 241, 244.2, 245.8, 245.0, 246.9, 245.8]);
  const [shares, setShares] = useState(10);
  const [tradeStatus, setTradeStatus] = useState(null);

  // Auto Tick Updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTicks((prev) => {
        const last = prev[prev.length - 1];
        const delta = (Math.random() - 0.48) * 3; // slight upward drift
        const next = Math.max(150, Math.round((last + delta) * 100) / 100);
        return [...prev.slice(-9), next]; // keep last 10 ticks
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const currentPrice = ticks[ticks.length - 1];
  const cost = Math.round(currentPrice * shares * 100) / 100;

  const handleTrade = (type) => {
    setTradeStatus(`${type} Order logged of ${shares} shares at $${currentPrice.toFixed(2)}`);
    setTimeout(() => setTradeStatus(null), 3000);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest flex items-center">
          <BarChart2 className="w-4 h-4 text-emerald-400 mr-1.5" /> High-Freq Ticker Sandbox
        </h4>
        <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono font-bold">
          Ticker OS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left: Interactive SVG Chart */}
        <div className="md:col-span-7 bg-slate-950/60 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">Index Asset</span>
                <h5 className="text-xs font-bold text-white leading-tight">SBU Tech Systems Inc. (SBU)</h5>
              </div>
              <div className="text-right">
                <span className="block text-sm font-bold text-emerald-400 animate-pulse">${currentPrice.toFixed(2)}</span>
                <span className="text-[10px] text-gray-500 font-mono">Live feeds</span>
              </div>
            </div>

            {/* Simulated Line Chart (SVG) */}
            <div className="h-28 bg-slate-900 rounded-xl border border-white/5 flex items-end p-2 relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="0.85"
                  points={ticks.map((val, idx) => {
                    const x = (idx / (ticks.length - 1)) * 100;
                    const min = Math.min(...ticks) - 2;
                    const max = Math.max(...ticks) + 2;
                    const y = 30 - (((val - min) / (max - min)) * 25 + 2);
                    return `${x},${y}`;
                  }).join(" ")}
                />
              </svg>
              {/* Overlay lines */}
              <div className="absolute inset-x-0 top-1/3 border-b border-white/5 border-dashed" />
              <div className="absolute inset-x-0 top-2/3 border-b border-white/5 border-dashed" />
            </div>
          </div>

          <div className="text-[10px] font-mono text-gray-500 mt-2 flex justify-between">
            <span>Grid Refresh: 1.5s</span>
            <span>Latency: 4ms (Aggregated)</span>
          </div>
        </div>

        {/* Right: Asset order terminal */}
        <div className="md:col-span-5 bg-slate-950/60 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block border-b border-white/5 pb-2">
              Trade Execution
            </span>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>Shares volume</span>
                <div className="flex items-center space-x-2">
                  <button onClick={() => setShares(Math.max(1, shares - 5))} className="p-1 rounded bg-white/5 text-white text-xs font-bold">-5</button>
                  <span className="font-mono text-white font-semibold w-6 text-center">{shares}</span>
                  <button onClick={() => setShares(shares + 5)} className="p-1 rounded bg-white/5 text-white text-xs font-bold">+5</button>
                </div>
              </div>

              <div className="flex justify-between text-xs font-mono text-gray-500 pt-2 border-t border-white/5">
                <span>Value Required:</span>
                <span className="text-white">${cost.toFixed(2)}</span>
              </div>
            </div>

            {tradeStatus && (
              <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-center text-[10px] font-mono text-emerald-400">
                {tradeStatus}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <button
              onClick={() => handleTrade("BUY")}
              className="py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-xs font-extrabold text-black uppercase tracking-wider transition-colors"
            >
              Buy Asset
            </button>
            <button
              onClick={() => handleTrade("SELL")}
              className="py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-xs font-extrabold text-white uppercase tracking-wider transition-colors"
            >
              Sell Asset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   6. LINKEDIN SIMULATOR
   ========================================== */


function LinkedInSim() {
  const [feed, setFeed] = useState([
    {
      author: "PravRaha Tech",
      avatar: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=150&q=80",
      role: "Corporate Hub (pravraha.com)",
      time: "4h",
      content: "Thrilled to witness the modern systems Ravi Pratap Singh is deploying. Quality architecture meets enterprise precision!",
      likes: 42,
      liked: false,
      comments: ["Incredible!", "Brilliant work!"]
    },
    {
      author: "Cisco Networking",
      avatar: "https://images.unsplash.com/photo-1549813069-f913d11e38c5?auto=format&fit=crop&w=150&q=80",
      role: "Verified Industry Profile",
      time: "1d",
      content: "Congratulations to our credential earners! Building robust systems starts with rigorous cybersecurity foundations.",
      likes: 128,
      liked: false,
      comments: []
    }
  ]);
  const [myPostText, setMyPostText] = useState("");

  const handlePost = () => {
    if (!myPostText.trim()) return;
    const newPost = {
      author: "Ravi Pratap Singh",
      avatar: PERSONAL_INFO.profileImage,
      role: "Full Stack Developer",
      time: "Just now",
      content: myPostText,
      likes: 0,
      liked: false,
      comments: []
    };
    setFeed([newPost, ...feed]);
    setMyPostText("");
  };

  const handleLike = (idx) => {
    setFeed((prev) => {
      const copy = [...prev];
      if (copy[idx].liked) {
        copy[idx].likes -= 1;
      } else {
        copy[idx].likes += 1;
      }
      copy[idx].liked = !copy[idx].liked;
      return copy;
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest flex items-center">
          <MessageSquare className="w-4 h-4 text-sky-400 mr-1.5" /> Professional Activity Feed
        </h4>
        <span className="text-xs bg-sky-500/20 text-sky-400 border border-sky-500/30 px-2 py-0.5 rounded-full font-mono font-bold">
          LinkedIn OS
        </span>
      </div>

      {/* Editor Box */}
      <div className="bg-slate-950/60 border border-white/5 p-4 rounded-2xl space-y-3">
        <div className="flex space-x-3">
          <img 
            src={PERSONAL_INFO.profileImage} 
            className="w-10 h-10 rounded-full object-cover shrink-0" 
            alt="User avatar" 
          />
          <textarea
            rows={2}
            value={myPostText}
            onChange={(e) => setMyPostText(e.target.value)}
            placeholder="What's your next coding achievement, Ravi?"
            className="flex-1 bg-slate-900 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 outline-none focus:border-sky-400 resize-none"
          />
        </div>
        <div className="flex justify-end pt-1">
          <button
            onClick={handlePost}
            disabled={!myPostText.trim()}
            className="px-4 py-1.5 bg-sky-500 disabled:bg-slate-800 disabled:text-gray-500 hover:bg-sky-600 text-xs font-bold text-black rounded-lg uppercase tracking-wider"
          >
            Post Update
          </button>
        </div>
      </div>

      {/* Scrollable Feed List */}
      <div className="space-y-3 max-h-52 overflow-y-auto pr-1.5">
        {feed.map((post, i) => (
          <div key={i} className="bg-slate-950/40 border border-white/5 rounded-xl p-3.5 space-y-2.5">
            <div className="flex space-x-2.5 items-center">
              <img src={post.avatar} className="w-8 h-8 rounded-full object-cover shrink-0" alt={post.author} />
              <div>
                <h5 className="text-[11px] font-bold text-white leading-none">{post.author}</h5>
                <p className="text-[9px] text-gray-500 mt-0.5">{post.role} • {post.time}</p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed whitespace-pre-wrap">{post.content}</p>

            <div className="flex items-center space-x-4 border-t border-white/5 pt-2 text-[10px] font-mono text-gray-500">
              <button
                onClick={() => handleLike(i)}
                className={`flex items-center space-x-1.5 hover:text-sky-400 ${post.liked ? "text-sky-400 font-bold" : ""}`}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{post.likes} Likes</span>
              </button>
              <div className="flex items-center space-x-1">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{post.comments.length} Comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================
   7. CHATGPT SIMULATOR
   ========================================== */


function ChatGPTSim() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome! I am an expert AI Assistant simulated to demonstrate MERN engineering concepts. Ask me a question or try one of the prompt presets below!" }
  ]);
  const [inputText, setInputText] = useState("");
  const [typing, setTyping] = useState(false);

  const PRESETS = [
    { title: "Explain MERN Stack", response: "The MERN stack consists of:\n- **MongoDB**: A high-performance NoSQL document database.\n- **Express.js**: A minimalist web application routing server.\n- **React.js**: A reactive, component-based frontend UI engine.\n- **Node.js**: A high-speed asynchronous JS server runtime.\n\nCombined, they deliver a highly secure, scalable, unified JavaScript ecosystem." },
    { title: "Binary Search C++", response: "Here is a fast Binary Search implementation in C++:\n```cpp\nint binarySearch(int arr[], int l, int r, int x) {\n    while (l <= r) {\n        int m = l + (r - l) / 2;\n        if (arr[m] == x) return m;\n        if (arr[m] < x) l = m + 1;\n        else r = m - 1;\n    }\n    return -1;\n}\n```\nTime Complexity: O(log N) • Auxiliary Space: O(1)." }
  ];

  const handleSend = (textToSend) => {
    if (!textToSend.trim() || typing) return;
    
    const userMsg = { sender: "user", text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setTyping(true);

    // Look for matching preset or general response
    const matched = PRESETS.find(p => p.title.toLowerCase() === textToSend.toLowerCase() || textToSend.toLowerCase().includes("mern") || textToSend.toLowerCase().includes("binary"));
    const botText = matched 
      ? matched.response 
      : `Excellent query: "${textToSend}". Under Ravi Pratap Singh's backend server structures, this request leverages dynamic routing modules, JWT verification pipelines, and Mongo collection aggregations for maximum response speeds. Let me know if you would like to inspect the database models!`;

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
      setTyping(false);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest flex items-center">
          <Sparkles className="w-4 h-4 text-purple-400 mr-1.5" /> Interactive AI Assistant
        </h4>
        <span className="text-xs bg-purple-500/20 text-purple-400 border border-purple-400/30 px-2 py-0.5 rounded-full font-mono font-bold">
          GPT OS
        </span>
      </div>

      {/* Messages Feed */}
      <div className="bg-slate-950/60 border border-white/5 rounded-2xl p-4 h-44 overflow-y-auto space-y-3.5 pr-1.5">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`p-3 rounded-xl max-w-[85%] text-xs leading-relaxed whitespace-pre-wrap ${
              m.sender === "user" 
                ? "bg-purple-600 text-white font-medium" 
                : "bg-slate-900 border border-white/10 text-gray-300"
            }`}>
              <span className="text-[9px] font-mono font-bold uppercase block text-gray-400 mb-1 leading-none">
                {m.sender === "user" ? "You" : "AI Copilot"}
              </span>
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="bg-slate-900 border border-white/10 p-3 rounded-xl text-xs text-gray-500 animate-pulse font-mono">
              AI Copilot is streaming code nodes...
            </div>
          </div>
        )}
      </div>

      {/* Presets */}
      <div className="flex gap-2">
        {PRESETS.map((p, i) => (
          <button
            key={i}
            onClick={() => handleSend(p.title)}
            className="px-3 py-1.5 bg-white/5 border border-white/10 hover:bg-white/10 text-[10px] font-mono text-gray-300 hover:text-white rounded-lg transition-colors flex-1"
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Custom Input */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Ask something..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend(inputText)}
          className="flex-1 bg-slate-950/80 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-purple-400"
        />
        <button
          onClick={() => handleSend(inputText)}
          className="px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl flex items-center justify-center transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* ==========================================
   8. COLLEGE CRM SIMULATOR
   ========================================== */


function CollegeCrmSim() {
  const [students, setStudents] = useState([
    { name: "Aditya Roy", id: "SBU-CSE-001", gpa: 8.4, promoted: true },
    { name: "Ananya Mishra", id: "SBU-CSE-002", gpa: 9.1, promoted: true },
    { name: "Priya Ranjan", id: "SBU-CSE-003", gpa: 7.9, promoted: false }
  ]);
  const [filterBranch, setFilterBranch] = useState("CSE");

  const updateGpa = (idx, delta) => {
    setStudents((prev) => {
      const copy = [...prev];
      copy[idx].gpa = Math.round(Math.max(4.0, Math.min(10.0, copy[idx].gpa + delta)) * 10) / 10;
      return copy;
    });
  };

  const togglePromote = (idx) => {
    setStudents((prev) => {
      const copy = [...prev];
      copy[idx].promoted = !copy[idx].promoted;
      return copy;
    });
  };

  const classAverage = Math.round((students.reduce((acc, s) => acc + s.gpa, 0) / students.length) * 100) / 100;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest flex items-center">
          <Calendar className="w-4 h-4 text-emerald-400 mr-1.5" /> Student CRM Hub
        </h4>
        <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono font-bold">
          CRM OS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left: Table */}
        <div className="md:col-span-8 bg-slate-950/60 border border-white/5 rounded-2xl p-4 space-y-3">
          <div className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-[10px] font-mono text-gray-500 uppercase">Student Directory</span>
            <div className="flex space-x-1.5 text-[9px] font-mono bg-white/5 p-0.5 rounded border border-white/5">
              <span className="px-1.5 py-0.5 bg-emerald-500 text-black font-bold rounded">CSE</span>
              <span className="px-1.5 py-0.5 text-gray-400">ECE</span>
              <span className="px-1.5 py-0.5 text-gray-400">ME</span>
            </div>
          </div>

          <div className="space-y-2">
            {students.map((student, idx) => (
              <div key={idx} className="bg-slate-900 border border-white/5 rounded-xl p-3 flex justify-between items-center">
                <div>
                  <h5 className="text-xs font-bold text-white leading-tight">{student.name}</h5>
                  <p className="text-[9px] text-gray-500 font-mono mt-0.5">{student.id}</p>
                </div>
                <div className="flex items-center space-x-4">
                  {/* GPA buttons */}
                  <div className="flex items-center space-x-2">
                    <button onClick={() => updateGpa(idx, -0.1)} className="p-0.5 rounded bg-white/5 hover:bg-white/10 text-white"><Minus className="w-3 h-3" /></button>
                    <span className="font-mono text-xs font-bold text-accent-cyan w-6 text-center">{student.gpa.toFixed(1)}</span>
                    <button onClick={() => updateGpa(idx, 0.1)} className="p-0.5 rounded bg-white/5 hover:bg-white/10 text-white"><Plus className="w-3 h-3" /></button>
                  </div>
                  {/* Promote Check */}
                  <button
                    onClick={() => togglePromote(idx)}
                    className={`px-2 py-1 rounded-md text-[9px] font-mono tracking-wider uppercase font-bold border ${
                      student.promoted 
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                        : "bg-red-500/10 border-red-500 text-red-400"
                    }`}
                  >
                    {student.promoted ? "Promoted" : "On Hold"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Metrics */}
        <div className="md:col-span-4 bg-slate-950/60 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
          <div className="space-y-3.5">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block border-b border-white/5 pb-2">
              CRM Metrics
            </span>
            <div className="text-center py-4 bg-slate-900 rounded-xl border border-white/5">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">Class Avg GPA</span>
              <span className="text-2xl font-display font-extrabold text-white block mt-1">
                {classAverage}
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400 font-mono">
            Modifications update instantly in secure CRM states.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   9. HOSPITAL MANAGEMENT SIMULATOR
   ========================================== */


function HospitalSim() {
  const [docs, setDocs] = useState(
    [
      { name: "Dr. Amit Roy", field: "Cardiologist", status: "Available" },
      { name: "Dr. Neha Singh", field: "Neurologist", status: "In Surgery" },
      { name: "Dr. Vijay K.", field: "Pediatrician", status: "On Leave" }
    ]
  );
  const [bookedStatus, setBookedStatus] = useState(null);

  const toggleStatus = (idx) => {
    const STATUSES = ["Available", "In Surgery", "On Leave"];
    setDocs((prev) => {
      const copy = [...prev];
      const nextIdx = (STATUSES.indexOf(copy[idx].status) + 1) % STATUSES.length;
      copy[idx].status = STATUSES[nextIdx];
      return copy;
    });
  };

  const handleBook = (name) => {
    setBookedStatus(`Session requested with ${name}. Notification sent to doctor.`);
    setTimeout(() => setBookedStatus(null), 3500);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest flex items-center">
          <Heart className="w-4 h-4 text-rose-500 mr-1.5" /> Healthcare Operations Panel
        </h4>
        <span className="text-xs bg-rose-500/20 text-rose-400 border border-rose-500/30 px-2 py-0.5 rounded-full font-mono font-bold">
          Hospital OS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Doctors Table */}
        <div className="md:col-span-8 bg-slate-950/60 border border-white/5 rounded-2xl p-4 space-y-3">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block border-b border-white/5 pb-2">
            Physicians Roster
          </span>

          <div className="space-y-2.5">
            {docs.map((doc, idx) => (
              <div key={idx} className="bg-slate-900 border border-white/5 rounded-xl p-3 flex justify-between items-center">
                <div>
                  <h5 className="text-xs font-bold text-white">{doc.name}</h5>
                  <p className="text-[9px] text-gray-500 mt-0.5">{doc.field}</p>
                </div>
                <div className="flex items-center space-x-3">
                  {/* Status click to cycle */}
                  <span
                    onClick={() => toggleStatus(idx)}
                    className={`px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase border cursor-pointer select-none transition-colors ${
                      doc.status === "Available" ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" :
                      doc.status === "In Surgery" ? "bg-amber-500/10 border-amber-500 text-amber-400 animate-pulse" :
                      "bg-slate-800 border-white/10 text-gray-500"
                    }`}
                  >
                    {doc.status}
                  </span>
                  <button
                    disabled={doc.status !== "Available"}
                    onClick={() => handleBook(doc.name)}
                    className="px-2.5 py-1 rounded bg-rose-500 hover:bg-rose-600 disabled:bg-gray-800 text-black font-extrabold text-[10px] uppercase transition-colors"
                  >
                    Book Appt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Console Vitals / Alerts */}
        <div className="md:col-span-4 bg-slate-950/60 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block border-b border-white/5 pb-2">
              Notifications
            </span>
            <div className="p-3 bg-rose-500/5 border border-rose-500/10 rounded-xl space-y-1">
              <span className="text-[9px] text-rose-500 font-bold block animate-pulse">● System Alert</span>
              <p className="text-[10px] text-gray-400 leading-normal">Emergency Room triage beds currently optimized. General ward occupancy 74%.</p>
            </div>
            {bookedStatus && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-mono rounded-xl leading-normal">
                {bookedStatus}
              </div>
            )}
          </div>

          <span className="text-[10px] font-mono text-gray-500 block text-center mt-3">
            Click status to cycle availability.
          </span>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   10. UBER SIMULATOR
   ========================================== */
function UberSim() {
  const [selectedRide, setSelectedRide] = useState(0);
  const [matching, setMatching] = useState(false);
  const [step, setStep] = useState(0);

  const RIDES = [
    { name: "UberX", price: 12.50, eta: 3, icon: "🚗" },
    { name: "UberXL", price: 19.90, eta: 5, icon: "🚐" },
    { name: "UberBlack", price: 28.00, eta: 2, icon: "🖤" }
  ];

  const handleRequest = () => {
    setMatching(true);
    setStep(0);
  };

  useEffect(() => {
    let timer;
    if (matching) {
      if (step < 2) {
        timer = setTimeout(() => {
          setStep((prev) => prev + 1);
        }, 2500);
      }
    }
    return () => clearTimeout(timer);
  }, [matching, step]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest flex items-center">
          <UberIcon className="w-4 h-4 text-cyan-400 mr-1.5" /> High-Performance Ride Matrix
        </h4>
        <span className="text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded-full font-mono font-bold">
          Uber OS
        </span>
      </div>

      {!matching ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Ride Options */}
          <div className="md:col-span-7 space-y-3">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">Available Tiers</span>
            {RIDES.map((ride, i) => (
              <div
                key={i}
                onClick={() => setSelectedRide(i)}
                className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex justify-between items-center ${
                  selectedRide === i 
                    ? "bg-cyan-500/10 border-cyan-400 shadow-md shadow-cyan-400/5"
                    : "bg-slate-950/40 border-white/5 hover:border-white/10"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{ride.icon}</span>
                  <div>
                    <h5 className="text-xs font-bold text-white">{ride.name}</h5>
                    <p className="text-[9px] text-gray-400">ETA: {ride.eta} mins away</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-accent-cyan">${ride.price.toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Route details */}
          <div className="md:col-span-5 bg-slate-950/60 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
            <div className="space-y-3.5">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block border-b border-white/5 pb-2">
                Route Details
              </span>

              <div className="space-y-3 text-xs font-mono text-gray-300">
                <div className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold shrink-0">●</span>
                  <div>
                    <p className="text-[9px] text-gray-500">PICK UP</p>
                    <p className="text-white font-bold leading-tight">Sarala Birla University</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-rose-500 font-bold shrink-0">■</span>
                  <div>
                    <p className="text-[9px] text-gray-500">DESTINATION</p>
                    <p className="text-white font-bold leading-tight">PravRaha Corporate HQ</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleRequest}
              className="w-full mt-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-bold text-white uppercase tracking-widest"
            >
              Request {RIDES[selectedRide].name}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-slate-950/80 border border-white/5 rounded-2xl p-6 text-center space-y-6">
          {step === 0 && (
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 animate-pulse mx-auto">
                <UberIcon className="w-8 h-8 animate-spin" />
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-base text-white">Matching with local drivers...</h5>
                <p className="text-xs text-gray-400 font-mono">Running routing and cost algorithms.</p>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-base text-white">Driver Matched!</h5>
                <p className="text-xs text-gray-400">Rohan Sharma (White Suzuki Dzire) is picking you up.</p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-bounce">
              <span className="text-3xl block">🚕</span>
              <div className="space-y-1">
                <h5 className="font-bold text-base text-white">Your Ride Has Arrived!</h5>
                <p className="text-xs text-gray-400">Check-in at Sarala Birla University gate.</p>
              </div>
            </div>
          )}

          <div className="bg-slate-900 border border-white/5 p-4 rounded-xl max-w-xs mx-auto text-xs font-mono text-gray-400 text-left space-y-1">
            <div className="flex justify-between"><span>Selected Tier:</span><span className="text-white font-bold">{RIDES[selectedRide].name}</span></div>
            <div className="flex justify-between"><span>Ride Fare:</span><span className="text-accent-cyan font-bold">${RIDES[selectedRide].price.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Ride ETA:</span><span className="text-emerald-400">{step === 2 ? "0 mins" : "3 mins"}</span></div>
          </div>

          <button
            onClick={() => {
              setMatching(false);
              setStep(0);
            }}
            className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-mono text-gray-300 hover:text-white"
          >
            Cancel / Book New Ride
          </button>
        </div>
      )}
    </div>
  );
}
