import React, { useState, useEffect, useRef } from 'react';
import { Shield, Award, Users } from 'lucide-react';

interface StatProps {
  icon: React.ComponentType<any>;
  endValue: number;
  label: string;
  description: string;
  suffix?: string;
}

const CountUpStat: React.FC<StatProps> = ({ icon: Icon, endValue, label, description, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = endValue / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const newCount = Math.min(Math.floor(increment * currentStep), endValue);
        setCount(newCount);

        if (currentStep >= steps) {
          clearInterval(timer);
          setCount(endValue);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, endValue]);

  return (
    <div 
      ref={ref}
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all duration-300"
    >
      <Icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
      <div className="text-3xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
};

const CountUpStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
      <CountUpStat
        icon={Shield}
        endValue={15}
        suffix="+"
        label="Years Experience"
        description="Trusted roofing expertise"
      />
      <CountUpStat
        icon={Award}
        endValue={2500}
        suffix="+"
        label="Projects Completed"
        description="Satisfied customers"
      />
      <CountUpStat
        icon={Users}
        endValue={100}
        suffix="%"
        label="Customer Satisfaction"
        description="Happy homeowners"
      />
    </div>
  );
};

export default CountUpStats;