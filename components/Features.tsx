import React from "react";

const Features: React.FC = () => {
  const features = [
    {
      icon: "📝",
      title: "Journaling",
      description: "Document your thoughts and emotions in a private and secure journal.",
    },
    {
      icon: "📊",
      title: "Mood Tracker",
      description: "Track your emotional well-being and recognize patterns over time.",
    },
    {
      icon: "📚",
      title: "Personalized Tips",
      description: "Receive daily guidance and tips to build emotional resilience.",
    },
    {
      icon: "🤝",
      title: "Community Support",
      description: "Connect with others in a safe space to share and grow together.",
    },
    {
      icon: "🌟",
      title: "Daily Affirmations",
      description: "Start your day with positive affirmations to boost your confidence.",
    },
    {
      icon: "📅",
      title: "Self-Care Planner",
      description: "Organize your day with activities focused on mindfulness and self-care.",
    },
  ];

  return (
    <section className="features bg-light-100 dark:bg-dark-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-dark-900 dark:text-light-100 mb-10">
          Features to Empower Your Emotional Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-item bg-white dark:bg-dark-700 rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4"
            >
              <div className="icon text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                {feature.title}
              </h3>
              <p className="text-dark-700 dark:text-light-300 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
