import React from 'react';
import {
  FaConnectdevelop,
  FaRocket,
  FaStream,
  FaPlug,
  FaChartLine,
  FaTools,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaConnectdevelop size={30} className="text-primary" />,
    title: 'Easier Work Organization',
    description:
      'Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.',
  },
  {
    icon: <FaRocket size={30} className="text-primary" />,
    title: 'Fast Connection',
    description:
      'Completely pursue scalable customer cross-media through potentialities. Holistically quickly installed portals.',
  },
  {
    icon: <FaStream size={30} className="text-primary" />,
    title: 'Streamlined Processes',
    description:
      'Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.',
  },
  {
    icon: <FaPlug size={30} className="text-primary" />,
    title: 'Easier Integrations',
    description:
      'Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.',
  },
  {
    icon: <FaChartLine size={30} className="text-primary" />,
    title: 'Marketing Analytics',
    description:
      'Phosfluorescently engage worldwide methodologies with web-enabled interactively coordinate.',
  },
  {
    icon: <FaTools size={30} className="text-primary" />,
    title: 'Workflow Builder',
    description:
      'Collaboratively administrate turnkey service channels whereas virtual e-tailers. This is objectively scalable metrics whereas.',
  },
];

export default function MessagingFeatures() {
  return (
    <section className="container py-5 text-center">
      <h2 className="fw-semibold mb-2">Messaging for all</h2>
      <p className="text-muted mb-5">
        User generated content in real-time will have multiple touchpoints for offshoring.
      </p>
      <div className="row text-start">
        {features.map((feature, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="mb-2">{feature.icon}</div>
            <h5 className="fw-bold">{feature.title}</h5>
            <p className="text-muted">{feature.description}</p>
            <a href="#" className="text-primary text-decoration-none">
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
