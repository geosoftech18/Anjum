"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState } from "react";

const steps = [
    {
        title: "Research",
        description: [
            { icon: "🧪", text: "Identifying herbs with potential compounds" },
            { icon: "🔍", text: "Determining the potent activities" },
            { icon: "🚀", text: "Creating the product and its activities" }
        ]
    },
    {
        title: "Clinical Validation",
        description: [
            { icon: "⚕️", text: "Preclinical testing for safety & efficacy" },
            { icon: "📊", text: "Human trials for effectiveness" },
            { icon: "✔️", text: "Regulatory approval process" }
        ]
    },
    {
        title: "Manufacturing",
        description: [
            { icon: "🏭", text: "Ensuring GMP compliance" },
            { icon: "🛠️", text: "Scaling production efficiently" },
            { icon: "📦", text: "Packaging for distribution" }
        ]
    }
];

const CarousalComponent = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Tag */}
            <div className="text-headingOlive">Product Journey</div>
            {/* Title */}
            <div className="text-headingOlive text-4xl">Crafted with care & expertise</div>

            {/* Navigation Tabs */}
            <div className="flex space-x-4 my-4">
                {steps.map((step, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`px-4 py-2 ${activeStep === index ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"}`}
                    >
                        {step.title}
                    </button>
                ))}
            </div>

            {/* Carousel */}
            <Carousel>
                <CarouselContent className="mx-auto">
                    {steps[activeStep].description.map((item, index) => (
                        <CarouselItem key={index} className="flex basis-1/3 mr-5 aspect-square flex-col items-center justify-around p-4 border rounded-lg shadow-sm">
                            <div className="text-6xl">{item.icon}</div>
                            <p className="text-lg text-center mt-2">{item.text}</p>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default CarousalComponent;
